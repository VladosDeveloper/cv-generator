import Home from '@/assets/icons/home.svg?react'
import Logomark from '@/assets/icons/logomark.svg?react'
import Logotype from '@/assets/icons/logotype.svg?react'
import { ApplicationCounter } from '@/common/components/ApplicationCounter'
import { Button } from '@/common/components/Button'
import { Dots } from '@/common/components/Dots'
import styles from './index.module.scss'

export const Header = () => {
  return (
    <header className={styles.header}>
      <section className={styles.logoWrapper}>
        <Logomark fill="currentColor" color="#099250" width={44} height={44} />
        <Logotype />
      </section>

      <nav className={styles.headerNavigation}>
        <ApplicationCounter />
        <Dots dotsType="circle" fillCount={3} />

        <Button variant="iconic">
          <Home color="#344054" />
        </Button>
      </nav>
    </header>
  )
}
