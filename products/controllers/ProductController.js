const ProductModel = require("../../common/models/Product");

module.exports = { 
    getAllProducts: (req, res) => { 
        const { query: filters } = req;

        ProductModel.findAllProducts(filters)
        .then((products) => {
            return res.status(200).json({
              status: true,
              data: products,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
    },
    createProduct: (req, res) => {
        const { body } = req;
    
        ProductModel.createProduct(body)
          .then((product) => {
            return res.status(200).json({
              status: true,
              data: product.toJSON(),
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
      },
    deleteProduct: (req, res) => {  
      const {
        params: { productId },
      } = req;
      ProductModel.deleteProduct({id: productId})
      .then((numberOfEntriesDeleted) => {
        return res.status(200).json({
          status: true,
          data: {
            numberOfProductsDeleted: numberOfEntriesDeleted
          },
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
    },
    updateProduct: (req, res) => { 
      const {
        params: { productId },
        body: payload,
      } = req;

      if (!Object.keys(payload).length) {
        return res.status(400).json({
          status: false,
          error: {
            message: "Body is empty, hence can not update the user.",
          },
        });
      }
      ProductModel.updateProduct({ id: productId }, payload)
      .then(() => {
        return ProductModel.findProduct({ id: productId });
      })
      .then((product) => {
        return res.status(200).json({
          status: true,
          data: product.toJSON(),
        });
      })
      .catch((err) => {
        return res.status(500).json({
          status: false,
          error: err,
        });
      });
  },
}