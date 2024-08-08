import PropTypes from 'prop-types'
import styles from './Label.module.css'

const Label = ({ title, name, type, value, onChange }) => {
  return (
    <label className={styles.label}>
      {title}
      <input
        className={styles.input}
        type={type}
        name={name}
        value={value || ''}
        onChange={onChange}
        required
      />
    </label>
  )
}

Label.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}

export default Label
