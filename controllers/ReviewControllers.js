const Review = require('../models/review')
const User = require('../models/user')
var sequelize = require('../db/db')
const jsonwebtoken = require("jsonwebtoken");

const ReviewController = {};

ReviewController.postNewReview = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        let resp = await Review.create({
            text: data.text,
            rating: data.rating,
            creation_date: data.creation_date,
            userMail: mail,
            serviceIdService: data.serviceIdService
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

ReviewController.deleteReviewById = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail

        let id = req.params.id
        let user = await Review.findOne({
            where: { id_review: id }
        })
        if (user.userMail === mail) {
            let resp = await Review.destroy({
                where: { id_review: id }
            })
            console.log(resp)
            if (resp == 1) {
                res.send("Se ha eliminado el review correctamente")
            } else {
                res.status(400).send("No se ha podido eliminar el review")
            }
        } else {
            console.log("falloo")
        }


    } catch (err) {
        res.send(err)
    }
}

module.exports = ReviewController