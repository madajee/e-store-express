const Express = require("express");
const app = Express();
const cors = require("cors");
const { Sequelize } = require("sequelize");

const { port, ff } = require("./config");
const PORT = process.env.PORT || port;

// Express Routes Import
const AuthorizationRoutes = require("./authorization/routes");
const UserRoutes = require("./users/routes");
const ProductRoutes = require("./products/routes");
const CartRoutes = require("./cart/routes");
const CartItemRoutes = require("./cart/cartitemroutes");
const AmqpRoutes = require("./common/amqpqueues/amqproutes");
const OrderRoutes = require("./order/routes");
const OrderItemRoutes = require("./order/orderitemroutes");

// Sequelize model imports
//const UserModel = require("./common/models/User");

app.use(cors());

// Middleware that parses the body payloads as JSON to be consumed next set
// of middlewares and controllers.
app.use(Express.json());
app.use('/', Express.static(__dirname + '/app'));

// const sequelize = new Sequelize({
//   dialect: "sqlite",
//   storage: "./storage/data.db", // Path to the file that will store the SQLite DB.
// });

// Initialising the Model on sequelize
// UserModel.initialise(sequelize);

const db = require("./common/models");
db.sequelize.sync({force: true})
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  const amqpqueues = require("./common/amqpqueues");
  if (ff.amqpqueues) {
    amqpqueues.connectQueue();
    app.use("/testq", AmqpRoutes);
  }
  require("./common/routes/turorial.routes")(app);
  app.use("/", AuthorizationRoutes);
  app.use("/user", UserRoutes);
  app.use("/product", ProductRoutes);
  app.use("/cart", CartRoutes);
  app.use("/cartitem", CartItemRoutes);
  app.use("/order", OrderRoutes);
  app.use("/orderitem", OrderItemRoutes);
 

  app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });


// Syncing the models that are defined on sequelize with the tables that alredy exists
// in the database. It creates models as tables that do not exist in the DB.
// sequelize
//   .sync()
//   .then(() => {
//     console.log("Sequelize Initialised!!");

//     // Attaching the Authentication and User Routes to the app.
//     app.use("/", AuthorizationRoutes);
//     app.use("/user", UserRoutes);

//     app.listen(PORT, () => {
//       console.log("Server Listening on PORT:", port);
//     });
//   })
//   .catch((err) => {
//     console.error("Sequelize Initialisation threw an error:", err);
//   });
