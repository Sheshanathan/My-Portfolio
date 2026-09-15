import { useEffect, useState } from 'react'

export default function useTypewriter(
  items,
  {
    reducedMotion = false,
    typeDelay = 68,
    deleteDelay = 36,
    holdDelay = 1700,
    nextDelay = 260,
  } = {},
) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [phase, setPhase] = useState('typing')
  const currentItem = items[index] ?? ''

  useEffect(() => {
    if (reducedMotion || !currentItem) return undefined

    let delay = typeDelay
    let nextStep

    if (phase === 'typing' && text.length < currentItem.length) {
      nextStep = () => setText(currentItem.slice(0, text.length + 1))
    } else if (phase === 'typing') {
      delay = holdDelay
      nextStep = () => setPhase('deleting')
    } else if (text.length > 0) {
      delay = deleteDelay
      nextStep = () => setText(currentItem.slice(0, text.length - 1))
    } else {
      delay = nextDelay
      nextStep = () => {
        setIndex((value) => (value + 1) % items.length)
        setPhase('typing')
      }
    }

    const timer = window.setTimeout(nextStep, delay)
    return () => window.clearTimeout(timer)
  }, [currentItem, deleteDelay, holdDelay, items.length, nextDelay, phase, reducedMotion, text, typeDelay])

  return {
    activeItem: reducedMotion ? (items[0] ?? '') : currentItem,
    text: reducedMotion ? (items[0] ?? '') : text,
  }
}
