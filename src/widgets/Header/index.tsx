import { Link, useNavigate } from 'react-router'
import Home from '@/shared/assets/icons/home.svg?react'
import Logomark from '@/shared/assets/icons/logomark.svg?react'
import Logotype from '@/shared/assets/icons/logotype.svg?react'
import Success from '@/shared/assets/icons/success.svg?react'
import { ApplicationsDefaultCount } from '@/shared/constants/applicationsDefaultCount.ts'
import { LocalStorageKeys } from '@/shared/constants/localStorageKeys.ts'
import { RoutePaths } from '@/shared/constants/routes.ts'
import { useLocalStorage } from '@/shared/lib/localStorage'
import { useWindowWidth } from '@/shared/lib/windowWidth'
import { ApplicationCounter } from '@/shared/ui/ApplicationCounter'
import { Button } from '@/shared/ui/Button'
import { Dots } from '@/shared/ui/Dots'
import { Toaster } from '@/shared/ui/Toaster'
import styles from './index.module.scss'

export const Header = () => {
  const { restoreFromLocalStorage } = useLocalStorage()
  const { width } = useWindowWidth()

  const applicationsListLength = restoreFromLocalStorage(LocalStorageKeys.ApplicationKey).length

  const navigate = useNavigate()

  const navigateToHome = () => void navigate(RoutePaths.Home)

  return (
    <header className={styles.header} role="banner">
      <section className={styles.logoWrapper} onClick={navigateToHome}>
        <Logomark fill="currentColor" color="#099250" width={44} height={44} />
        <Logotype />
      </section>

      <nav className={styles.headerNavigation} role="navigation">
        {width > 612 && <ApplicationCounter />}
        {applicationsListLength > ApplicationsDefaultCount.ApplicationsMaxCount ? (
          <span className={styles.iconWrapper}>
            <Success />
          </span>
        ) : (
          <Dots dotsType="circle" fillCount={applicationsListLength} />
        )}

        <Button as={Link} to={RoutePaths.Home} role="link" variant="iconic" aria-label="To home page button">
          <Home color="#344054" />
        </Button>
      </nav>

      <Toaster>Copied!</Toaster>
    </header>
  )
}
