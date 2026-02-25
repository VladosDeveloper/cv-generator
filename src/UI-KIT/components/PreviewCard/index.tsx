import { Activity } from 'react'
import cn from 'classnames'
import Copy from '@/assets/icons/copy.svg?react'
import Delete from '@/assets/icons/delete.svg?react'
import { Button } from '@/UI-KIT/components/Button'
import styles from './index.module.scss'

type PreviewCardProps = {
  expanded?: boolean
}

export const PreviewCard = ({ expanded = false }: PreviewCardProps) => {
  const wrapperClasses = cn(styles.previewCardHeading, {
    [styles.expanded]: expanded,
  })

  return (
    <section className={styles.wrapper}>
      <p className={wrapperClasses}>
        <p>Dear [Company] Team,</p>
        <p>I am writing to express my interest in the [JobTitle] position.</p>
        <p>
          My experience in the realm combined with my skills in [SkillsList] make me a strong candidate for this role.
        </p>
        <p>[AdditionalDetails]</p>
        <p>
          I am confident that my skills and enthusiasm would translate into valuable contributions to your esteemed
          organization.
        </p>
        <p>
          Thank you for considering my application. I eagerly await the opportunity to discuss my qualifications
          further.
        </p>
      </p>
      <section className={cn(styles.buttonWrapper, { [styles.expanded]: expanded })}>
        <Activity mode={expanded ? 'hidden' : 'visible'}>
          <Button iconPosition="left" icon={<Delete />} gap="sm" mediumButton="small" variant="transparent">
            Delete
          </Button>
        </Activity>

        <Button iconPosition="right" icon={<Copy />} gap="sm" mediumButton="small" variant="transparent">
          Copy to clipboard
        </Button>
      </section>
    </section>
  )
}
