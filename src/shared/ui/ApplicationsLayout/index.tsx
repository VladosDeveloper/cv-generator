import { useEffect } from 'react'
import { useApplicationsContext } from '@/app/providers'
import { LocalStorageKeys } from '@/shared/constants/localStorageKeys.ts'
import { useLocalStorage } from '@/shared/lib/localStorage'
import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const ApplicationsLayout = () => {
  const { applications, setApplications } = useApplicationsContext()
  const { initializeFromLocalStorage } = useLocalStorage()

  useEffect(() => {
    const items = initializeFromLocalStorage(LocalStorageKeys.ApplicationKey)
    setApplications(items)
  }, [])

  return (
    <section className={styles.applicationContainer}>
      {applications?.map((application) => (
        <PreviewCard key={application.id} formData={application} />
      ))}
    </section>
  )
}
