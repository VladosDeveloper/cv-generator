import { useEffect } from 'react'
import { useApplicationsContext } from '@/app/providers'
import { PreviewCard } from '@/feature/entities/preview-card/ui'
import { LocalStorageApplicationKey } from '@/shared/constants/consts'
import { localStorageService } from '@/shared/lib/localStorage'
import styles from './index.module.scss'

export const ApplicationsLayout = () => {
  const { applications, setApplications } = useApplicationsContext()
  const { initializeFromLocalStorage } = localStorageService()

  useEffect(() => {
    const items = initializeFromLocalStorage(LocalStorageApplicationKey)
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
