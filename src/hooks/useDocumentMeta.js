import { useEffect } from 'react'

export default function useDocumentMeta(title, description) {
  useEffect(() => {
    document.title = title
    const selectors = [
      ['meta[name="description"]', 'content', description],
      ['meta[property="og:title"]', 'content', title],
      ['meta[property="og:description"]', 'content', description],
    ]
    selectors.forEach(([selector, attribute, value]) => document.querySelector(selector)?.setAttribute(attribute, value))
  }, [title, description])
}
