const User = require('../models/user')
const Order = require('../models/order')
const OrderService = require('../models/OrderService')
var sequelize = require('../db/db')
const jsonwebtoken = require("jsonwebtoken");

const UserController = {};

UserController.getAllUsers = async (req, res) => {
    try {
        let resp = await User.findAll({
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

UserController.getUserById = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        let resp = await User.findOne({
            where: { mail: mail }
        })
            .then(resp => {
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

// UserController.postNewUser = async (req, res) => {
//     try {
//         let data = req.body
//         let resp = await User.create({
//             mail: data.mail,
//             password: data.password,
//             name: data.name,
//             phone: data.phone
//         })

//         res.send(resp)
//     } catch (error) {
//         res.send(error)
//     }
// }

UserController.updateUserNameById = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        let resp = await User.update(
            {
                name: data.name

            },
            {
                where: { mail: mail }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

UserController.updateUserClientById = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        let resp = await User.update(
            {
                client: true,

            },
            {
                where: { mail: mail }
            }
        )

        res.send(resp)

    } catch (err) {
        res.send(err)
    }
}

UserController.deleteUserById = async (req, res) => {
    try {
        let mail = req.params.mail
        let resp = await User.destroy({
            where: { mail: mail }
        })

        if (resp == 1) {
            res.send("Se ha eliminado el perfil correctamente")
        } else {
            res.status(400).send("No se ha podido eliminar el registro")
        }

    } catch (err) {
        res.send(err)
    }
}

UserController.getOrdersFromUser = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        const [orders, metadata] = await sequelize.query(`select * from orders join orders_services on orders.id_order = orders_services.orderIdOrder join services on orders_services.serviceIdService = services.id_service where userMail = "${mail}"`);
        if (!orders) {
            res.status(400).send('orders not found')
            return;
        }
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}

UserController.getReviewsFromUser = async (req, res) => {
    try {
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        const [orders, metadata] = await sequelize.query(`select * from reviews join services on reviews.serviceIdService = services.id_service where userMail = "${mail}"`);
        if (!orders) {
            res.status(400).send('reviews not found')
            return;
        }
        res.status(200).json(orders)
    } catch (error) {
        res.status(500).send(error)
        console.log(error)
    }
}


module.exports = UserController