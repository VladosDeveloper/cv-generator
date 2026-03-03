import { Link, useNavigate } from 'react-router'
import Home from '@/assets/icons/home.svg?react'
import Logomark from '@/assets/icons/logomark.svg?react'
import Logotype from '@/assets/icons/logotype.svg?react'
import Success from '@/assets/icons/success.svg?react'
import { ApplicationCounter } from '@/common/components/ApplicationCounter'
import { Button } from '@/common/components/Button'
import { Dots } from '@/common/components/Dots'
import { Toaster } from '@/common/components/Toaster'
import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { useWindowWidth } from '@/common/hooks/useWindowWidth.ts'
import { ApplicationsDefaultCount } from '@/constants/applicationsDefaultCount.ts'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
import { RoutePaths } from '@/constants/routes.ts'
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
