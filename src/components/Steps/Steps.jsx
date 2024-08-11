import { useState } from 'react'
import PropTypes from 'prop-types'
import Workout from '../Workout/Workout'
import Form from '../Form/Form'
import Training from './Training'
import addWorkout from './addWorkout'
import onClickList from './onClickList'
import styles from './Steps.module.css'

const defaultTraining = {
  date: '',
  distance: null,
}

const Steps = ({ data = [] }) => {
  const [workout, setWorkout] = useState(data.map((item) => new Training(item)))
  const [newTraining, setNewTraining] = useState(defaultTraining)

  const handleSubmit = (training) => {
    setNewTraining(defaultTraining)
    addWorkout(workout, setWorkout, new Training(Object.fromEntries(training)))
  }

  const onChange = (event) => {
    const { name, value } = event.target

    setNewTraining({
      ...newTraining,
      [name]: name === 'date' ? value : parseFloat(value),
    })
  }

  const handleClickList = (data) => {
    onClickList(data, workout, setWorkout, setNewTraining)
  }

  return (
    <div className={styles.steps}>
      <Form {...{ handleSubmit, newTraining, onChange }} />
      <Workout
        workout={workout.sort((a, b) => (a.date > b.date ? -1 : 1))}
        onClickList={handleClickList}
      />
    </div>
  )
}

Steps.propTypes = {
  data: PropTypes.array,
}

export default Steps
