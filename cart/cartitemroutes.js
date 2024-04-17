const router = require("express").Router();
const CartItemController = require("./controllers/CartItemController");

router.get(
    "/all",
    CartItemController.getAllCartItems
  );

router.post(
  "/", CartItemController.createCartItem
);

module.exports = router;