import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
import styles from './index.module.scss'

export const ApplicationCounter = () => {
  const { restoreFromLocalStorage } = useLocalStorage()

  const applicationsList = restoreFromLocalStorage(LocalStorageKeys.APPLICATION_KEY).length

  return <section className={styles.applicationCounter}>{applicationsList}/5 applications generated</section>
}
