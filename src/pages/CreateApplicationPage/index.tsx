import { useEffect, useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { type SubmitHandler, useForm } from 'react-hook-form'
import Retry from '@/assets/icons/retry.svg?react'
import { Button } from '@/common/components/Button'
import { Input } from '@/common/components/Input'
import { Loader } from '@/common/components/Loader'
import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { useApplicationsContext } from '@/common/lib/ctx.tsx'
import { type FormFields, zFormFields } from '@/common/schemas/zFormFields.ts'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
import { HitGoal } from '@/widgets/HitGoal'
import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const CreateApplicationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty, isSubmitSuccessful },
    clearErrors,
  } = useForm<FormFields>({
    resolver: zodResolver(zFormFields),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const { saveToLocalStorage, removeFromLocalStorage } = useLocalStorage()
  const { applications } = useApplicationsContext()

  const [data, setData] = useState<FormFields>()
  const [isLoading, setIsLoading] = useState(false)
  const [previousId, setPreviousId] = useState<string>('')

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    setIsLoading(true)
    removeFromLocalStorage(LocalStorageKeys.APPLICATION_KEY, previousId)
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const modifiedItem: FormFields = { ...data, id: crypto.randomUUID() }

    setPreviousId(modifiedItem.id!)
    saveToLocalStorage(LocalStorageKeys.APPLICATION_KEY, modifiedItem)

    setData({
      ...modifiedItem,
    })
    setIsLoading(false)
  }

  useEffect(() => {
    return () => setPreviousId('')
  }, [])

  const textareaLength = watch('additionalDetails')?.length
  const jobTitle = watch('jobTitle')
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
                isError={!!errors.jobTitle?.message}
                {...register('jobTitle', {
                  onChange: () => clearErrors('jobTitle'),
                })}
              />

              <Input
                label="Company"
                placeholder="Apple"
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
                isError={!!errors.additionalDetails?.message}
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
              disabled={allowSubmittingForm || formCounterErrorLength}
            >
              {isLoading ? <Loader /> : isSubmitSuccessful ? 'Try again' : 'Generate Now'}
            </Button>
          </form>
        </div>

        <PreviewCard expanded formData={data} isLoading={isLoading} />
      </div>

      {isSubmitSuccessful && applications && applications.length < 4 && <HitGoal />}
    </>
  )
}
