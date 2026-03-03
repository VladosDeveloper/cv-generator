import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { useApplicationsContext } from '@/app/providers'
import Retry from '@/shared/assets/icons/retry.svg?react'
import { LocalStorageKeys } from '@/shared/constants/localStorageKeys.ts'
import { useLocalStorage } from '@/shared/lib/localStorage'
import { useWindowWidth } from '@/shared/lib/windowWidth'
import { type FormFields, zFormFields } from '@/shared/types/zFormFields.ts'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'
import { HitGoal } from '@/widgets/HitGoal'
import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const CreateApplicationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isDirty, isSubmitSuccessful },
    clearErrors,
  } = useForm<FormFields>({
    resolver: zodResolver(zFormFields),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })
  const { saveToLocalStorage, removeFromLocalStorage } = useLocalStorage()
  const { applications, setApplications } = useApplicationsContext()
  const { width } = useWindowWidth()

  const mobileDeviceWidth = width < 568

  const [data, setData] = useState<FormFields>()
  const [isLoading, setIsLoading] = useState(false)
  const [previousId, setPreviousId] = useState<string>('')

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true)

    const filteredItems = removeFromLocalStorage(LocalStorageKeys.ApplicationKey, previousId)
    setApplications(filteredItems)

    await new Promise((resolve) => setTimeout(resolve, 2000))

    const modifiedItem: FormFields = { ...data, id: crypto.randomUUID() }

    setPreviousId(modifiedItem.id!)
    const updatedListItems = saveToLocalStorage(LocalStorageKeys.ApplicationKey, modifiedItem)
    setApplications(updatedListItems)

    setData({
      ...modifiedItem,
    })
    setIsLoading(false)
  }

  const resetFormHandler = () => {
    setPreviousId('')
    reset()
  }

  const textareaLength = watch('additionalDetails')?.length
  const jobTitle = watch('jobTitle')?.trim()
  const company = watch('company')
  const isFieldDirty = jobTitle?.length > 0
  const allowSubmittingForm = !isDirty

  const formCounterErrorLength = textareaLength > 1200
  const formCounterClasses = cn({
    [styles.formCounter]: true,
    [styles.formCounterError]: formCounterErrorLength,
  })

  return (
    <>
      <div className={styles.appContainer}>
        <div className={styles.formSection}>
          <h2 className={styles.formSectionTitle}>
            {isFieldDirty ? `${jobTitle}, ${company}` : <span className={styles.text}>New application</span>}
          </h2>

          <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.formRow}>
              <Input
                label="Job title"
                placeholder="Product manager"
                fullWidth={mobileDeviceWidth}
                isError={!!errors.jobTitle?.message}
                {...register('jobTitle', {
                  onChange: () => clearErrors('jobTitle'),
                })}
              />

              <Input
                label="Company"
                placeholder="Apple"
                fullWidth={mobileDeviceWidth}
                isError={!!errors.company?.message}
                {...register('company', {
                  onChange: () => clearErrors('company'),
                })}
              />
            </div>

            <Input
              label="I am good at..."
              fullWidth
              isError={!!errors.skills?.message}
              placeholder="HTML, CSS and doing things in time"
              {...register('skills', {
                onChange: () => clearErrors('skills'),
              })}
            />

            <div className={styles.formGroup}>
              <Input
                isError={!!errors.additionalDetails?.message || formCounterErrorLength}
                label="Additional details"
                placeholder="Describe why you are a great fit or paste your bio"
                as={'textarea'}
                {...register('additionalDetails', {
                  onChange: () => clearErrors('additionalDetails'),
                })}
              />
              <span className={formCounterClasses}>{textareaLength}/1200</span>
            </div>

            <Button
              variant={isSubmitSuccessful ? 'iconic' : 'primary'}
              style={{ height: '60px' }}
              buttonSize="large"
              gap="md"
              icon={isSubmitSuccessful && !isLoading && <Retry />}
              iconPosition="left"
              fullWidth
              loading={isLoading}
              disabled={allowSubmittingForm || formCounterErrorLength}
            >
              {isSubmitSuccessful ? 'Try again' : 'Generate Now'}
            </Button>
          </form>
        </div>

        <PreviewCard expanded formData={data} isLoading={isLoading} />
      </div>

      {isSubmitSuccessful && applications && applications.length < 5 && <HitGoal resetFunction={resetFormHandler} />}
    </>
  )
}
