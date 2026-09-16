import { describe, expect, it } from 'vitest'
import { validateContact } from './contactValidation.js'

const validForm = {
  name: 'Recruiter Name',
  email: 'recruiter@example.com',
  subject: 'Full-stack opportunity',
  message: 'I would like to discuss a full-stack developer opportunity.',
}

describe('validateContact', () => {
  it('accepts a complete professional enquiry', () => {
    expect(validateContact(validForm)).toEqual({})
  })

  it('rejects invalid identity fields', () => {
    expect(validateContact({ ...validForm, name: ' ', email: 'invalid' })).toMatchObject({
      name: expect.any(String),
      email: expect.any(String),
    })
  })

  it('requires a useful subject', () => {
    expect(validateContact({ ...validForm, subject: 'Hi' })).toHaveProperty('subject')
  })

  it('requires a meaningful message', () => {
    expect(validateContact({ ...validForm, message: 'Too short' })).toHaveProperty('message')
  })
})
