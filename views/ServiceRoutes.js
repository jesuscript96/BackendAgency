const express = require("express");
const router = express.Router();

const ServiceController = require('../controllers/ServiceControllers')

// CRUD READ todas las services
router.get('/' , ServiceController.getAllServices)

// CRUD READ services por id
router.get('/id/:id' , ServiceController.getServiceById)

// CRUD READ services por type
router.get('/type/:type' , ServiceController.getServiceByType)

// CRUD READ services por availability
router.get('/available' , ServiceController.getAvailableServices)

// CRUD CREATE service
router.post('/newservice' , ServiceController.postNewService)

// CRUD Update service
// router.put('/update/:mail', authBearerMiddleware, isValidService, ServiceController.updateServiceById)
router.put('/update/:id', ServiceController.updateServiceAvailabilityById)

// CRUD delete Service - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, ServiceController.deleteServiceById)
router.delete('/delete/:id' , ServiceController.deleteServiceById)

// CRUD READ services reviews
router.get('/reviews/:id' , ServiceController.getReviewsFromService)

module.exports = router
