export const CONTACT_LIMITS = {
  name: 80,
  email: 254,
  subject: 120,
  message: 2000,
}

export function validateContact(form) {
  const errors = {}
  if (form.name.trim().length < 2) errors.name = 'Please enter your name.'
  if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Please enter a valid email address.'
  if (form.subject.trim().length < 3) errors.subject = 'Please add a short subject.'
  if (form.message.trim().length < 12) errors.message = 'Please share a little more detail (12+ characters).'
  return errors
}
