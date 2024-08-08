import PropTypes from 'prop-types'
import moment from 'moment'
import styles from './Item.module.css'

const Item = ({ item }) => {
  return (
    <li className={styles.item}>
      <div className={styles.date}>{moment(item.date).format('DD.MM.YYYY')}</div>
      <div className={styles.distance}>{item.distance}</div>
      <div
        className={styles.controls}
        data-id={item.id}
      >
        <button className={styles.edit}>✎</button>
        <button className={styles.delete}>✘</button>
      </div>
    </li>
  )
}

Item.propTypes = {
  item: PropTypes.shape({
    date: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  }),
}

export default Item
