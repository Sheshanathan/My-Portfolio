import { ArrowLeft, ArrowRight, ExternalLink, Github } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { projects } from '../data/portfolioData.js'
import ProjectVisual from '../components/ProjectVisual.jsx'
import Reveal from '../components/Reveal.jsx'
import SocialAction from '../components/SocialAction.jsx'
import useDocumentMeta from '../hooks/useDocumentMeta.js'

export default function ProjectPage() {
  const { slug } = useParams()
  const projectIndex = projects.findIndex((item) => item.slug === slug)
  const project = projects[projectIndex]
  useDocumentMeta(project ? `${project.name} | Sheshanathan S` : 'Project not found | Sheshanathan S', project ? project.description : 'The requested project case study could not be found.', !project)
  if (!project) return <main id="main-content" className="not-found"><p>Page not found</p><h1>That case study doesn&apos;t exist.</h1><Link className="button primary" to="/#projects"><ArrowLeft size={17}/> Back to projects</Link></main>

  const next = projects[(projectIndex + 1) % projects.length]
  return (
    <main id="main-content" className="project-page">
      <header className="project-hero">
        <div className="project-crumb"><Link to="/#projects"><ArrowLeft size={15}/> All projects</Link><span>/</span><span>{project.order}</span></div>
        <p className="section-kicker"><span>{project.order}</span> {project.category} case study</p>
        <h1>{project.name}</h1>
        <p className="project-subtitle">{project.subtitle}</p>
        <p className="project-description">{project.description}</p>
        <div className="tag-list">{project.technology.map((tech) => <span key={tech}>{tech}</span>)}</div>
        <div className="detail-actions">
          <SocialAction className="button secondary" url={project.github} label={`${project.name} GitHub`}><Github size={17}/> GitHub</SocialAction>
          {project.demo && <SocialAction className="button secondary" url={project.demo} label={`${project.name} live demo`}><ExternalLink size={17}/> Live demo</SocialAction>}
        </div>
        {project.demoNote && <p className="demo-note">{project.demoNote}</p>}
      </header>
      <ProjectVisual project={project} large />
      <div className="case-study-grid">
        <Reveal className="case-main">
          <section><p className="mini-kicker">01 / Overview</p><h2>{project.headings?.overview || 'What I built.'}</h2><p>{project.overview}</p></section>
          <section><p className="mini-kicker">02 / Product need</p><h2>{project.headings?.problem || 'The challenge.'}</h2><p>{project.problem}</p></section>
          <section><p className="mini-kicker">03 / Implementation</p><h2>{project.headings?.solution || 'The approach.'}</h2><p>{project.solution}</p></section>
          <section><p className="mini-kicker">04 / {project.engineering ? 'Engineering focus' : 'What I learned'}</p><h2>{project.headings?.final || 'Key lessons.'}</h2><p>{project.engineering || project.learning}</p></section>
        </Reveal>
        <aside className="case-sidebar">
          <div><p className="mini-kicker">Core capabilities</p><ul>{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul></div>
          <div><p className="mini-kicker">Architecture</p><ol>{project.architecture.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, '0')}</span>{step}</li>)}</ol></div>
          <div><p className="mini-kicker">Implementation evidence</p><ul>{project.implementation.map((detail) => <li key={detail}>{detail}</li>)}</ul></div>
        </aside>
      </div>
      <Link className="next-project" to={`/projects/${next.slug}`}><span>Next case study <small>{next.name}</small></span><ArrowRight /></Link>
    </main>
  )
}
