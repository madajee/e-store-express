const router = require("express").Router();

// Controller Imports
const AuthorizationController = require("./controllers/AuthorizationController");

// Middleware Imports
const SchemaValidationMiddleware = require("../common/middlewares/SchemaValidationMiddleware");

// JSON Schema Imports for payload verification
const loginPayload = require("./schemas/loginPayload");

router.get(
    "/",
    AuthorizationController.ping
  );

router.post(
  "/signup",
  AuthorizationController.register
);

router.post(
  "/login",
  [SchemaValidationMiddleware.verify(loginPayload)],
  AuthorizationController.login
);


module.exports = router;