import { useState } from 'react'
import PropTypes from 'prop-types'

import Workout from '../Workout/Workout'
import Form from '../Form/Form'
import Training from './Training'
import styles from './Steps.module.css'

const Steps = ({ data = [] }) => {
  const [workout, setWorkout] = useState(data)
  const [newTraining, setNewTraining] = useState({ date: '', distance: null })

  const addWorkout = (training) => {
    setNewTraining({ date: '', distance: null })
    setWorkout([...workout, new Training(Object.fromEntries(training))])
  }

  const onChange = (event) => {
    const { name, value } = event.target
    console.log('🚀 ~ value:', value)
    console.log('🚀 ~ name:', name)

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
