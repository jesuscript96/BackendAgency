const express = require("express");
const router = express.Router();

const PilController = require('../controllers/PilControllers')

// CRUD READ todas las Pils
router.get('/' , PilController.getAllPils)

// CRUD READ Pils por title
router.get('/title/:title' , PilController.getPilsByTitle)

// CRUD READ Pils por type
router.get('/type/:type' , PilController.getPilsByType)

// CRUD CREATE Pil
router.post('/newpil' , PilController.postNewPil)

// CRUD delete Pil - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, PilController.deletePilById)
router.delete('/delete/:id' , PilController.deletePilById)

module.exports = router
