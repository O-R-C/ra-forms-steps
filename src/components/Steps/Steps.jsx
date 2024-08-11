import { useState } from 'react'
import PropTypes from 'prop-types'
import Workout from '../Workout/Workout'
import Form from '../Form/Form'
import Training from './Training'
import styles from './Steps.module.css'

const Steps = ({ data = [] }) => {
  const [workout, setWorkout] = useState(data.map((item) => new Training(item)))
  const [newTraining, setNewTraining] = useState({ date: '', distance: null })

  const addWorkout = (training) => {
    setNewTraining({ date: '', distance: null })

    const { date, distance } = Object.fromEntries(training)

    const exists = workout.find((item) => item.formatDate === new Date(date).toLocaleDateString('ru-RU'))

    if (exists) {
      exists.distance += Number(distance)
      setWorkout(workout)
    } else {
      setWorkout([...workout, new Training({ date, distance })])
    }
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
    setWorkout(
      workout.map((item) => (item.id === id ? new Training({ date: item.date, distance: item.distance }) : item))
    )
  }

  return (
    <div className={styles.steps}>
      <Form {...{ addWorkout, newTraining, onChange }} />
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
