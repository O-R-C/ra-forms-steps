import { v4 as uuidv4 } from 'uuid'
import moment from 'moment/moment'

class Training {
  constructor({ date, distance }) {
    this.date = moment(date).format('DD.MM.YYYY')
    this.distance = distance
    this.id = uuidv4()
  }
}

export default Training
