import { Clapperboard, Trophy } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { education, personal } from '../data/portfolioData.js'

export default function Education() {
  return <section id="education" className="content-section section-anchor education-section"><SectionHeading index="05" eyebrow="Education" title="A foundation in computer science and AI." description="Formal learning paired with practical software development." /><div className="education-layout"><div className="timeline">{education.map((item, index) => <Reveal className="timeline-item" key={item.degree} delay={index * .08}><div className="timeline-marker"><span>{index + 1}</span></div><div className="timeline-content"><p>{item.period}</p><h3>{item.degree}</h3>{item.focus && <strong>Specialisation: {item.focus}</strong>}<span>{item.school} · {item.location}</span></div></Reveal>)}</div><Reveal className="personal-panel"><p className="mini-kicker">Beyond the code</p><div><Trophy size={22}/><span><small>Leadership</small><strong>{personal.leadership}</strong></span></div><div><Clapperboard size={22}/><span><small>Creative interest</small><strong>{personal.interests[0]}</strong></span></div><div><TennisBallIcon/><span><small>Sport</small><strong>{personal.interests[1]}</strong></span></div></Reveal></div></section>
}

function TennisBallIcon() {
  return <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M5.6 5.6C7.8 7.8 9 10 9 12s-1.2 4.2-3.4 6.4"/><path d="M18.4 5.6C16.2 7.8 15 10 15 12s1.2 4.2 3.4 6.4"/></svg>
}
