import { useRef } from 'react'

export const useCopyToClipboard = () => {
  const divRef = useRef<HTMLDivElement>(null)

  const getText = () => {
    if (divRef.current) {
      return divRef.current.innerText
    }
    return null
  }

  const copyToClipboardHandler = async () => {
    const text = getText()
    if (text) {
      await navigator.clipboard.writeText(text)
    }
  }

  return {
    divRef,
    copyToClipboardHandler,
  }
}
