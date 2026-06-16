# syntax=docker/dockerfile:1

# ---- Base: Node 22 on Alpine, with pnpm enabled via corepack ----
FROM node:22-alpine AS base
RUN apk add --no-cache libc6-compat
RUN corepack enable
WORKDIR /app

# ---- Dependencies: install from lockfile (best layer caching) ----
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
# --ignore-scripts skips optional native build scripts (sharp, msw). We don't
# need them: images are unoptimized and next/og ships its own renderer.
# --no-frozen-lockfile lets pnpm resolve newly-added deps (e.g. nodemailer)
# when the committed lockfile predates them.
RUN pnpm install --no-frozen-lockfile --ignore-scripts

# ---- Builder: compile the Next.js standalone output ----
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
# NEXT_PUBLIC_* values are inlined at build time. Pass the canonical site URL
# here so sitemap/canonical/OG tags reflect the real production domain.
ARG NEXT_PUBLIC_SITE_URL=https://www.elevaterecoveryoh.com
ENV NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ---- Runner: minimal runtime image ----
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Run as an unprivileged user.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# The standalone output bundles only the files needed to run the server.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 3000

# Lightweight container healthcheck against the homepage.
HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget --no-verbose --tries=1 --spider http://127.0.0.1:3000/ || exit 1

CMD ["node", "server.js"]
