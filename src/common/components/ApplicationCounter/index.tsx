import styles from './index.module.scss'

const applicationArray = ['1', '2', '3']
const applicationCount = applicationArray.length

export const ApplicationCounter = () => {
  return <section className={styles.applicationCounter}>{applicationCount}/5 applications generated</section>
}
