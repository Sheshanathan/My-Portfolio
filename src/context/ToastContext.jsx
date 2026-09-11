import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react'

const ToastContext = createContext(null)
export function ToastProvider({ children }) {
  const [toast, setToast] = useState(null)
  const timer = useRef(null)
  const notify = useCallback((message, type = 'info') => {
    window.clearTimeout(timer.current); setToast({ message, type, id: Date.now() })
    timer.current = window.setTimeout(() => setToast(null), 4200)
  }, [])
  const value = useMemo(() => ({ toast, notify }), [toast, notify])
  return <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
}
export function useToast() { return useContext(ToastContext) }
