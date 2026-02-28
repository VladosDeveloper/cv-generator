import { Outlet } from 'react-router'
import { Header } from '@/common/components/Header'
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <section className={styles.container}>
      <Header />
      <Outlet />
    </section>
  )
}
