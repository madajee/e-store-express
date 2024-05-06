const dbConfig = require("../../config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
// });

// const sequelize = new Sequelize(dbConfig.dockerize.DB, dbConfig.dockerize.USER, dbConfig.dockerize.PASSWORD, {
//   host: dbConfig.dockerize.HOST,
//   dialect: dbConfig.dialect,
//   pool: {
//       max: dbConfig.pool.max,
//       min: dbConfig.pool.min,
//       acquire: dbConfig.pool.acquire,
//       idle: dbConfig.pool.idle
//   }
// });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
const UserModel = require("./User.js");
const ProductModel = require("./Product.js");
const CartModel = require("./Cart.js");
const CartItemModel = require("./CartItem.js");
const OrderModel = require("./Order.js");
const OrderItemModel = require("./OrderItem.js");
const User = UserModel.initialise(sequelize);
const Product = ProductModel.initialise(sequelize);
const Cart = CartModel.initialise(sequelize);
const CartItem = CartItemModel.initialise(sequelize);
const Order = OrderModel.initialise(sequelize);
const OrderItem = OrderItemModel.initialise(sequelize);
User.hasOne(Cart);
Cart.belongsTo(User);
Cart.belongsToMany(Product, {through: CartItem});
Product.belongsToMany(Cart, {through: CartItem});
ProductModel.initialise(sequelize);
User.hasOne(Order);
Order.belongsTo(User);
Order.belongsToMany(Product, {through: OrderItem});
Product.belongsToMany(Order, {through: OrderItem});

module.exports = db;
