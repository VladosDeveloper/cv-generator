import { type ReactNode, useEffect } from 'react'
import cn from 'classnames'
import { useToasterContext } from '@/common/providers/toasterProvider.tsx'
import styles from './index.module.scss'

export type ToasterProps = {
  children?: ReactNode
}
export const Toaster = ({ children }: ToasterProps) => {
  const { toasterVisibility, setToasterVisibility } = useToasterContext()

  useEffect(() => {
    const timer = setTimeout(() => {
      setToasterVisibility({ visibility: false })
    }, 3000)

    return () => clearTimeout(timer)
  }, [toasterVisibility.visibility])

  if (!toasterVisibility.visibility) {
    return null
  }

  return (
    <div
      className={cn({
        [styles.toastSlide]: true,
        [styles.green]: true,
        [styles.toastExit]: toasterVisibility.visibility,
      })}
    >
      {children}
    </div>
  )
}
