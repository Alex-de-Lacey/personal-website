import contactImage from '../assets/contact.png'
import { Section } from '../components/ui/Section'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { Avatar } from '../components/ui/Avatar'
import { Button } from '../components/ui/Button'
import PageLayout from "../components/layout/PageLayout"
import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState<{ name: boolean; email: boolean; message: boolean }>({ name: false, email: false, message: false })

  const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
  const nameError = name.trim().length < 2 ? 'Please enter your full name.' : ''
  const emailError = email.trim().length === 0 ? 'Email is required.' : (!emailIsValid(email) ? 'Enter a valid email address.' : '')
  const messageError = message.trim().length < 10 ? 'Message should be at least 10 characters.' : ''
  const isValid = !nameError && !emailError && !messageError

  let nameDescribedBy: string | undefined
  if (touched.name && !!nameError) {
    nameDescribedBy = 'name-error'
  }

  let emailDescribedBy: string | undefined
  if (touched.email && !!emailError) {
    emailDescribedBy = 'email-error'
  }

  let messageDescribedBy: string | undefined = 'form-helper'
  if (touched.message && !!messageError) {
    messageDescribedBy = 'message-error'
  }

  let submitLabel = 'Send message'
  if (submitting) {
    submitLabel = 'Sending…'
  }

  let submittedContent: ReactNode
  if (submitted) {
    submittedContent = (
      <div role="status" aria-live="polite" className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/50">
        <Heading level={2} className="mb-2">Thanks for reaching out!</Heading>
        <Text>I’ve received your message and will be in touch shortly.</Text>
        <Button className="mt-6" onClick={() => { setSubmitted(false); setName(''); setEmail(''); setMessage(''); setTouched({ name: false, email: false, message: false }) }}>Send another message</Button>
      </div>
    )
  } else {
    submittedContent = (
      <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby="form-helper">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-sm font-medium">Full name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              required
              aria-invalid={!!nameError && touched.name}
              aria-describedby={nameDescribedBy}
              className="block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              placeholder="Jane Doe"
            />
            {touched.name && nameError && (
              <p id="name-error" className="text-sm text-red-600 dark:text-red-400">{nameError}</p>
            )}
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              required
              aria-invalid={!!emailError && touched.email}
              aria-describedby={emailDescribedBy}
              className="block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
              placeholder="jane@example.com"
            />
            {touched.email && emailError && (
              <p id="email-error" className="text-sm text-red-600 dark:text-red-400">{emailError}</p>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="message" className="text-sm font-medium">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, message: true }))}
            required
            aria-invalid={!!messageError && touched.message}
            aria-describedby={messageDescribedBy}
            className="block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-sm shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"
            placeholder="How can I help?"
          />
          {touched.message && messageError && (
            <p id="message-error" className="text-sm text-red-600 dark:text-red-400">{messageError}</p>
          )}
          <p id="form-helper" className="sr-only">All fields are required.</p>
        </div>

        <div className="flex items-center gap-3">
          <Button type="submit" disabled={!isValid || submitting} aria-busy={submitting} className="disabled:opacity-60">
            {submitLabel}
          </Button>
          <Avatar src={contactImage} alt="Contact" size="sm" />
        </div>
      </form>
    )
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!isValid) return
    setSubmitting(true)
    // Simulate async submit
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  return (
    <PageLayout>
      <Section className ="flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="space-y-4 md:flex-1 text-left">
          <Heading level={1}>Contact</Heading>
          <Text>Get in touch.</Text>
          <div className="md:flex-1 w-full max-w-xl">
          {submittedContent}
          </div>
        </div>  
      </Section>
    </PageLayout>
  )
}


