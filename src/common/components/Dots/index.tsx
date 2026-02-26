import cn from 'classnames'
import styles from './dots.module.scss'

type DotsProps = {
  dotsType?: 'circle' | 'rectangle'
  fillCount?: number
}

export const Dots = ({ dotsType = 'rectangle', fillCount = 0 }: DotsProps) => {
  const dotsClasses = (index: number) =>
    cn(styles[dotsType], {
      [styles.fill]: index < fillCount,
    })

  return (
    <div className={styles.goalCardProgressDots} style={{ gap: dotsType === 'circle' ? '4px' : '8px' }}>
      {Array(5)
        .fill(null)
        .map((_, id) => (
          <span key={id} className={dotsClasses(id)}></span>
        ))}
    </div>
  )
}
