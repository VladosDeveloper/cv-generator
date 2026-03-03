import { Activity } from 'react'
import cn from 'classnames'
import Copy from '@/shared/assets/icons/copy.svg?react'
import Delete from '@/shared/assets/icons/delete.svg?react'
import { LocalStorageKeys } from '@/shared/constants/localStorageKeys.ts'
import { useLocalStorage } from '@/shared/lib/localStorage'
import { Button } from '@/shared/ui/Button'
import styles from '../index.module.scss'

type Props = {
  itemId?: string
  expanded: boolean
  copyToClipboardHandler: () => void
}

export const ActionButtons = ({ expanded, itemId, copyToClipboardHandler }: Props) => {
  const { removeFromLocalStorage } = useLocalStorage()

  const removeItemHandler = () => {
    if (!itemId) {
      return
    }
    removeFromLocalStorage(LocalStorageKeys.ApplicationKey, itemId)
  }

  return (
    <section className={cn(styles.buttonWrapper, { [styles.expanded]: expanded })}>
      <Activity mode={expanded ? 'hidden' : 'visible'}>
        <Button
          iconPosition="left"
          icon={<Delete width={15} height={16} />}
          gap="sm"
          buttonSize="small"
          variant="transparent"
          onClick={removeItemHandler}
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
  )
}
