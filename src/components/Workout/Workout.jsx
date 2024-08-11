import PropTypes from 'prop-types'
import List from '../List/List'
import styles from './Workout.module.css'
import Header from '../Header/Header'

const Workout = ({ workout, onClickList }) => {
  return (
    <div className={styles.workout}>
      <Header />
      <List
        items={workout}
        onClickList={onClickList}
      />
    </div>
  )
}

Workout.propTypes = {
  workout: PropTypes.array.isRequired,
  onClickList: PropTypes.func.isRequired,
}

export default Workout
