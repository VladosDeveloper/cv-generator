import { Link } from 'react-router'
import PlusIcon from '@/shared/assets/icons/icon-plus.svg?react'
import { LocalStorageApplicationKey } from '@/shared/constants/consts'
import { RoutePaths } from '@/shared/constants/routes'
import { localStorageService } from '@/shared/lib/localStorage'
import { Button } from '@/shared/ui/Button'
import { Dots } from '@/shared/ui/Dots'
import styles from './index.module.scss'

type Props = {
  resetFunction?: () => void
}

export const HitGoal = ({ resetFunction }: Props) => {
  const { restoreFromLocalStorage } = localStorageService()

  const applicationsList = restoreFromLocalStorage(LocalStorageApplicationKey).length

  return (
    <section className={styles.goalCard}>
      <div className={styles.goalCardContent}>
        <section className={styles.goalCardTrigger}>
          <h1 className={styles.goalCardTitle}>Hit your goal</h1>

          <p className={styles.secondaryText}>
            Generate and send out couple more job applications today to get hired faster
          </p>

          <Button
            as={Link}
            to={RoutePaths.CreateNewApplication}
            buttonSize="large"
            icon={<PlusIcon height={14} width={14} />}
            iconPosition="left"
            gap="md"
            onClick={resetFunction}
          >
            Create new
          </Button>
        </section>

        <div className={styles.goalCardProgress}>
          <Dots dotsType="rectangle" fillCount={applicationsList} />
          <p className={styles.secondaryText}>{applicationsList} out of 5</p>
        </div>
      </div>
    </section>
  )
}
