import type { PropsWithChildren } from 'react'
import styles from './index.module.scss'

export const Layout = ({ children }: PropsWithChildren) => {
  return <section className={styles.container}>{children}</section>
}
