const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

const ServiceController = require('../controllers/ServiceControllers')

// CRUD READ todas las services
router.get('/' , ServiceController.getAllServices)

// CRUD READ services por id
router.get('/id/:id' , ServiceController.getServiceById)

// CRUD READ services por type
router.get('/type/:type' , ServiceController.getServiceByType)
router.get('/type/:type/price/:price' , ServiceController.getServiceByTypePrice)

// CRUD READ services por availability
router.get('/available' , ServiceController.getAvailableServices)

// CRUD CREATE service
router.post('/newservice' , authBearerMiddleware, isValidRoleAdmin, ServiceController.postNewService)

// CRUD Update service
router.put('/update/:id', authBearerMiddleware, isValidRoleAdmin, ServiceController.updateServiceAvailabilityById)

// CRUD delete Service - solo el admin
router.delete('/delete/:id', authBearerMiddleware, isValidRoleAdmin, ServiceController.deleteServiceById)

// CRUD READ services reviews
router.get('/reviews/:id' , ServiceController.getReviewsFromService)

module.exports = router
