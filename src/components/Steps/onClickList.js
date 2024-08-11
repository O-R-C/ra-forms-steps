const onClickList = (data, workout, setWorkout, setNewTraining) => {
  const { id, button } = data
  if (button === 'EDIT') onEdit(id, workout, setWorkout, setNewTraining)
  if (button === 'DELETE') onDelete(id, workout, setWorkout)
}

const onDelete = (id, workout, setWorkout) => {
  setWorkout(workout.filter((item) => item.id !== id))
}

const onEdit = (id, workout, setWorkout, setNewTraining) => {
  const { date, distance } = workout.find((item) => item.id === id)
  setNewTraining({ date, distance })
  onDelete(id, workout, setWorkout)
}

export default onClickList
