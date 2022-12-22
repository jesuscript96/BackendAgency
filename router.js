const express = require("express");
const router = express.Router();

const UserRoutes = require("./views/UserRoutes");
const ServiceRoutes = require("./views/ServiceRoutes");
const OrderRoutes = require("./views/OrderRoutes");

router.use("/users", UserRoutes);
router.use("/services", ServiceRoutes);
router.use("/orders", OrderRoutes);


module.exports = router