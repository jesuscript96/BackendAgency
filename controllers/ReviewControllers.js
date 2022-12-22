const Review = require('../models/review')

const ReviewController = {};

ReviewController.postNewReview = async (req, res) => {
    try {
        let data = req.body
        let resp = await Review.create({
            text: data.text,
            rating: data.rating,
            creation_date: data.creation_date,
            userMail: data.userMail,
            serviceIdService: data.serviceIdService
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}

ReviewController.deleteReviewById = async (req, res) => {
    try {
        let id = req.params.id
        let resp = await Review.destroy({
            where: { id_review: id }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el review correctamente")
        } else {
            res.status(400).send("No se ha podido eliminar el review")
        }

    } catch (err) {
        res.send(err)
    }
}

module.exports = ReviewController