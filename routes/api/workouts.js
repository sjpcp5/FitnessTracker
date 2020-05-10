const router = require('express').Router()
const workoutsController = require('../../controller/controller')

// Matches with "/api/workouts"
router
  .route('/')
  .get(workoutsController.findAll)
  .post(workoutsController.create)

// Matches with "/api/workouts/:id"
router
  .route('/:id')

  .put(workoutsController.update)

// matches with '/API/workouts/range
router.route('/range').get(workoutsController.range)

module.exports = router
