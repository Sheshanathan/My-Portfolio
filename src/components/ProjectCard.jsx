import { ArrowUpRight, ExternalLink, Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import ProjectVisual from './ProjectVisual.jsx'
import SocialAction from './SocialAction.jsx'

export default function ProjectCard({ project }) {
  return <motion.article className="project-card" layout initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: .97 }} transition={{ duration: .35 }}><ProjectVisual project={project} /><div className="project-card-content"><div className="project-meta"><span>{project.order} / {project.category}</span>{project.featured && <em>{project.demo ? 'Live build' : 'Featured build'}</em>}</div><h3>{project.name}<small>{project.subtitle}</small></h3><p>{project.description}</p><div className="tag-list" aria-label="Technologies">{project.technology.map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions"><Link className="text-link" to={`/projects/${project.slug}`}>View case study <ArrowUpRight size={16} /></Link><div className="project-action-links"><SocialAction className="icon-link" url={project.github} label={`${project.name} GitHub repository`}><Github size={18} /></SocialAction><SocialAction className="icon-link" url={project.demo} label={`Open ${project.name} live application`}><ExternalLink size={18} /></SocialAction></div></div></div></motion.article>
}
