import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { ApplicationsDefaultCount } from '@/constants/applicationsDefaultCount.ts'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
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
