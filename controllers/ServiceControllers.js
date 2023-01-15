const Service = require('../models/service')
const Review = require('../models/review')
const ServiceController = {}

const { Op } = require("sequelize");
// const Sequelize = require('sequelize');
// const sequelize = new Sequelize ('database', 'user', 'password', {
//     host: '127.0.0.1',
//     dialect: 'mysql',
//     port: 33060,
//     user: 'root',
//     password: 'root',
//     database: "agency"
// })

ServiceController.getAllServices = async (req, res) => {
    try {
        let resp = await Service.findAll({
            attributes: {exclude: ['ordersServiceIdOrdersservices']}
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

ServiceController.getServiceById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Service.findOne({
            attributes: {exclude: ['ordersServiceIdOrdersservices']},
            where: { id_Service: id }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

ServiceController.getServiceByType = async (req, res) => {
    try {
        let type = req.params.type
        let resp = await Service.findAll({
            attributes: {exclude: ['ordersServiceIdOrdersservices']},
            where: {
                type:
                {
                    [Op.like]: `%${type}%`
                }
            }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

ServiceController.getServiceByTypePrice = async (req, res) => {
    try {
        let type = req.params.type
        let price = req.params.price
        let resp = await Service.findAll({
            attributes: {exclude: ['ordersServiceIdOrdersservices']},
            where: {
                type:
                {
                    [Op.like]: `%${type}%`
                },
                price: {
                    [Op.lte]: price
                }
            }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

ServiceController.getAvailableServices = async (req, res) => {
    try {
        let resp = await Service.findAll({
            attributes: {exclude: ['ordersServiceIdOrdersservices']},
            where: {
                available: true
            }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

ServiceController.postNewService = async (req, res) => {
    try {
        let data = req.body
        let resp = await Service.create({
            name: data.name,
            description: data.description,
            price: data.price,
            type: data.type,
            img: data.img
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

ServiceController.updateServiceAvailabilityById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Service.update(
            {
                available: false
            },
            {
                where: { id_service: id }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

ServiceController.deleteServiceById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Service.destroy({
            where: { id_service: id }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el service correctamente")
        } else {
            res.status(400).send("No se ha podido eliminar el service")
        }

    } catch (err) {
        res.send(err)
    }
}

ServiceController.getReviewsFromService = async (req, res) => {
    try {
        let id = req.params.id
        let service = await Review.findAll({
            attributes: {exclude: ['ordersServiceIdOrdersservices']},
            where: { serviceidService: id },
            attributes: ['userMail', 'text', 'rating', 'creation_date', 'serviceIdService']

        })
        if (!service) {
            res.status(400).send('service not found')
            return;
        }
        res.status(200).json(service)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}


module.exports = ServiceController