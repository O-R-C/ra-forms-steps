import PropTypes from 'prop-types'
import Label from '../Label/Label'
import styles from './Form.module.css'

const Form = ({ addWorkout, newTraining: { date, distance }, onChange }) => {
  const onSubmit = (event) => {
    event.preventDefault()

    addWorkout(new FormData(event.target))
  }

  return (
    <form
      className={styles.form}
      onSubmit={onSubmit}
    >
      <Label
        type='date'
        name='date'
        title='Дата (ДД.ММ.ГГ)'
        onChange={onChange}
        value={date}
        {...{ max: '9999-12-31' }}
      />
      <Label
        type='number'
        name='distance'
        title='Пройдено км'
        onChange={onChange}
        value={distance}
      />
      <button className={styles.save}>OK</button>
    </form>
  )
}

Form.propTypes = {
  addWorkout: PropTypes.func.isRequired,
  newTraining: PropTypes.shape({
    date: PropTypes.string,
    distance: PropTypes.number,
  }),
  onChange: PropTypes.func.isRequired,
}

export default Form
