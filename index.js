const Express = require("express");
const app = Express();
const cors = require("cors");
const { Sequelize } = require("sequelize");

const { port } = require("./config");
const PORT = process.env.PORT || port;

// Express Routes Import
const AuthorizationRoutes = require("./authorization/routes");
const UserRoutes = require("./users/routes");

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
db.sequelize.sync()
  .then(() => {
    console.log("Synced db.");
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });
  require("./common/routes/turorial.routes")(app);
  app.use("/", AuthorizationRoutes);
  app.use("/user", UserRoutes);

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
