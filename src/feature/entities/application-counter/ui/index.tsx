import { ApplicationsMaxCount, LocalStorageApplicationKey } from '@/shared/constants/consts'
import { localStorageService } from '@/shared/lib/localStorage'
import styles from './index.module.scss'

export const ApplicationCounter = () => {
  const { restoreFromLocalStorage } = localStorageService()

  const applicationsList = restoreFromLocalStorage(LocalStorageApplicationKey).length

  return (
    <section className={styles.applicationCounter}>
      {applicationsList <= ApplicationsMaxCount ? applicationsList : '5'}/5 applications generated
    </section>
  )
}
