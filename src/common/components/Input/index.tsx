import { type ElementType } from 'react'
import cn from 'classnames'
import styles from './index.module.scss'

type InputProps<T extends ElementType> = {
  label: string
  inputValue: string
  placeholder: string
  as?: T
  fullWidth?: boolean
}

export const Input = <T extends ElementType = 'input'>({
  inputValue,
  fullWidth,
  label,
  as,
  placeholder,
}: InputProps<T>) => {
  const Component = as || 'input'

  return (
    <div className={cn({ [styles.field]: true, [styles.disabled]: false })}>
      <label htmlFor={label}>{label}</label>
      <br />
      <Component
        className={cn({
          [styles.input]: Component === 'input',
          [styles.textarea]: Component === 'textarea',
          [styles.fullWidth]: fullWidth,
        })}
        name={inputValue}
        id={label}
        placeholder={placeholder}
      />
      {/*{invalid && <p className={styles.error}>{error}</p>}*/}
    </div>
  )
}
