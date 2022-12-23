const Order = require('../models/Order')
const User = require('../models/User')
const OrderService = require('../models/OrderService')
var sequelize = require('../db/db')
const jsonwebtoken = require("jsonwebtoken");

const OrderController = {};

OrderController.getAllOrders = async (req, res) => {
    try {
        let resp = await Order.findAll({
            attributes: ['id_order', 'order_date', 'userMail']
        })
            .then(resp => {
                console.log(resp)
                res.send(resp)
            })
    } catch (err) {
        res.send(err)
    }
}

OrderController.postNewOrder = async (req, res) => {
    try {
        let data = req.body
        const { authorization } = req.headers;
        const [strategy, jwt] = authorization.split(" ");
        const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
        console.log(payload)
        let mail = payload.mail
        const [orders, metadata] = await sequelize.query(`INSERT INTO orders (order_date, userMail)
        VALUES ("${data.order_date}", "${mail}")`);let resp = await User.update(
            {
                client: true,

            },
            {
                where: { mail: mail }
            }
        )
        res.status(200).json(orders)
    } catch (error) {
        res.send(error)
    }

}

// OrderController.postNewOrder = async (req, res) => {
//     try {
//         let data = req.body
//         const { authorization } = req.headers;
//         const [strategy, jwt] = authorization.split(" ");
//         const payload = jsonwebtoken.verify(jwt, process.env.JWT_SECRET)
//         console.log(payload)
//         let mail = payload.mail
//         let resp = await Order.create({
//             userMail: mail,
//             order_date: data.order_date
//         })
//         console.log(userMail)
//         resp.userMail = mail;
//         await resp.save({ fields: ['userMail'] })
//         console.log(resp)
//         res.send(resp)
//     } catch (error) {
//         res.send(error)
//     }

// }

OrderController.addServiceToOrder = async (req, res) => {
    try {
        let data = req.body
        let resp = await OrderService.create({
            orderIdOrder: data.orderIdOrder,
            serviceIdService: data.serviceIdService
        })

        res.send(resp)
    } catch (error) {
        res.send(error)
    }
}


module.exports = OrderController