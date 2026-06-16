'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Lock, Loader2 } from 'lucide-react'
import { PHONE_DISPLAY, PHONE_HREF } from '@/lib/site-data'

const fieldClass =
  'w-full rounded-lg border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20'
const labelClass = 'mb-1.5 block text-sm font-medium text-foreground'

export function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>(
    'idle',
  )
  const [error, setError] = useState('')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')
    setError('')

    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form).entries())

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, formType: 'contact' }),
      })
      const json = await res.json().catch(() => ({}))
      if (res.ok && json.ok) {
        setStatus('success')
      } else {
        setStatus('error')
        setError(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setStatus('error')
      setError('Network error. Please try again or call our helpline.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-border bg-card p-8 text-center">
        <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-7" />
        </span>
        <h3 className="mt-5 font-heading text-2xl font-semibold text-foreground">
          Message received
        </h3>
        <p className="mt-3 leading-relaxed text-muted-foreground">
          Thank you for reaching out. A member of our team will respond as soon
          as possible. For immediate help, please call{' '}
          <a href={PHONE_HREF} className="font-semibold text-primary">
            {PHONE_DISPLAY}
          </a>
          .
        </p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-sm md:p-8"
    >
      {/* Honeypot: hidden from users; bots that fill it are silently rejected. */}
      <div className="absolute left-[-9999px]" aria-hidden="true">
        <label htmlFor="company">Company (leave blank)</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name
          </label>
          <input id="name" name="name" required className={fieldClass} />
        </div>
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className={labelClass}>
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={fieldClass}
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="topic" className={labelClass}>
            How can we help?
          </label>
          <select id="topic" name="topic" className={fieldClass}>
            <option>I&apos;m seeking treatment for myself</option>
            <option>I&apos;m seeking help for a loved one</option>
            <option>Insurance &amp; payment questions</option>
            <option>Professional / referral inquiry</option>
            <option>General question</option>
          </select>
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className={fieldClass}
          />
        </div>
      </div>

      {status === 'error' && (
        <p className="mt-4 rounded-lg border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === 'sending'}
        className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-70"
      >
        {status === 'sending' && <Loader2 className="size-4 animate-spin" />}
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>

      <p className="mt-4 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
        <Lock className="size-3.5" />
        Submissions are confidential and reviewed by our care team.
      </p>
    </form>
  )
}
