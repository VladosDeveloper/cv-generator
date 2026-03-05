import { Outlet } from 'react-router'
import { ApplicationsProvider, ToasterProvider } from '@/app/providers'
import { Header } from '@/widgets/header'
import styles from './index.module.scss'

export const Layout = () => {
  return (
    <ApplicationsProvider>
      <ToasterProvider>
        <main className={styles.container} role="main">
          <Header />
          <Outlet />
        </main>
      </ToasterProvider>
    </ApplicationsProvider>
  )
}
