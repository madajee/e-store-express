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
    }
}