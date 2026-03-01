import { Activity } from 'react'
import cn from 'classnames'
import Copy from '@/assets/icons/copy.svg?react'
import Delete from '@/assets/icons/delete.svg?react'
import { Button } from '@/common/components/Button'
import { useLocalStorage } from '@/common/hooks/useLocalStorage.ts'
import { LocalStorageKeys } from '@/constants/localStorageKeys.ts'
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
    removeFromLocalStorage(LocalStorageKeys.APPLICATION_KEY, itemId)
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
