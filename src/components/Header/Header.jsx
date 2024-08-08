import styles from './Header.module.css'

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.date}>Дата (ДД.ММ.ГГ)</div>
      <div className={styles.distance}>Пройдено км</div>
      <div className={styles.controls}>Действия</div>
    </div>
  )
}

export default Header
