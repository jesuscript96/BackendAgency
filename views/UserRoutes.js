const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

const UserController = require('../controllers/UserControllers')

// CRUD READ all users
router.get('/', authBearerMiddleware, isValidRoleAdmin, UserController.getAllUsers)

// CRUD READ user info
router.get('/profile', authBearerMiddleware,UserController.getUserById)
router.get('/orders',authBearerMiddleware, UserController.getOrdersFromUser)
router.get('/reviews', authBearerMiddleware,UserController.getReviewsFromUser)

// CRUD Update User
router.put('/update', authBearerMiddleware,UserController.updateUserNameById)
router.put('/confirmclient', authBearerMiddleware,UserController.updateUserClientById)

// CRUD delete User - solo el admin
router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, UserController.deleteUserById)

module.exports = router