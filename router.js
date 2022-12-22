const express = require("express");
const router = express.Router();

const UserRoutes = require("./views/UserRoutes");
const ServiceRoutes = require("./views/ServiceRoutes");
const OrderRoutes = require("./views/OrderRoutes");
const ReviewRoutes = require("./views/ReviewRoutes");
const PilRoutes = require("./views/PilRoutes");
const CompanyRoutes = require("./views/CompanyRoutes");

router.use("/users", UserRoutes);
router.use("/services", ServiceRoutes);
router.use("/orders", OrderRoutes);
router.use("/reviews", ReviewRoutes);
router.use("/pils", PilRoutes);
router.use("/companies", CompanyRoutes);


module.exports = router