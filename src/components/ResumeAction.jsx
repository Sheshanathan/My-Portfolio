import { Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'

export default function ResumeAction({ compact = false, className = '' }) {
  if (!personalInfo.resumePath) return null
  return <a className={className} href={personalInfo.resumePath} download><span>{compact ? 'Resume' : 'Download resume'}</span><Download size={16} /></a>
}
