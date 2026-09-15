import { useEffect } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

const scrollPositions = new Map()

export default function ScrollManager() {
  const location = useLocation()
  const navigationType = useNavigationType()

  useEffect(() => {
    const previousSetting = window.history.scrollRestoration
    window.history.scrollRestoration = 'manual'
    return () => { window.history.scrollRestoration = previousSetting }
  }, [])

  useEffect(() => {
    const savePosition = () => scrollPositions.set(location.key, window.scrollY)
    window.addEventListener('scroll', savePosition, { passive: true })
    return () => window.removeEventListener('scroll', savePosition)
  }, [location.key])

  useEffect(() => {
    const { hash, key } = location
    const timer = window.setTimeout(() => {
      if (hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({
          behavior: navigationType === 'POP' ? 'auto' : 'smooth',
          block: 'start',
        })
        return
      }

      const top = navigationType === 'POP' ? (scrollPositions.get(key) ?? 0) : 0
      window.scrollTo({ top, behavior: 'auto' })
    }, 60)

    return () => window.clearTimeout(timer)
  }, [location, navigationType])

  return null
}
