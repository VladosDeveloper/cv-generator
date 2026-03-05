import { FormProvider, useForm } from 'react-hook-form'
import { CreateApplicationPageForm, useApplicationForm } from '@/feature/entities/create-application-page-form'
import { HitGoal } from '@/feature/entities/hit-goal'
import { PreviewCard } from '@/feature/entities/preview-card'
import { ApplicationsSuccessCount } from '@/shared/constants/consts'
import type { FormFields } from '@/shared/types/zFormFields'
import styles from './index.module.scss'

export const CreateApplicationPage = () => {
  const methods = useForm<FormFields>({})

  const { applications, onSubmit, data, isLoading, setPreviousId, setData } = useApplicationForm()

  const jobTitle = methods.watch('jobTitle')?.trim()
  const company = methods.watch('company')
  const isJobTitleFieldDirty = jobTitle?.length > 0

  const resetFormHandler = () => {
    setPreviousId('')
    methods.reset()
    scrollTo({
      top: 0,
    })
    setData(undefined)
  }

  return (
    <FormProvider {...methods}>
      <div className={styles.appContainer}>
        <div className={styles.formSection}>
          <h2 className={styles.formSectionTitle}>
            {isJobTitleFieldDirty ? `${jobTitle}, ${company}` : <span className={styles.text}>New application</span>}
          </h2>

          <CreateApplicationPageForm onSubmit={onSubmit} isLoading={isLoading} />
        </div>

        <PreviewCard expanded formData={data} isLoading={isLoading} />
      </div>

      {data && (applications?.length ?? 0) < ApplicationsSuccessCount && <HitGoal resetFunction={resetFormHandler} />}
    </FormProvider>
  )
}
