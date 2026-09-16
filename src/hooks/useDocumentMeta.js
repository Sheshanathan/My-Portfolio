import { useEffect } from 'react'

export default function useDocumentMeta(title, description, noIndex = false) {
  useEffect(() => {
    document.title = title

    const setMeta = (selector, attribute, value) => {
      document.querySelector(selector)?.setAttribute(attribute, value)
    }

    setMeta('meta[name="description"]', 'content', description)
    setMeta('meta[property="og:title"]', 'content', title)
    setMeta('meta[property="og:description"]', 'content', description)
    setMeta('meta[name="twitter:title"]', 'content', title)
    setMeta('meta[name="twitter:description"]', 'content', description)
    setMeta('meta[name="robots"]', 'content', noIndex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large')

    const canonicalUrl = new URL(window.location.pathname, window.location.origin).href
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl

    let openGraphUrl = document.querySelector('meta[property="og:url"]')
    if (!openGraphUrl) {
      openGraphUrl = document.createElement('meta')
      openGraphUrl.setAttribute('property', 'og:url')
      document.head.append(openGraphUrl)
    }
    openGraphUrl.content = canonicalUrl

    const previewUrl = new URL('/og-image.png', window.location.origin).href
    setMeta('meta[property="og:image"]', 'content', previewUrl)
    setMeta('meta[name="twitter:image"]', 'content', previewUrl)
  }, [title, description, noIndex])
}
