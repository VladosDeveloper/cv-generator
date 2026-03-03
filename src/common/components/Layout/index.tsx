import { Outlet } from 'react-router'
import { Header } from '@/common/components/Header'
import { ContextProvider } from '@/common/providers/applicationContext.tsx'
import { ToasterProvider } from '@/common/providers/toasterProvider.tsx'
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <ContextProvider>
      <ToasterProvider>
        <main className={styles.container} role="main">
          <Header />
          <Outlet />
        </main>
      </ToasterProvider>
    </ContextProvider>
  )
}
