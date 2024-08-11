import { v4 as uuidv4 } from 'uuid'

class Training {
  constructor({ date, distance }) {
    this.date = new Date(date).getTime()
    this.formatDate = new Date(date).toLocaleDateString('ru-RU')
    this.distance = +distance
    this.id = uuidv4()
  }
}

export default Training
