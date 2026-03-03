import { zodResolver } from '@hookform/resolvers/zod'
import cn from 'classnames'
import { type SubmitHandler, useForm } from 'react-hook-form'
import styles from '@/pages/CreateApplicationPage/index.module.scss'
import Retry from '@/shared/assets/icons/retry.svg?react'
import { ApplicationsDefaultCount } from '@/shared/constants/applicationsDefaultCount.ts'
import { DevicesWidth } from '@/shared/constants/devicesWidth.ts'
import { useWindowWidth } from '@/shared/lib/windowWidth'
import { type FormFields, zFormFields } from '@/shared/types/zFormFields.ts'
import { Button } from '@/shared/ui/Button'
import { Input } from '@/shared/ui/Input'

type Props = {
  onSubmit: SubmitHandler<FormFields>
  isLoading: boolean
}

export const CreateApplicationPageForm = ({ onSubmit, isLoading }: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitSuccessful },
    clearErrors,
  } = useForm<FormFields>({
    resolver: zodResolver(zFormFields),
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })
  const { width } = useWindowWidth()

  const mobileDeviceWidth = width < DevicesWidth.MobileWidth

  const textareaLength = watch('additionalDetails')?.length ?? 0
  const formCounterErrorLength = textareaLength > ApplicationsDefaultCount.TextAreaMaxLettersCount

  const formCounterClasses = cn({
    [styles.formCounter]: true,
    [styles.formCounterError]: formCounterErrorLength,
  })

  return (
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
        data-button="submitting-button"
        buttonSize="large"
        gap="md"
        icon={isSubmitSuccessful && !isLoading && <Retry />}
        iconPosition="left"
        fullWidth
        loading={isLoading}
        disabled={formCounterErrorLength || isLoading}
      >
        {isSubmitSuccessful ? 'Try again' : 'Generate Now'}
      </Button>
    </form>
  )
}
