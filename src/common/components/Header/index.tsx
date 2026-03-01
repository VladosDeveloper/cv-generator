import { Link, useNavigate } from 'react-router'
import Home from '@/assets/icons/home.svg?react'
import Logomark from '@/assets/icons/logomark.svg?react'
import Logotype from '@/assets/icons/logotype.svg?react'
import Success from '@/assets/icons/success.svg?react'
import { ApplicationCounter } from '@/common/components/ApplicationCounter'
import { Button } from '@/common/components/Button'
import { Dots } from '@/common/components/Dots'
import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
import { RoutePaths } from '@/constants/routes.ts'
import styles from './index.module.scss'

export const Header = () => {
  const { restoreFromLocalStorage } = useLocalStorage()

  const applicationsListLength = restoreFromLocalStorage(LocalStorageKeys.APPLICATION_KEY).length

  const navigate = useNavigate()

  const navigateToHome = () => void navigate(RoutePaths.HOME)

  return (
    <header className={styles.header}>
      <section className={styles.logoWrapper} onClick={navigateToHome}>
        <Logomark fill="currentColor" color="#099250" width={44} height={44} />
        <Logotype />
      </section>

      <nav className={styles.headerNavigation}>
        <ApplicationCounter />
        {applicationsListLength > 4 ? (
          <span className={styles.iconWrapper}>
            <Success />
          </span>
        ) : (
          <Dots dotsType="circle" fillCount={applicationsListLength} />
        )}

        <Button as={Link} to={RoutePaths.HOME} variant="iconic">
          <Home color="#344054" />
        </Button>
      </nav>
    </header>
  )
}
