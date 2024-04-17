const router = require("express").Router();
const CartController = require("./controllers/CartController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");

router.get(
    "/all",
    CartController.getAllCarts
  );

router.post(
  "/", CartController.createCart
);

router.get(
    "/", [isAuthenticatedMiddleware.check],
    CartController.getAllProducts
  );

  module.exports = router;