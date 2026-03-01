import cn from 'classnames'
import EllipseLoader from '@/assets/icons/ellipseLoader.svg?react'
import { useCopyToClipboard } from '@/common/hooks/useCopyToClipboard.ts'
import type { FormFields } from '@/common/schemas/zFormFields.ts'
import { ActionButtons } from '@/widgets/PreviewCard/ActionButtons'
import { PreviewCardText } from '@/widgets/PreviewCard/PreviewCardText'
import styles from './index.module.scss'

type PreviewCardProps = {
  expanded?: boolean
  formData?: FormFields
  isLoading?: boolean
}

export const PreviewCard = ({ expanded = false, formData, isLoading }: PreviewCardProps) => {
  const { copyToClipboardHandler, divRef } = useCopyToClipboard()

  const wrapperClasses = cn(styles.previewCardHeading, {
    [styles.expanded]: expanded,
    [styles.loading]: true,
  })

  return (
    <section className={styles.wrapper}>
      <div className={wrapperClasses} ref={divRef}>
        {formData && !isLoading && <PreviewCardText formData={formData} />}

        {!formData && !isLoading && <p>Your personalized job application will appear here...</p>}

        {isLoading && (
          <div className={styles.loading}>
            <EllipseLoader />
          </div>
        )}
      </div>
      {!isLoading && (
        <ActionButtons itemId={formData?.id} expanded={expanded} copyToClipboardHandler={copyToClipboardHandler} />
      )}
    </section>
  )
}
