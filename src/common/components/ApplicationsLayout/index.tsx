import { useEffect } from 'react'
import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { useApplicationsContext } from '@/common/providers/applicationContext.tsx'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const ApplicationsLayout = () => {
  const { applications } = useApplicationsContext()
  const { initializeFromLocalStorage } = useLocalStorage()

  useEffect(() => {
    initializeFromLocalStorage(LocalStorageKeys.APPLICATION_KEY)
  }, [])

  return (
    <section className={styles.applicationContainer}>
      {applications?.map((application) => (
        <PreviewCard key={application.id} formData={application} />
      ))}
    </section>
  )
}
