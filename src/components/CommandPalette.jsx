import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Command, FileText, Github, Linkedin, Search } from 'lucide-react'
import { navigation, personalInfo } from '../data/portfolioData.js'
import { useToast } from '../context/ToastContext.jsx'

export default function CommandPalette() {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()
  const { notify } = useToast()
  useEffect(() => {
    const openMenu = () => setOpen(true)
    const keydown = (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') { event.preventDefault(); setOpen((value) => !value) }; if (event.key === 'Escape') setOpen(false) }
    window.addEventListener('open-command', openMenu); window.addEventListener('keydown', keydown)
    return () => { window.removeEventListener('open-command', openMenu); window.removeEventListener('keydown', keydown) }
  }, [])
  useEffect(() => { if (open) { setQuery(''); window.setTimeout(() => inputRef.current?.focus(), 40) } }, [open])
  const commands = [
    ...navigation.map((item) => ({ label: item.label, detail: `Go to ${item.label}`, icon: Command, action: () => navigate(`/#${item.id}`) })),
    { label: 'Resume', detail: 'Download resume', icon: FileText, action: () => personalInfo.resumePath ? window.open(personalInfo.resumePath, '_blank') : notify('Add your resume path in portfolioData.js.', 'info') },
    { label: 'GitHub', detail: 'Open profile', icon: Github, action: () => personalInfo.social.github ? window.open(personalInfo.social.github, '_blank', 'noopener') : notify('Add your GitHub URL in portfolioData.js.', 'info') },
    { label: 'LinkedIn', detail: 'Open profile', icon: Linkedin, action: () => personalInfo.social.linkedin ? window.open(personalInfo.social.linkedin, '_blank', 'noopener') : notify('Add your LinkedIn URL in portfolioData.js.', 'info') },
  ]
  const filtered = commands.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()))
  const run = (action) => { action(); setOpen(false) }
  if (!open) return null
  return <div className="command-overlay" role="presentation" onMouseDown={() => setOpen(false)}><div className="command-panel" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={(event) => event.stopPropagation()}><label className="command-search"><Search size={18} /><span className="sr-only">Search commands</span><input ref={inputRef} value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Where would you like to go?" /></label><div className="command-list">{filtered.map(({ label, detail, icon: Icon, action }) => <button key={label} type="button" onClick={() => run(action)}><Icon size={17} /><span>{label}<small>{detail}</small></span><kbd>↵</kbd></button>)}{!filtered.length && <p className="empty-command">No matching action.</p>}</div><div className="command-footer"><span>Navigate with keyboard</span><span><kbd>esc</kbd> close</span></div></div></div>
}
