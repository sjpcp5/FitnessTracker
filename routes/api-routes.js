const db = require('../models')

// Defining methods for the postsController
module.exports = function (app) {
  app.get('api/workouts/', function (req, res) {
    db.Workout.find({})
      .then(workout => {
        res.json(workout)
      })
      .catch(err => {
        res.status(422).json(err)
      })
  }),
    app.post('api/workouts', async function (req, res) {
      try {
        const response = await db.Workout.create({ type: 'workout' })
        res.json(response)
      } catch (err) {
        res.status(422).json(err)
      }
    }),
    app.put('/api/workouts', ({ body, params }, res) => {
      let savedExercises = []
      const workoutId = params.id

      db.Workout.findById({ _id: workoutId })
        .then(dbWorkout => {
          savedExercises = dbWorkout[0].exercises
          res.json(dbWorkout[0].exercises)
          let allExercises = [...savedExercises, body]
          console.log(allExercises)
          updateWorkout(allExercises)
        })
        .catch(err => res.status(422).json(err))
      function updateWorkout (exercises) {
        db.Workout.findByIdAndUpdate(
          workoutId,
          { exercises: exercises },
          function (err, doc) {
            if (err) {
              console.log(err)
            }
          }
        )
      }
    }),
    app.get('/api/workouts/range', function (req, res) {
      db.Workout.findRange({})
        .then(workout => {
          res.json(workout)
        })
        .catch(err => {
          res.status(422).json(err)
        })
    })
}
