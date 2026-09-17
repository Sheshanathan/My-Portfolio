import { useEffect, useRef } from 'react'

export default function ProjectVisual({ project, large = false }) {
  if (project.image) {
    const fitClass = !large && project.imageFit === 'cover' ? 'cover' : ''
    return <img className={`project-image ${large ? 'large' : fitClass}`} src={project.image} alt={`${project.name} dashboard`} loading="lazy" />
  }

  if (project.video && project.poster && !large) return <ProjectPoster project={project} />
  if (project.video) return <ProjectVideo project={project} large={large} />
  return null
}

function ProjectPoster({ project }) {
  return (
    <div className="project-visual video-visual video-poster-visual">
      <div className="visual-bar"><span><i /><i /><i /></span><small>{project.slug}.demo</small><b>{project.order}</b></div>
      <img className="project-video-poster" src={project.thumbnail || project.poster} alt={`${project.name} application homepage preview`} loading="lazy" />
      <span className="video-caption">Full walkthrough in case study</span>
    </div>
  )
}

function ProjectVideo({ project, large }) {
  const videoRef = useRef(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return undefined
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !reduceMotion) video.play().catch(() => {})
      else video.pause()
    }, { threshold: .35 })
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  return (
    <div className={`project-visual video-visual ${large ? 'large' : ''}`}>
      <div className="visual-bar"><span><i /><i /><i /></span><small>{project.slug}.demo</small><b>{project.order}</b></div>
      <video ref={videoRef} className="project-video" muted loop playsInline controls preload="metadata" poster={project.poster || undefined} aria-label={`${project.name} application demonstration`}>
        <source src={project.video} type="video/mp4" />
        Your browser does not support embedded MP4 video.
      </video>
      <span className="video-caption">Project walkthrough · full interface view</span>
    </div>
  )
}
