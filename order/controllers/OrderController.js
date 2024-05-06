const OrderModel = require("../../common/models/Order");
const UserModel = require("./../../common/models/User");
const ProductModel = require("./../../common/models/Product");

module.exports = { 
    getAllOrders: (req, res) => { 
        const { query: filters } = req;

        OrderModel.findAllOrder(filters)
        .then((orders) => {
            return res.status(200).json({
              status: true,
              data: orders,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
    },
    createOrder: (req, res) => {
        const { body } = req;
    
        OrderModel.createOrder(body)
          .then((order) => {
            return res.status(200).json({
              status: true,
              data: order.toJSON(),
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
      },
    addOrderProduct: (req, res) => {
        const productId = req.body.productId
        const quantity = req.body.quantity
        let fetchedCart;
        //console.log(productId);
        const {
          user: { userId },
        } = req;
        UserModel.findUser({ id: userId })
        .then((user) => {
            user.getOrder()
            .then((order) => {
                ProductModel.findProduct({ id: productId })
                .then((product) => {
                    console.log(product);
                    return res.status(200).json({
                        status: true,
                        data: order.toJSON()
                      });
                })
                .catch((err) => {
                    return res.status(500).json({
                        status: false,
                        error: err,
                    });
                })
            })
            .catch((err) => {
                return res.status(500).json({
                    status: false,
                    error: err,
                });
                })
        })
        .catch((err) => {
            return res.status(500).json({
                status: false,
                error: err,
            });
            });
    }
}