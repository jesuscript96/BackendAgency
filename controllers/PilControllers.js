const Pil = require('../models/pil')
const PilController = {}

const { Op } = require("sequelize");

PilController.getAllPils = async (req, res) => {
    try {
        let resp = await Pil.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

PilController.getPilsByTitle = async (req, res) => {
    try {
        let title = req.params.title
        let resp = await Pil.findAll({
            where: {title: 
            {
                [Op.like] : `%${title}%`
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

PilController.getPilsByType = async (req, res) => {
    try {
        let type = req.params.type
        let resp = await Pil.findAll({
            where: {type: 
            {
                [Op.like] : `%${type}%`
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

PilController.postNewPil = async (req, res) => {
    try {
        let data = req.body
        let resp = await Pil.create({
            title: data.title,
            text: data.text,
            creation_date: data.creation_date,
            userMail: data.userMail,
            img: data.img
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

PilController.deletePilById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Pil.destroy({
            where: { id_pil: id }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el Pil correctamente")
        } else {
            res.status(400).send("No se ha podido eliminar el Pil")
        }

    } catch (err) {
        res.send(err)
    }
}

module.exports = PilController