const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

const OrderController = require('../controllers/OrderControllers')
const UserController = require('../controllers/UserControllers')

// CRUD READ todas las Orders
router.get('/' , authBearerMiddleware, isValidRoleAdmin, OrderController.getAllOrders)

// CRUD CREATE Order
router.post('/neworder', authBearerMiddleware, OrderController.postNewOrder)
router.post('/addservice', authBearerMiddleware, OrderController.addServiceToOrder)



module.exports = router
