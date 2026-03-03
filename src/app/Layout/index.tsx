import { Outlet } from 'react-router'
import { ContextProvider, ToasterProvider } from '@/app/providers'
import { Header } from '@/widgets/Header'
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
