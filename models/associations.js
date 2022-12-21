const User = require("./user")
const Company = require("./company")
const Order = require("./order")
const OrderService = require("./OrderService")
const Pil = require("./pil")
const Review = require("./review")
const Service = require("./service")

User.hasMany(Order);
Order.belongsTo(User);

User.hasMany(Pil);
Pil.belongsTo(User);

User.hasMany(Company);
Company.belongsTo(User);

User.hasMany(Review);
Review.belongsTo(User);

Service.hasMany(Review);
Review.belongsTo(Service);

OrderService.hasMany(Service);
Service.belongsTo(OrderService);

OrderService.hasMany(Order);
Order.belongsTo(OrderService);




console.log('associated');