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
        let fetchedOrder;
        //console.log(productId);
        const {
          user: { userId },
        } = req;
        UserModel.findUser({ id: userId })
        .then((user) => {
            user.getOrder()
            .then((order) => {
                fetchedOrder= order;
                // order.getProducts({id: productId})
                // .then((products) => {
                //   console.log('In existing product' + JSON.stringify(products[0]));
                //   let product;
                //   if (products.length > 0) {
                //     product = products[0];
                //   }
                //   if (product) {
                //     console.log('In existing product');
                //     let newqty = parseInt(quantity, 10) + product.orderitem.quantity;
                //     console.log('new quantitiy' + newqty);
                //     fetchedOrder.addProduct(product.toJSON().id, { through: {quantity: newqty}})
                //     .then((result) => {
                //       console.log('in update' + result);
                //     })
                //     .catch()
                //     return res.status(200).json({
                //       data: user.toJSON(),
                //       status: true
                //     });
                //   }
                // })
                // .catch((err) => {
                //   return res.status(500).json({
                //     status: false,
                //     error: err,
                //   });
                // })
                ProductModel.findProduct({ id: productId })
                .then((product)=>{
                  let newqty = parseInt(quantity, 10);
                  fetchedOrder.addProduct(product.toJSON().id, { through: {quantity: newqty}})
                  .then((result) => {
                    console.log('in add' + result);
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