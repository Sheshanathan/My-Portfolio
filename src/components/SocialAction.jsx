export default function SocialAction({ url, label, children, className = '' }) {
  if (!url) return null
  return <a className={className} href={url} target="_blank" rel="noreferrer" aria-label={label}>{children}</a>
}
