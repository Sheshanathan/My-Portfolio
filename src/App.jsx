import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import CommandPalette from './components/CommandPalette.jsx'
import Toast from './components/Toast.jsx'
import ScrollManager from './components/ScrollManager.jsx'
import { ToastProvider, useToast } from './context/ToastContext.jsx'

const HomePage = lazy(() => import('./pages/HomePage.jsx'))
const ProjectPage = lazy(() => import('./pages/ProjectPage.jsx'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.jsx'))

function AppContent() {
  const { toast } = useToast()
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <ScrollManager />
      <Navbar />
      <Suspense fallback={<div className="route-loader" role="status">Loading portfolio…</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:slug" element={<ProjectPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Footer />
      <CommandPalette />
      <Toast toast={toast} />
    </div>
  )
}

export default function App() {
  return <ToastProvider><AppContent /></ToastProvider>
}
