import { Section } from '../components/ui/Section'
import { Heading } from '../components/ui/Heading'
import { Text } from '../components/ui/Text'
import { Button } from '../components/ui/Button'
import PageLayout from "../components/layout/PageLayout"
import { useState } from 'react'
import type { FormEvent } from 'react'

type TouchedFields = { name: boolean; email: boolean; message: boolean }

const emailIsValid = (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)

const validateField = (field: 'name' | 'email' | 'message', value: string) => {
  switch (field) {
    case 'name':
      return value.trim().length < 2 ? 'Please enter your full name.' : ''
    case 'email':
      if (value.trim().length === 0) return 'Email is required.'
      return !emailIsValid(value) ? 'Enter a valid email address.' : ''
    case 'message':
      return value.trim().length < 5 ? 'Message should be at least 5 characters.' : ''
  }
}

const inputClassName = "block w-full rounded-md border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-3 py-2 text-lg shadow-sm placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-zinc-400 dark:focus:ring-zinc-600"

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [touched, setTouched] = useState<TouchedFields>({ name: false, email: false, message: false })

  const errors = {
    name: validateField('name', name),
    email: validateField('email', email),
    message: validateField('message', message)
  }

  const isValid = !errors.name && !errors.email && !errors.message

  const handleReset = () => {
    setSubmitted(false)
    setName('')
    setEmail('')
    setMessage('')
    setTouched({ name: false, email: false, message: false })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTouched({ name: true, email: true, message: true })
    if (!isValid) return
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 900)
  }

  if (submitted) {
    return (
      <PageLayout>
        <Section className="flex flex-col md:flex-row items-start md:items-center gap-10">
          <div className="space-y-4 md:flex-1 text-left">
            <Heading level={1}>Contact</Heading>
            <Text>Get in touch.</Text>
            <div className="md:flex-1 w-full">
              <div role="status" aria-live="polite" className="rounded-lg border border-zinc-200 dark:border-zinc-800 p-6 bg-white/50 dark:bg-zinc-900/50">
                <Text>Thanks for reaching out! 👋</Text>
              </div>
            </div>
          </div>
        </Section>
      </PageLayout>
    )
  }

  return (
    <PageLayout>
      <Section className="flex flex-col md:flex-row items-start md:items-center gap-10">
        <div className="space-y-4 md:flex-1 text-left">
          <Heading level={1}>Contact</Heading>
          <Text>Get in touch.</Text>
          <div className="md:flex-1 w-full">
            <form onSubmit={handleSubmit} noValidate className="space-y-4" aria-describedby="form-helper">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField
                  id="name"
                  label="Full name"
                  type="text"
                  value={name}
                  onChange={setName}
                  onBlur={() => setTouched(t => ({ ...t, name: true }))}
                  error={errors.name}
                  touched={touched.name}
                  placeholder="John Cena"
                  autoComplete="name"
                />
                <FormField
                  id="email"
                  label="Email"
                  type="email"
                  value={email}
                  onChange={setEmail}
                  onBlur={() => setTouched(t => ({ ...t, email: true }))}
                  error={errors.email}
                  touched={touched.email}
                  placeholder="john@example.com"
                  autoComplete="email"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onBlur={() => setTouched(t => ({ ...t, message: true }))}
                  required
                  aria-invalid={!!errors.message && touched.message}
                  aria-describedby={touched.message && errors.message ? 'message-error' : 'form-helper'}
                  className={inputClassName}
                  placeholder="How can I help?"
                />
                {touched.message && errors.message && (
                  <p id="message-error" className="text-sm text-red-600 dark:text-red-400">{errors.message}</p>
                )}
                <p id="form-helper" className="sr-only">All fields are required.</p>
              </div>

              <div className="flex items-center gap-3">
                <Button type="submit" disabled={!isValid || submitting} aria-busy={submitting} className="disabled:opacity-60">
                  {submitting ? 'Sending…' : 'Send message'}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Section>
    </PageLayout>
  )
}

type FormFieldProps = {
  id: string
  label: string
  type: string
  value: string
  onChange: (value: string) => void
  onBlur: () => void
  error: string
  touched: boolean
  placeholder: string
  autoComplete?: string
}

function FormField({ id, label, type, value, onChange, onBlur, error, touched, placeholder, autoComplete }: FormFieldProps) {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={id} className="text-large font-medium">{label}</label>
      <input 
        id={id}
        name={id}
        type={type}
        autoComplete={autoComplete}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        required
        aria-invalid={!!error && touched}
        aria-describedby={touched && error ? `${id}-error` : undefined}
        className={inputClassName}
        placeholder={placeholder}
      />
      {touched && error && (
        <p id={`${id}-error`} className="text-sm text-red-600 dark:text-red-400">{error}</p>
      )}
    </div>
  )
}


