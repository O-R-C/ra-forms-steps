import PropTypes from 'prop-types'
import styles from './List.module.css'
import Item from '../Item/Item'

const List = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
        />
      ))}
    </ul>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
}

export default List
