import PropTypes from 'prop-types'
import List from '../List/List'
import styles from './Workout.module.css'
import Header from '../Header/Header'

const Workout = ({ workout }) => {
  return (
    <div className={styles.workout}>
      <Header />
      <List items={workout} />
    </div>
  )
}

Workout.propTypes = {
  workout: PropTypes.array.isRequired,
}

export default Workout
