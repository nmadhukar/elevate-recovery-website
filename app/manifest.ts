import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Elevate Recovery — Addiction Treatment in Toledo, Ohio',
    short_name: 'Elevate Recovery',
    description:
      'Joint Commission Certified addiction treatment in Toledo, Ohio. Compassionate, evidence-based care.',
    start_url: '/',
    display: 'standalone',
    background_color: '#faf8fd',
    theme_color: '#5f23b8',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
      { src: '/apple-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  }
}
