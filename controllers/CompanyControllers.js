const Company = require('../models/company')
var sequelize = require('../db/db')
const jsonwebtoken = require("jsonwebtoken");


const CompanyController = {};

CompanyController.getAllCompanies = async (req, res) => {
    try {
        let resp = await Company.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

CompanyController.getCompaniesByUser = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        let resp = await Company.findAll({
            where: { userMail: mail }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

CompanyController.postNewCompany = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let userMail = payload.mail
        let resp = await Company.create({
            mail: data.mail,
            name: data.name,
            phone: data.phone,
            cif: data.cif,
            city: data.city,
            sector: data.sector,
            userMail: userMail,
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

CompanyController.updateCompanyPhoneById = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail

        let id = req.params.id
        let company = await Company.findOne({
            where: { id_company: id }
        })
        console.log(company)
        if (company.userMail === mail) {
            let resp = await Company.update(
                {
                    phone: data.phone
                },
                {
                    where: { id_company: id }
                }
            )

            res.send(resp)
        }

    } catch (err) {
        res.send(err)
    }
}

CompanyController.updateCompanyMailById = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail

        let id = req.params.id
        let company = await Company.findOne({
            where: { id_company: id }
        })
        console.log(company)
        if (company.userMail === mail) {
            let resp = await Company.update(
                {
                    mail: data.mail
                },
                {
                    where: { id_company: id }
                }
            )

            res.send(resp)
        }

    } catch (err) {
        res.send(err)
    }
}

CompanyController.deleteCompanyById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Company.destroy({
            where: { id_company: id }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el company correctamente")
        } else {
            res.status(400).send("No se ha podido eliminar el company")
        }

    } catch (err) {
        res.send(err)
    }
}

module.exports = CompanyController