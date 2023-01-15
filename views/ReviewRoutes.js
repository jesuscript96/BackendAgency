const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

const ReviewController = require('../controllers/ReviewControllers')

// CRUD delete Review - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, ReviewController.deleteReviewById)
router.delete('/delete/:id' , ReviewController.deleteReviewById)

// // CRUD CREATE Review
router.post('/newreview' , ReviewController.postNewReview)

module.exports = router