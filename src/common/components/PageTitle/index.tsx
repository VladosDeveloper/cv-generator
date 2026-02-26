import PlusIcon from '@/assets/icons/icon-plus.svg?react'
import { Button } from '@/common/components/Button'
import styles from './index.module.scss'

export const PageTitle = () => {
  return (
    <section className={styles.pageTitle}>
      <h1>Applications</h1>
      <Button mediumButton="small" icon={<PlusIcon height={11} width={11} />} iconPosition="left" gap="sm">
        Create new
      </Button>
    </section>
  )
}
