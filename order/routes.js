const router = require("express").Router();
const OrderController = require("./controllers/OrderController");

// Middleware Imports
const isAuthenticatedMiddleware = require("./../common/middlewares/IsAuthenticatedMiddleware");

router.get(
    "/all",
    OrderController.getAllOrders
  );

router.post(
  "/", OrderController.createOrder
);

router.post(
    "/addOrderProduct", [isAuthenticatedMiddleware.check],
    OrderController.addOrderProduct
  );

// router.get(
//     "/", [isAuthenticatedMiddleware.check],
//     CartController.getAllProducts
//   );

// router.post(
//   "/deleteCartProduct", [isAuthenticatedMiddleware.check],
//   CartController.deleteCartProduct
// );

// router.post(
//   "/addCartProduct", [isAuthenticatedMiddleware.check],
//   CartController.addCartProduct
// );

module.exports = router;