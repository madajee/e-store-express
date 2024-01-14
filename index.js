const Express = require("express");
const app = Express();

const { port } = require("./config");
const PORT = process.env.PORT || port;

// Express Routes Import
const AuthorizationRoutes = require("./authorization/routes");

// Middleware that parses the body payloads as JSON to be consumed next set
// of middlewares and controllers.
app.use(Express.json());

    // Attaching the Authentication and User Routes to the app.
    app.use("/", AuthorizationRoutes);

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", port);
  });