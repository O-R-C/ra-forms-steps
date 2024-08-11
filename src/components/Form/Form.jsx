import PropTypes from 'prop-types'
import Label from '../Label/Label'
import styles from './Form.module.css'

const Form = ({ handleSubmit, newTraining: { date, distance }, onChange }) => {
  const onSubmit = (event) => {
    event.preventDefault()

    handleSubmit(new FormData(event.target))
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
  onChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  newTraining: PropTypes.shape({
    date: PropTypes.string,
    distance: PropTypes.number,
  }),
}

export default Form
