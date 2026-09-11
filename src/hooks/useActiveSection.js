import { useEffect, useState } from 'react'
import { navigation } from '../data/portfolioData.js'

export default function useActiveSection(enabled = true) {
  const [active, setActive] = useState('home')
  useEffect(() => {
    if (!enabled) return undefined
    const sections = navigation.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)
      if (visible[0]) setActive(visible[0].target.id)
    }, { rootMargin: '-25% 0px -60%', threshold: [0.05, 0.25, 0.5] })
    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [enabled])
  return active
}
