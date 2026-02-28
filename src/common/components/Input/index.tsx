import { type ElementType } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

type InputProps<T extends ElementType> = {
  label: string
  inputValue?: string
  placeholder: string
  as?: T
  fullWidth?: boolean
  isError?: boolean
}

export const Input = <T extends ElementType = 'input'>({
  fullWidth,
  label,
  as,
  placeholder,
  isError,
  ...rest
}: InputProps<T>) => {
  const Component = as || 'input'

  const fieldsClasses = cn({
    [styles.field]: true,
    [styles.disabled]: false,
    [styles.textareaWrapper]: as === 'textarea',
  })

  const componentClasses = cn({
    [styles.input]: Component === 'input',
    [styles.textarea]: Component === 'textarea',
    [styles.fullWidth]: fullWidth,
    [styles.error]: isError,
  })

  return (
    <div className={fieldsClasses}>
      <label htmlFor={label}>{label}</label>
      <br />
      <Component className={componentClasses} id={label} placeholder={placeholder} {...rest} />
    </div>
  )
}
