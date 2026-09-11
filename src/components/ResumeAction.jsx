import { Download } from 'lucide-react'
import { personalInfo } from '../data/portfolioData.js'
import { useToast } from '../context/ToastContext.jsx'
export default function ResumeAction({ compact = false, className = '' }) {
  const { notify } = useToast()
  if (personalInfo.resumePath) return <a className={className} href={personalInfo.resumePath} download><span>{compact ? 'Resume' : 'Download resume'}</span><Download size={16} /></a>
  return <button className={className} type="button" onClick={() => notify('Resume link is ready—add your PDF path in portfolioData.js.', 'info')}><span>{compact ? 'Resume' : 'Download resume'}</span><Download size={16} /></button>
}
