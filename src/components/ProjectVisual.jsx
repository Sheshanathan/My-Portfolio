import { BarChart3, Check, Film, Image, UserRound } from 'lucide-react'

export default function ProjectVisual({ project, large = false }) {
  if (project.image) return <img className="project-image" src={project.image} alt={`${project.name} project interface`} loading="lazy" />
  return (
    <div className={`project-visual ${project.visual} ${large ? 'large' : ''}`} role="img" aria-label={`${project.name} interface preview placeholder`}>
      <div className="visual-bar"><span><i /><i /><i /></span><small>{project.slug}.project</small><b>{project.order}</b></div>
      {project.visual === 'media' && <div className="media-ui"><div className="media-sidebar"><span className="active" /><span /><span /><span /></div><div className="media-main"><div className="media-title"/><div className="media-grid"><i><Image /></i><i><Film /></i><i><Image /></i><i><Film /></i></div></div></div>}
      {project.visual === 'people' && <div className="people-ui"><div className="ui-metric"><small>TEAM</small><strong>EMP</strong></div><div className="people-lines">{[1,2,3,4].map((n) => <div key={n}><UserRound /><span><i /><i /></span><Check /></div>)}</div></div>}
      {(project.visual === 'chart' || project.visual === 'sales') && <div className="chart-ui"><div className="chart-metric"><BarChart3/><span><small>DATASET</small><strong>{project.metric}</strong></span></div><div className="bars">{[58,82,43,71,92,64,78,51].map((height,index) => <i key={index} style={{height:`${height}%`}} />)}</div><div className="chart-foot"><span>ANALYSIS</span><span>POWER BI</span></div></div>}
      <span className="visual-placeholder">Preview ready for your screenshot</span>
    </div>
  )
}
