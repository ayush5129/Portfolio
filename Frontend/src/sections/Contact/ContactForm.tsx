import { useState, type FormEvent } from 'react'

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL || 'http://localhost:5032').replace(/\/$/, '')

export function ContactForm() {
  const [state, setState] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [error, setError] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const fields = new FormData(form)
    setState('sending')
    setError('')

    try {
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: fields.get('name'),
          email: fields.get('email'),
          message: fields.get('message'),
          website: fields.get('website'),
        }),
      })
      if (!response.ok) {
        const result = await response.json().catch(() => null)
        throw new Error(response.status === 429
          ? 'Too many messages. Please wait a few minutes or email me directly.'
          : result?.error || 'The message could not be sent. Please email me directly.')
      }
      form.reset()
      setState('sent')
    } catch (cause) {
      setError(cause instanceof Error && !(cause instanceof TypeError)
        ? cause.message
        : 'The message could not be sent. Please email me directly.')
      setState('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="contact-form-heading">
        <h3>Send a message</h3>
        <p>Tell me what you’re working on.</p>
      </div>
      <div className="contact-fields">
        <label>Full name<input name="name" autoComplete="name" minLength={2} maxLength={100} required /></label>
        <label>Email address<input name="email" type="email" autoComplete="email" maxLength={254} required /></label>
      </div>
      <label>Message<textarea name="message" rows={6} minLength={10} maxLength={2000} required placeholder="Tell me a little about what you're building..." /></label>
      <div className="contact-honeypot" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
      <div className="contact-submit">
        <button className="button button-primary" type="submit" disabled={state === 'sending'}>{state === 'sending' ? 'Sending…' : 'Send message ↗'}</button>
        <span>If the form is unavailable, <a href="mailto:ayushsinghmy7080@gmail.com">email me directly</a>.</span>
      </div>
      <p className={`contact-feedback ${state === 'error' ? 'is-error' : ''}`} role="status" aria-live="polite">
        {state === 'sent' ? 'Thanks — your message was sent successfully.' : state === 'error' ? error : ''}
      </p>
    </form>
  )
}
