import { useState } from 'react'
import { Check, Clipboard, Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SocialAction from '../components/SocialAction.jsx'
import { personalInfo } from '../data/portfolioData.js'
import { useToast } from '../context/ToastContext.jsx'

const initialForm = { name: '', email: '', subject: '', message: '' }
const contactEndpoint = `https://formsubmit.co/ajax/${personalInfo.email}`

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [copied, setCopied] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const { notify } = useToast()
  const messageLength = form.message.trim().length
  const messageStarted = form.message.length > 0
  const messageTooShort = messageStarted && messageLength < 12
  const messageFeedback = errors.message || (messageTooShort
    ? `${messageLength}/2000 characters · add ${12 - messageLength} more`
    : `${messageLength}/2000 characters · 12 character minimum`)

  const update = (event) => {
    setForm((current) => ({ ...current, [event.target.name]: event.target.value }))
    setErrors((current) => ({ ...current, [event.target.name]: '' }))
  }

  const validate = () => {
    const next = {}
    if (form.name.trim().length < 2) next.name = 'Please enter your name.'
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = 'Please enter a valid email address.'
    if (form.subject.trim().length < 3) next.subject = 'Please add a short subject.'
    if (form.message.trim().length < 12) next.message = 'Please share a little more detail (12+ characters).'
    return next
  }

  const submit = async (event) => {
    event.preventDefault()
    const next = validate()
    setErrors(next)
    if (Object.keys(next).length) {
      notify('Please review the highlighted fields.', 'error')
      return
    }

    setSubmitting(true)
    try {
      const response = await fetch(contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          _replyto: form.email.trim(),
          subject: form.subject.trim(),
          message: form.message.trim(),
          _subject: `Portfolio enquiry from ${form.name.trim()}: ${form.subject.trim()}`,
          _template: 'box',
          _url: window.location.href,
        }),
      })
      const result = await response.json().catch(() => null)
      const providerMessage = typeof result?.message === 'string' ? result.message : ''
      const needsActivation = /activat|confirm|verify/i.test(providerMessage)
      if (needsActivation) {
        notify(`Check ${personalInfo.email} and click “Activate Form” once.`, 'success')
        return
      }
      if (!response.ok || result?.success === false || result?.success === 'false') {
        throw new Error('Submission was not accepted')
      }
      setForm(initialForm)
      setErrors({})
      notify('Message sent successfully. Thank you for reaching out.', 'success')
    } catch {
      notify(`Message could not be sent. You can email me at ${personalInfo.email}.`, 'error')
    } finally {
      setSubmitting(false)
    }
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email)
      setCopied(true)
      notify('Email copied to clipboard.', 'success')
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      notify(`Copy unavailable. Email: ${personalInfo.email}`, 'error')
    }
  }

  return (
    <section id="contact" className="contact-section section-anchor">
      <div className="content-section contact-inner">
        <Reveal className="contact-copy">
          <p className="section-kicker"><span>06</span> Contact</p>
          <h2>Let&apos;s build something <em>together.</em></h2>
          <p>I&apos;m interested in opportunities where I can contribute, learn and grow as a full-stack developer.</p>
          <div className="contact-details">
            <div><MapPin size={18}/><span><small>Location</small>{personalInfo.location}</span></div>
            <div><Mail size={18}/><span><small>Email</small><a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a></span><button type="button" onClick={copyEmail} aria-label="Copy email address">{copied ? <Check size={17}/> : <Clipboard size={17}/>}</button></div>
          </div>
          <div className="contact-socials">
            <SocialAction url={personalInfo.social.linkedin} label="LinkedIn"><Linkedin size={18}/> LinkedIn</SocialAction>
            <SocialAction url={personalInfo.social.github} label="GitHub"><Github size={18}/> GitHub</SocialAction>
          </div>
        </Reveal>

        <Reveal className="contact-form-wrap" delay={.1}>
          <form className="contact-form" onSubmit={submit} noValidate>
            <div className="form-heading"><span>Send a message</span></div>
            <div className="form-row">
              <label>Name<input name="name" value={form.name} onChange={update} autoComplete="name" maxLength="80" aria-invalid={Boolean(errors.name)} aria-describedby="name-error" placeholder="Your name" /></label>
              <label>Email<input name="email" type="email" value={form.email} onChange={update} autoComplete="email" maxLength="254" aria-invalid={Boolean(errors.email)} aria-describedby="email-error" placeholder="you@company.com" /></label>
            </div>
            <div className="form-errors"><span id="name-error">{errors.name}</span><span id="email-error">{errors.email}</span></div>
            <label>Subject<input name="subject" value={form.subject} onChange={update} maxLength="120" aria-invalid={Boolean(errors.subject)} aria-describedby="subject-error" placeholder="Opportunity, project or hello" /></label>
            <span className="field-error" id="subject-error">{errors.subject}</span>
            <label>Message<textarea name="message" value={form.message} onChange={update} rows="5" minLength="12" maxLength="2000" aria-invalid={Boolean(errors.message) || messageTooShort} aria-describedby="message-feedback" placeholder="Tell me a little about what you have in mind…" /></label>
            <span className={`message-feedback ${errors.message || messageTooShort ? 'is-error' : ''}`} id="message-feedback">{messageFeedback}</span>
            <button className="button primary submit-button" type="submit" disabled={submitting} aria-busy={submitting}>{submitting ? 'Sending…' : 'Send message'} <Send size={17}/></button>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
