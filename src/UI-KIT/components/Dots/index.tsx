import cn from 'classnames'
import styles from './dots.module.scss'

type DotsProps = {
  mediumDots?: 'large' | 'small'
  gap?: 'xs' | 'md'
}

export const Dots = ({ mediumDots = 'large', gap = 'md' }: DotsProps) => {
  const dotsClasses = cn(styles.goalCardProgressDots, styles[gap])

  return (
    <div className={dotsClasses}>
      {Array(5)
        .fill(null)
        .map((_, id) => (
          <span key={id} className={styles[mediumDots]}></span>
        ))}
    </div>
  )
}
