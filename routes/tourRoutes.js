const express = require('express');
const tourController = require('../controllers/tourController');
const authController = require('../controllers/authController');

const router = express.Router();

// prettier-ignore
router
  .route('/top-5-cheap')
  .get(tourController.aliasTopTours, tourController.getAllTours);

// prettier-ignore
router
  .route('/monthly-plan/:year')
  .get(tourController.getMonthlyPlan);

// prettier-ignore
router
  .route('/tour-stats')
  .get(tourController.getTourStats);

// prettier-ignore
router
  .route('/')
  .get(authController.protect, tourController.getAllTours)
  .post(tourController.createTour);

// prettier-ignore
router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
