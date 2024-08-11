import { v4 as uuidv4 } from 'uuid'

class Training {
  constructor({ date, distance }) {
    this.date = date
    this.formatDate = new Date(date).toLocaleDateString('ru-RU')
    this.distance = Number(distance)
    this.id = uuidv4()
  }
}

export default Training
