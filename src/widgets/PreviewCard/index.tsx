import { Activity } from 'react'
import cn from 'classnames'
import Copy from '@/assets/icons/copy.svg?react'
import Delete from '@/assets/icons/delete.svg?react'
import { Button } from '@/common/components/Button'
import { useCopyToClipboard } from '@/common/hooks/useCopyToClipboard.ts'
import type { FormFields } from '@/common/schemas/zFormFields.ts'
import styles from './index.module.scss'

type PreviewCardProps = {
  expanded?: boolean
  formData?: FormFields
}

export const PreviewCard = ({ expanded = false, formData }: PreviewCardProps) => {
  const { copyToClipboardHandler, divRef } = useCopyToClipboard()

  const wrapperClasses = cn(styles.previewCardHeading, {
    [styles.expanded]: expanded,
  })

  return (
    <section className={styles.wrapper}>
      <div className={wrapperClasses} data-copy={formData?.id} ref={divRef}>
        {formData ? (
          <>
            <p>Dear {formData.company} Team,</p>
            <p>I am writing to express my interest in the {formData.jobTitle} position.</p>
            <p>
              My experience in the realm combined with my skills in {formData.skills} make me a strong candidate for
              this role.
            </p>
            <p>{formData.additionalDetails}</p>
            <p>
              I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed
              organization.
            </p>
            <p>
              Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications
              further.
            </p>
          </>
        ) : (
          <p>Your personalized job application will appear here...</p>
        )}
      </div>
      <section className={cn(styles.buttonWrapper, { [styles.expanded]: expanded })}>
        <Activity mode={expanded ? 'hidden' : 'visible'}>
          <Button
            iconPosition="left"
            icon={<Delete width={15} height={16} />}
            gap="sm"
            buttonSize="small"
            variant="transparent"
          >
            Delete
          </Button>
        </Activity>

        <Button
          iconPosition="right"
          icon={<Copy />}
          gap="sm"
          buttonSize="small"
          variant="transparent"
          onClick={copyToClipboardHandler}
        >
          Copy to clipboard
        </Button>
      </section>
    </section>
  )
}
