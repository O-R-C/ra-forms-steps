const addWorkout = (workout, setWorkout, training) => {
  const exists = workout.find((item) => item.formatDate === training.formatDate)

  if (exists) {
    exists.distance += training.distance
    setWorkout(workout)
  } else {
    setWorkout([...workout, training])
  }
}

export default addWorkout
