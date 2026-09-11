import { Clapperboard, GraduationCap, Trophy } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { education, personal } from '../data/portfolioData.js'

export default function Education() {
  return <section id="education" className="content-section section-anchor education-section"><SectionHeading index="05" eyebrow="Education" title="A foundation in computer science and AI." description="Formal learning paired with practical software development." /><div className="education-layout"><div className="timeline">{education.map((item, index) => <Reveal className="timeline-item" key={item.degree} delay={index * .08}><div className="timeline-marker"><span>{index + 1}</span></div><div className="timeline-content"><p>{item.period}</p><h3>{item.degree}</h3>{item.focus && <strong>Specialisation: {item.focus}</strong>}<span>{item.school} · {item.location}</span></div></Reveal>)}</div><Reveal className="personal-panel"><p className="mini-kicker">Beyond the code</p><div><Trophy size={22}/><span><small>Leadership</small><strong>{personal.leadership}</strong></span></div><div><Clapperboard size={22}/><span><small>Creative interest</small><strong>{personal.interests[0]}</strong></span></div><div><GraduationCap size={22}/><span><small>Off-screen</small><strong>{personal.interests[1]}</strong></span></div></Reveal></div></section>
}
