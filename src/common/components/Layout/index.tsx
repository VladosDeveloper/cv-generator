import { Outlet } from 'react-router'
import { Header } from '@/common/components/Header'
import { Toaster } from '@/common/components/Toaster'
import { ContextProvider } from '@/common/providers/applicationContext.tsx'
import { ToasterProvider } from '@/common/providers/toasterProvider.tsx'
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <ContextProvider>
      <ToasterProvider>
        <section className={styles.container}>
          <Header />
          <Outlet />
          <Toaster>Copied!</Toaster>
        </section>
      </ToasterProvider>
    </ContextProvider>
  )
}
