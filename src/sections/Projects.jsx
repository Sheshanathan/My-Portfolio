import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import ProjectCard from '../components/ProjectCard.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { projects } from '../data/portfolioData.js'
const filters = ['All', 'Full Stack', 'Data Analytics']
export default function Projects() {
  const [filter, setFilter] = useState('All')
  const visible = filter === 'All' ? projects : projects.filter((project) => project.category === filter)
  return <section id="projects" className="content-section section-anchor projects-section"><SectionHeading index="04" eyebrow="Selected work" title="Projects built across the stack." description="Full-stack products lead the story, supported by focused analytics work." /><div className="project-filter" role="group" aria-label="Filter projects">{filters.map((item) => <button key={item} className={filter === item ? 'active' : ''} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'All' ? projects.length : projects.filter((project) => project.category === item).length}</span></button>)}</div><motion.div className="projects-grid" layout><AnimatePresence mode="popLayout">{visible.map((project) => <ProjectCard key={project.slug} project={project} />)}</AnimatePresence></motion.div></section>
}
