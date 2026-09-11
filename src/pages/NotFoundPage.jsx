import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import useDocumentMeta from '../hooks/useDocumentMeta.js'
export default function NotFoundPage() {
  useDocumentMeta('Page not found | Sheshanathan S', 'The requested portfolio page could not be found.')
  return <main id="main-content" className="not-found"><p>404 / ROUTE_NOT_FOUND</p><h1>This page went off-stack.</h1><Link className="button primary" to="/"><ArrowLeft size={17}/> Return home</Link></main>
}
