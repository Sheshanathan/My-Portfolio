import { Code2 } from 'lucide-react'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { skills } from '../data/portfolioData.js'
export default function Skills() {
  return <section id="skills" className="content-section section-anchor skills-section"><SectionHeading index="02" eyebrow="Technical toolkit" title="The tools behind the work." description="A practical stack for building, testing and understanding modern applications." /><div className="skills-grid">{skills.map((group, index) => <Reveal key={group.category} className="skill-group" delay={(index % 3) * .06}><div className="skill-title"><span>{group.index}</span><h3>{group.category}</h3><Code2 size={18} /></div><div className="skill-tags">{group.items.map((skill) => <span key={skill} tabIndex="0" data-tooltip={`${skill} · ${group.category}`} aria-label={`${skill}, ${group.category}`}>{skill}</span>)}</div></Reveal>)}</div></section>
}
