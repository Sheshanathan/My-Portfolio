import { useEffect, useState } from 'react'
import { navigation } from '../data/portfolioData.js'

export default function useActiveSection(enabled = true) {
  const [active, setActive] = useState('home')

  useEffect(() => {
    if (!enabled) return undefined

    let frame = 0
    let sectionObserver
    const update = () => {
      frame = 0
      const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
      if (!sections.length) return

      if (sections.length === navigation.length) sectionObserver?.disconnect()

      const pageBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 4
      const marker = window.scrollY + Math.min(window.innerHeight * 0.34, 320)
      let current = sections[0].id

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        if (sectionTop <= marker) current = section.id
        else break
      }

      if (pageBottom) current = sections.at(-1).id
      setActive((previous) => previous === current ? previous : current)
    }

    const scheduleUpdate = () => {
      if (!frame) frame = window.requestAnimationFrame(update)
    }

    sectionObserver = new MutationObserver(scheduleUpdate)
    sectionObserver.observe(document.getElementById('root') ?? document.body, {
      childList: true,
      subtree: true,
    })

    update()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)
    window.addEventListener('hashchange', scheduleUpdate)
    return () => {
      sectionObserver.disconnect()
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      window.removeEventListener('hashchange', scheduleUpdate)
      if (frame) window.cancelAnimationFrame(frame)
    }
  }, [enabled])

  return active
}
