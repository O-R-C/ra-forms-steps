import PropTypes from 'prop-types'
import styles from './List.module.css'
import Item from '../Item/Item'

const List = ({ items, onClickList }) => {
  const handleClick = ({ target }) => {
    const button = target.closest('button[class^="_edit"]')
      ? 'EDIT'
      : target.closest('button[class^="_delete"]')
      ? 'DELETE'
      : null

    if (!button) return

    const id = target.closest('[data-id]').dataset.id

    return onClickList({ id, button })
  }

  return (
    <ul
      className={styles.list}
      onClick={handleClick}
    >
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
  onClickList: PropTypes.func.isRequired,
}

export default List
