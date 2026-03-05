import { Link, useNavigate } from 'react-router'
import { useApplicationsContext } from '@/app/providers'
import { ApplicationCounter } from '@/feature/entities/application-counter'
import Home from '@/shared/assets/icons/home.svg?react'
import Logomark from '@/shared/assets/icons/logomark.svg?react'
import Logotype from '@/shared/assets/icons/logotype.svg?react'
import Success from '@/shared/assets/icons/success.svg?react'
import { ApplicationsMaxCount, MobileWidth } from '@/shared/constants/consts'
import { RoutePaths } from '@/shared/constants/routes'
import { useWindowWidth } from '@/shared/lib/windowWidth'
import { Button } from '@/shared/ui/Button'
import { Dots } from '@/shared/ui/Dots'
import { Toaster } from '@/shared/ui/Toaster'
import styles from './index.module.scss'

export const Header = () => {
  const { applications } = useApplicationsContext()
  const { width } = useWindowWidth()

  const applicationsListLength = applications?.length

  const navigate = useNavigate()

  const navigateToHome = () => navigate(RoutePaths.Home)

  return (
    <header className={styles.header} role="banner">
      <section className={styles.logoWrapper} onClick={navigateToHome}>
        <Logomark fill="currentColor" color="#099250" width={44} height={44} />
        <Logotype />
      </section>

      <nav className={styles.headerNavigation} role="navigation">
        {width > MobileWidth && <ApplicationCounter />}
        {applicationsListLength && applicationsListLength > ApplicationsMaxCount ? (
          <span className={styles.iconWrapper}>
            <Success />
          </span>
        ) : (
          <Dots dotsType="circle" fillCount={applicationsListLength} />
        )}

        <Button as={Link} to={RoutePaths.Home} role="link" variant="iconic" aria-label="To home page button">
          <Home />
        </Button>
      </nav>

      <Toaster>Copied!</Toaster>
    </header>
  )
}
