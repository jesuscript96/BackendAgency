const express = require("express");
const router = express.Router();

const CompanyController = require('../controllers/CompanyControllers')

// CRUD READ todas las Companys
router.get('/' , CompanyController.getAllCompanies)

// CRUD READ Companys por id
router.get('/user/:mail' , CompanyController.getCompaniesByUser)

// CRUD CREATE Company
router.post('/newCompany' , CompanyController.postNewCompany)

// CRUD Update Company
// router.put('/update/:mail', authBearerMiddleware, isValidUser, UserController.updateUserById)
router.put('/update/phone/:id', CompanyController.updateCompanyPhoneById)
router.put('/update/mail/:id', CompanyController.updateCompanyMailById)

// CRUD delete Company - solo el admin
// router.delete('/delete/:mail' , authBearerMiddleware, isValidRoleAdmin, CompanyController.deleteCompanyById)
router.delete('/delete/:id' , CompanyController.deleteCompanyById)

module.exports = router
