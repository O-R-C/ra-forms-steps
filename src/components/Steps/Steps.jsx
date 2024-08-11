import { useState } from 'react'
import PropTypes from 'prop-types'
import Workout from '../Workout/Workout'
import Form from '../Form/Form'
import Training from './Training'
import addWorkout from './addWorkout'
import styles from './Steps.module.css'

const Steps = ({ data = [] }) => {
  const [workout, setWorkout] = useState(data.map((item) => new Training(item)))
  const [newTraining, setNewTraining] = useState({ date: '', distance: null })

  const handleSubmit = (training) => {
    setNewTraining({ date: '', distance: null })

    const newTraining = new Training(Object.fromEntries(training))
    addWorkout(workout, setWorkout, newTraining)
  }

  const onChange = (event) => {
    const { name, value } = event.target

    setNewTraining({
      ...newTraining,
      [name]: name === 'date' ? value : parseFloat(value),
    })
  }

  const onClickList = ({ id, button }) => {
    if (button === 'EDIT') onEdit(id)
    if (button === 'DELETE') onDelete(id)
  }

  const onDelete = (id) => {
    setWorkout(workout.filter((item) => item.id !== id))
  }

  const onEdit = (id) => {
    const { date, distance } = workout.find((item) => item.id === id)

    setNewTraining({ date, distance })
    onDelete(id)
  }

  return (
    <div className={styles.steps}>
      <Form {...{ handleSubmit, newTraining, onChange }} />
      <Workout
        workout={workout.sort((a, b) => (a.date > b.date ? -1 : 1))}
        onClickList={onClickList}
      />
    </div>
  )
}

Steps.propTypes = {
  data: PropTypes.array,
}

export default Steps
