import { type MouseEvent } from 'react'
import cn from 'classnames'
import copy from 'copy-to-clipboard'
import { useToasterContext } from '@/app/providers'
import { ActionButtons } from '@/feature/entities/preview-card/ui/action-buttons'
import { PreviewCardText } from '@/feature/entities/preview-card/ui/preview-card-text'
import EllipseLoader from '@/shared/assets/icons/ellipseLoader.svg?react'
import type { FormFields } from '@/shared/types/zFormFields'
import styles from './index.module.scss'

type PreviewCardProps = {
  expanded?: boolean
  formData?: FormFields
  isLoading?: boolean
}

export const PreviewCard = ({ expanded = false, formData, isLoading }: PreviewCardProps) => {
  const { setToasterVisibility } = useToasterContext()

  const content = formData?.additionalDetails || ''

  const copyHandler = (e: MouseEvent) => {
    e.stopPropagation()

    if (!content) {
      return
    }

    copy(content)

    setToasterVisibility({ visibility: true })
  }

  const wrapperClasses = cn(styles.previewCardHeading, {
    [styles.expanded]: expanded,
    [styles.loading]: true,
  })

  return (
    <section className={styles.wrapper}>
      <div className={wrapperClasses}>
        {formData && !isLoading && <PreviewCardText formData={formData} />}

        {!formData && !isLoading && <p>Your personalized job application will appear here...</p>}

        {isLoading && (
          <div className={styles.loading}>
            <EllipseLoader />
          </div>
        )}
      </div>
      {!isLoading && <ActionButtons itemId={formData?.id} expanded={expanded} copyToClipboardHandler={copyHandler} />}
    </section>
  )
}
