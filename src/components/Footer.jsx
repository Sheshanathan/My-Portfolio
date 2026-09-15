import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { Link } from 'react-router-dom'
import { personalInfo } from '../data/portfolioData.js'
import SocialAction from './SocialAction.jsx'

export default function Footer() {
  return <footer className="footer"><div><p>Built with React, Tailwind CSS & curiosity.</p></div><p>© 2026 {personalInfo.name}</p><div className="footer-links"><SocialAction url={personalInfo.social.github} label="GitHub"><Github size={18} /></SocialAction><SocialAction url={personalInfo.social.linkedin} label="LinkedIn"><Linkedin size={18} /></SocialAction><Link to="/#home" aria-label="Back to top"><ArrowUp size={18} /></Link></div></footer>
}
