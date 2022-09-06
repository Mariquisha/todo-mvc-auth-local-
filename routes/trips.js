//tripRouter
const express = require('express')
const router = express.Router()
const tripsController = require('../controllers/trips')
const { ensureAuth } = require('../middleware/auth')


// @desc    Show List of Trips
// @route   GET /trips
router.get('/', ensureAuth, tripsController.showTrips)

// @desc    Show Trip Form
// @route   GET /trip/createTrip
router.get('/createTrip', ensureAuth, tripsController.createTrip)

// @desc    Process Trip Form
// @route   POST /trip/createPostTrip
router.post('/createPostTrip', ensureAuth, tripsController.createPostTrip)

// @desc    Delete Trip
// @route   DELETE /trip/:id
router.delete('/:id', ensureAuth, tripsController.deleteTrip)

// @desc    Vote Trip
// @route   PUT /trips/:id
router.put('/trips', ensureAuth, tripsController.vote)

module.exports = router
