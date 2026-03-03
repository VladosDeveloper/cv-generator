import Loading from '@/shared/assets/icons/loading.svg?react'
import styles from './index.module.scss'

export const Loader = () => {
  return (
    <section className={styles.loading}>
      <Loading />
    </section>
  )
}
