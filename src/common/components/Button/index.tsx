import {
  type ButtonHTMLAttributes,
  cloneElement,
  type ReactElement,
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react'
import cn from 'classnames'

import styles from './button.module.scss'

type buttonVariants = 'primary' | 'transparent' | 'iconic'

type ButtonProps<T extends ElementType = 'button'> = ButtonHTMLAttributes<HTMLButtonElement> & {
  buttonSize?: 'large' | 'small'
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  loading?: boolean
  gap?: 'sm' | 'md'
  variant?: buttonVariants
  as?: T
  fullWidth?: boolean
}

export const Button = <T extends ElementType = 'button'>({
  buttonSize = 'small',
  children,
  icon,
  iconPosition = 'right',
  loading,
  gap = 'md',
  variant = 'primary',
  as,
  fullWidth,
  disabled,
  ...rest
}: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>) => {
  const Component = as || 'button'
  const buttonClasses = cn(styles.goalCardButton, styles[buttonSize], styles[gap], styles[variant], {
    [styles.disabled]: disabled,
    [styles.fullWidth]: fullWidth,
  })

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
    <Component className={buttonClasses} {...rest}>
      {showIcon && iconPosition === 'left' && <span className={styles.iconPosition}>{renderIcon()}</span>}

      <span className={styles.buttonText}>{children}</span>

      {showIcon && iconPosition === 'right' && <span className={styles.iconPosition}>{renderIcon()}</span>}
    </Component>
  )
}
