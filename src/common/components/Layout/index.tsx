import { Outlet } from 'react-router'
import { Header } from '@/common/components/Header'
import { ContextProvider } from '@/common/lib/ctx.tsx'
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <ContextProvider>
      <section className={styles.container}>
        <Header />
        <Outlet />
      </section>
    </ContextProvider>
  )
}
