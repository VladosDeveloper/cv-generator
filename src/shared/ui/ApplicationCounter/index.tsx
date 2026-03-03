import { ApplicationsDefaultCount } from '@/shared/constants/applicationsDefaultCount.ts'
import { LocalStorageKeys } from '@/shared/constants/localStorageKeys.ts'
import { useLocalStorage } from '@/shared/lib/localStorage'
import styles from './index.module.scss'

export const ApplicationCounter = () => {
  const { restoreFromLocalStorage } = useLocalStorage()

  const applicationsList = restoreFromLocalStorage(LocalStorageKeys.ApplicationKey).length

  return (
    <section className={styles.applicationCounter}>
      {applicationsList <= ApplicationsDefaultCount.ApplicationsMaxCount ? applicationsList : '5'}/5 applications
      generated
    </section>
  )
}
