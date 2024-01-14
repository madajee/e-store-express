const router = require("express").Router();

// Controller Imports
const AuthorizationController = require("./controllers/AuthorizationController");
router.get(
    "/",
    AuthorizationController.register
  );

module.exports = router;