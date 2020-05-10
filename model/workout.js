const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: Date.now
    },
    excercises: [
      {
        type: {
          type: String,
          trim: true,
          required: 'Enter an Excercise Type'
        },
        name: {
          type: String,
          trim: true,
          required: 'Enter the Excercise Name'
        },
        duration: {
          type: Number,
          required: 'Enter an Excercise Duration In Minutes'
        },
        distance: { type: Number },
        weight: { type: Number },
        reps: { type: Number },
        sets: { type: Number }
      }
    ]
  },
  { toJSON: { virtuals: true } }
)

workoutSchema.virtual('totalDuration').get(function () {
  return this.excercises.reduce((total, excercise) => {
    return total + excercise.duration
  }, 0)
})

const Workout = mongoose.model('Workout', workoutSchema)

module.exports = Workout
