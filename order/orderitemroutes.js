const router = require("express").Router();
const OrderItemController = require("./controllers/OrderItemController");

router.get(
    "/all",
    OrderItemController.getAllOrderItems
  );

module.exports = router;