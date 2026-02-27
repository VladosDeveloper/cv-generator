import PlusIcon from '@/assets/icons/icon-plus.svg?react'
import { Button } from '@/common/components/Button'
import { Dots } from '@/common/components/Dots'
import styles from './index.module.scss'

export const HitGoal = () => {
  return (
    <section className={styles.goalCard}>
      <div className={styles.goalCardContent}>
        <section className={styles.goalCardTrigger}>
          <h1 className={styles.goalCardTitle}>Hit your goal</h1>

          <p className={styles.secondaryText}>
            Generate and send out couple more job applications today to get hired faster
          </p>

          <Button mediumButton="large" icon={<PlusIcon height={14} width={14} />} iconPosition="left" gap="md">
            Create new
          </Button>
        </section>

        <div className={styles.goalCardProgress}>
          <Dots dotsType="rectangle" />
          <p className={styles.secondaryText}>0 out of 5</p>
        </div>
      </div>
    </section>
  )
}
