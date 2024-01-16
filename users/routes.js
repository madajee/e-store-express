const router = require("express").Router();

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");

// Controller Imports
const UserController = require("./controllers/UserController");


const { roles } = require("../config");

router.get("/", [isAuthenticatedMiddleware.check], UserController.getUser);

router.patch(
  "/",
  [
    isAuthenticatedMiddleware.check,
  ],
  UserController.updateUser
);

router.get(
  "/all",
  [isAuthenticatedMiddleware.check],
  UserController.getAllUsers
);

router.patch(
  "/change-role/:userId",
  [
    isAuthenticatedMiddleware.check
  ],
  UserController.changeRole
);

router.delete(
  "/:userId",
  [isAuthenticatedMiddleware.check],
  UserController.deleteUser
);

module.exports = router;
