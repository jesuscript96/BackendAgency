const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

const PilController = require('../controllers/PilControllers')

// CRUD READ todas las Pils
router.get('/' , PilController.getAllPils)

// CRUD READ Pils por title
router.get('/title/:title' , PilController.getPilsByTitle)

// CRUD READ Pils por type
router.get('/type/:type' , PilController.getPilsByType)

// CRUD CREATE Pil
router.post('/newpil' , authBearerMiddleware, isValidRoleAdmin, PilController.postNewPil)

// CRUD delete Pil - solo el admin
router.delete('/delete/:id', authBearerMiddleware, isValidRoleAdmin, PilController.deletePilById)

module.exports = router
