import { Link } from 'react-router'
import PlusIcon from '@/shared/assets/icons/icon-plus.svg?react'
import { RoutePaths } from '@/shared/constants/routes'
import { Button } from '@/shared/ui/Button'
import styles from './index.module.scss'

export const PageTitle = () => {
  return (
    <section className={styles.pageTitle}>
      <h1>Applications</h1>
      <Button
        as={Link}
        to={RoutePaths.CreateNewApplication}
        buttonSize="small"
        icon={<PlusIcon height={11} width={11} />}
        iconPosition="left"
        gap="sm"
      >
        Create new
      </Button>
    </section>
  )
}
