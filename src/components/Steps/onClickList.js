const onClickList = (data, setWorkout, workout, setNewTraining) => {
  const { id, button } = data
  if (button === 'EDIT') onEdit(id, setWorkout, workout)
  if (button === 'DELETE') onDelete(id, setWorkout, workout, setNewTraining)
}

const onDelete = (id, setWorkout, workout) => {
  setWorkout(workout.filter((item) => item.id !== id))
}

const onEdit = (id, setWorkout, workout, setNewTraining) => {
  const { date, distance } = workout.find((item) => item.id === id)

  setNewTraining({ date, distance })
  onDelete(id)
}

export default onClickList
