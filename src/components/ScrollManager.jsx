import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
export default function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    const id = hash.replace('#', '')
    const timer = window.setTimeout(() => id ? document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' }) : window.scrollTo({ top: 0, behavior: 'instant' }), 30)
    return () => window.clearTimeout(timer)
  }, [pathname, hash])
  return null
}
