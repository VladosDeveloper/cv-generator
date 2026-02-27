import type { PropsWithChildren } from 'react'
import { Header } from '@/common/components/Header'
import styles from './index.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <section className={styles.container}>
      <Header />
      {children}
    </section>
  )
}
