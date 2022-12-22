const Order = require('../models/Order')
const OrderService = require('../models/OrderService')

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
        let resp = await Order.create({
            userMail: data.userMail,
            order_date: data.order_date
        })
        resp.userMail = data.userMail;
        await resp.save({ fields: ['userMail'] })
        console.log(resp)
        res.send(resp)
    } catch (error) {
        res.send(error)
    }

}

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