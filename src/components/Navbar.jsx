import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Command, Menu, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { navigation, personalInfo } from '../data/portfolioData.js'
import useActiveSection from '../hooks/useActiveSection.js'
import ResumeAction from './ResumeAction.jsx'

export default function Navbar() {
  const location = useLocation()
  const onHome = location.pathname === '/'
  const active = useActiveSection(onHome)
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  useEffect(() => { const update = () => setScrolled(window.scrollY > 24); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update) }, [])
  useEffect(() => setOpen(false), [location])
  useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; return () => { document.body.style.overflow = '' } }, [open])
  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <Link className="brand" to="/#home" aria-label={`${personalInfo.name}, home`}><span>{personalInfo.brand}</span><i>.</i></Link>
      <nav className="desktop-nav" aria-label="Primary navigation">{navigation.map((item) => <Link key={item.id} className={onHome && active === item.id ? 'active' : ''} to={`/#${item.id}`}>{item.label}</Link>)}</nav>
      <div className="nav-tools"><button className="command-hint" type="button" onClick={() => window.dispatchEvent(new Event('open-command'))} aria-label="Open command menu"><Command size={15} /><span>⌘ K</span></button><ResumeAction compact className="resume-button" /><button className="menu-toggle" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</button></div>
      <AnimatePresence>{open && <motion.div className="mobile-menu" initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}><p>Navigate / Portfolio</p><nav aria-label="Mobile navigation">{navigation.map((item, index) => <Link key={item.id} to={`/#${item.id}`}><span>0{index + 1}</span>{item.label}</Link>)}</nav><ResumeAction className="button primary mobile-resume" /></motion.div>}</AnimatePresence>
    </header>
  )
}
