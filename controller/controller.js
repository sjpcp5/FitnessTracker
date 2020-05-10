const db = require('../models')

// Defining methods for the postsController
module.exports = {
  findAll: function (req, res) {
    db.Workout.find()
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  range: function (req, res) {
    db.Workout.find()
      .then(dbModel => {
        res.json(dbModel)
      })
      .catch(err => res.status(422).json(err))
  },
  create: function (req, res) {
    db.Workout.create({})
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  },
  update: function (req, res) {
    db.Workout.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { exercises: req.body } },
      { new: true, runValidators: true }
    )
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err))
  }
}
