const router = require("express").Router();
const ProductController = require("./controllers/ProductController");

router.get(
    "/all",
    ProductController.getAllProducts
  );

router.post(
  "/", ProductController.createProduct
);

router.delete(
  "/:productId", ProductController.deleteProduct
);
  module.exports = router;