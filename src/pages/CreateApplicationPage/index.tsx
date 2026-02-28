import { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { type SubmitHandler, useForm } from 'react-hook-form'
import { Button } from '@/common/components/Button'
import { Input } from '@/common/components/Input'
import { type FormFields, zFormFields } from '@/common/schemas/zFormFields.ts'
import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const CreateApplicationPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isDirty },
    clearErrors,
  } = useForm<FormFields>({
    resolver: zodResolver(zFormFields),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const [data, setData] = useState<FormFields>()

  const onSubmit: SubmitHandler<FormFields> = (data) => {
    setData({
      ...data,
      id: crypto.randomUUID(),
    })
  }

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

          <Button buttonSize="large" gap="md" fullWidth disabled={allowSubmittingForm || formCounterErrorLength}>
            Generate Now
          </Button>
        </form>
      </div>

      <PreviewCard expanded formData={data} />
    </div>
  )
}
