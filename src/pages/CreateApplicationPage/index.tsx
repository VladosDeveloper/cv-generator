import { ApplicationsDefaultCount } from '@/shared/constants/applicationsDefaultCount.ts'
import { useApplicationForm } from '@/shared/lib/applicationForm'
import { CreateApplicationPageForm } from '@/widgets/CreateApplicationPageForm'
import { HitGoal } from '@/widgets/HitGoal'
import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const CreateApplicationPage = () => {
  const {
    applications,
    isJobTitleFieldDirty,
    jobTitle,
    resetFormHandler,
    isSubmitSuccessful,
    onSubmit,
    data,
    isLoading,
    company,
  } = useApplicationForm()

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.formSection}>
          <h2 className={styles.formSectionTitle}>
            {isJobTitleFieldDirty ? `${jobTitle}, ${company}` : <span className={styles.text}>New application</span>}
          </h2>

          <CreateApplicationPageForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>

        <PreviewCard expanded formData={data} isLoading={isLoading} />
      </div>

      {isSubmitSuccessful &&
        applications &&
        applications.length < ApplicationsDefaultCount.ApplicationsSuccessCount && (
          <HitGoal resetFunction={resetFormHandler} />
        )}
    </>
  )
}
