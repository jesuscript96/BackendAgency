const express = require("express");
const router = express.Router();

const OrderController = require('../controllers/OrderControllers')

// CRUD READ todas las Orders
router.get('/' , OrderController.getAllOrders)

// CRUD CREATE Order
router.post('/neworder' , OrderController.postNewOrder)
router.post('/addservice' , OrderController.addServiceToOrder)



module.exports = router
