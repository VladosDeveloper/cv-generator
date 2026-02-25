import PlusIcon from '@/assets/icons/icon-plus.svg?react'
import { Dots } from '@/UI-KIT/components/Dots'
import { Button } from '../Button'
import styles from './hitGoal.module.scss'

export const HitGoal = () => {
  return (
    <section className={styles.goalCard}>
      <div className={styles.goalCardContent}>
        <h1 className={styles.goalCardTitle}>Hit your goal</h1>

        <p className={styles.goalCardSubtitle}>
          Generate and send out couple more job applications today to get hired faster
        </p>

        <Button mediumButton={'large'} icon={<PlusIcon />} iconPosition="left" gap="md">
          Create new
        </Button>

        <div className={styles.goalCardProgress}>
          <Dots mediumDots="large" />
          <p className={styles.goalCardProgressText}>0 out of 5</p>
        </div>
      </div>
    </section>
  )
}
