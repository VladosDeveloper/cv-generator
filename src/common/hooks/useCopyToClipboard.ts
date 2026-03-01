import { useRef } from 'react'
import { useToasterContext } from '@/common/providers/toasterProvider.tsx'

export const useCopyToClipboard = () => {
  const { setToasterVisibility } = useToasterContext()

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
      setToasterVisibility({ visibility: true })
    }
  }

  return {
    divRef,
    copyToClipboardHandler,
  }
}
