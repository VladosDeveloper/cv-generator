import { type ButtonHTMLAttributes, cloneElement, type ReactElement, type ReactNode } from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  mediumButton?: 'large' | 'small'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  gap?: 'sm' | 'md'
  variant?: 'primary' | 'transparent'
}

export const Button = ({
  mediumButton = 'small',
  children,
  onClick,
  icon,
  iconPosition = 'right',
  loading,
  gap = 'md',
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  const buttonClasses = cn(styles.goalCardButton, styles[mediumButton], styles[gap], styles[variant])

  const renderIcon = () => {
    if (loading) {
      return loading
    }

    if (icon) {
      return cloneElement(icon as ReactElement)
    }

    return null
  }

  const showIcon = icon || loading

  return (
    <button className={buttonClasses} onClick={onClick} {...rest}>
      {showIcon && iconPosition === 'left' && <span className={styles.iconPosition}>{renderIcon()}</span>}

      <span className={styles.buttonText}>{children}</span>

      {showIcon && iconPosition === 'right' && <span className={styles.iconPosition}>{renderIcon()}</span>}
    </button>
  )
}
