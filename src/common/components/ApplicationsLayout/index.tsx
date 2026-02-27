import { PreviewCard } from '@/widgets/PreviewCard'
import styles from './index.module.scss'

export const ApplicationsLayout = () => {
  return (
    <section className={styles.applicationContainer}>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <PreviewCard key={index} />
        ))}
    </section>
  )
}
