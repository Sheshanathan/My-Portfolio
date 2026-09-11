import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Info, XCircle } from 'lucide-react'
export default function Toast({ toast }) {
  const Icon = toast?.type === 'success' ? CheckCircle2 : toast?.type === 'error' ? XCircle : Info
  return <AnimatePresence>{toast && <motion.div className={`toast ${toast.type}`} role="status" aria-live="polite" initial={{ opacity: 0, y: 20, x: '-50%' }} animate={{ opacity: 1, y: 0, x: '-50%' }} exit={{ opacity: 0, y: 12, x: '-50%' }}><Icon size={19} /><span>{toast.message}</span></motion.div>}</AnimatePresence>
}
