const express = require("express");
const router = express.Router();

const { isValidRoleAdmin, authBearerMiddleware } = require("../middlewares/authMiddleware")

const CompanyController = require('../controllers/CompanyControllers')

// CRUD READ todas las Companys
router.get('/' , authBearerMiddleware, isValidRoleAdmin, CompanyController.getAllCompanies)

// CRUD READ Companys por id
router.get('/user' , authBearerMiddleware, CompanyController.getCompaniesByUser)

// CRUD CREATE Company
router.post('/newCompany' , authBearerMiddleware, CompanyController.postNewCompany)

// CRUD Update Company
// router.put('/update/:mail', authBearerMiddleware, isValidUser, UserController.updateUserById)
router.put('/update/phone/:id', authBearerMiddleware, CompanyController.updateCompanyPhoneById)
router.put('/update/mail/:id', authBearerMiddleware, CompanyController.updateCompanyMailById)

// CRUD delete Company - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, CompanyController.deleteCompanyById)
router.delete('/delete/:id' , authBearerMiddleware, isValidRoleAdmin, CompanyController.deleteCompanyById)

module.exports = router
