import { useToast } from '../context/ToastContext.jsx'
export default function SocialAction({ url, label, children, className = '' }) {
  const { notify } = useToast()
  if (url) return <a className={className} href={url} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
  return <button className={className} type="button" aria-label={`${label} link not configured`} onClick={() => notify(`${label} link is ready to be added in portfolioData.js.`, 'info')}>{children}</button>
}
