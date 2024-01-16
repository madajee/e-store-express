const router = require("express").Router();

// Controller Imports
const AuthorizationController = require("./controllers/AuthorizationController");
router.get(
    "/",
    AuthorizationController.register
  );

router.post(
  "/signup",
  AuthorizationController.register
);

router.post(
  "/login",
  AuthorizationController.login
);


module.exports = router;