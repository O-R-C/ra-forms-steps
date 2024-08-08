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
    setWorkout([...workout, new Training(Object.fromEntries(training))].sort((a, b) => (a.date > b.date ? -1 : 1)))
  }

  const onChange = (event) => {
    const { name, value } = event.target

    setNewTraining({
      ...newTraining,
      [name]: name === 'date' ? value : parseFloat(value),
    })
  }

  return (
    <div className={styles.steps}>
      <Form {...{ addWorkout, newTraining, onChange }} />
      <Workout workout={workout} />
    </div>
  )
}

Steps.propTypes = {
  data: PropTypes.array,
}

export default Steps
