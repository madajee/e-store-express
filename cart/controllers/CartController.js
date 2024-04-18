const CartModel = require("../../common/models/Cart");
const UserModel = require("./../../common/models/User");

module.exports = { 
    getAllCarts: (req, res) => { 
        const { query: filters } = req;

        CartModel.findAllCart(filters)
        .then((carts) => {
            return res.status(200).json({
              status: true,
              data: carts,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
    },
    createCart: (req, res) => {
        const { body } = req;
    
        CartModel.createCart(body)
          .then((cart) => {
            return res.status(200).json({
              status: true,
              data: cart.toJSON(),
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
      },
      getAllProducts: (req, res) => { 
        const {
            user: { userId },
        } = req;
        
        UserModel.findUser({ id: userId })
            .then((user) => {
                user.getCart()
                .then(cart => {
                    cart.getProducts()
                        .then(products => {
                            let fetchedproducts = {products:[]};
                            products.map(product => {
                                fetchedproducts.products.push(product);
                            })
                            //console.log(fetchedproducts);
                            return res.status(200).json({
                                status: true,
                                data: fetchedproducts
                            });
                        })
                        .catch((err) => {
                            return res.status(500).json({
                                status: false,
                                error: err,
                            });
                            });
                })
                .catch((err) => {
                    return res.status(500).json({
                        status: false,
                        error: err,
                    });
                    });
           
            })
            .catch((err) => {
            return res.status(500).json({
                status: false,
                error: err,
            });
            });
    },
    deleteCartProduct: (req, res) => {
      const productId = req.body.productId
      //console.log(productId);
      const {
        user: { userId },
      } = req;
      UserModel.findUser({ id: userId })
      .then((user) => {
        //console.log(user);
        user.getCart()
        .then(cart => {
          cart.getProducts({id: productId})
          .then(products => {
            console.log(products[0]);
            const product = products[0];
            product.cartitem.destroy()
            .then((deletedcartitem)=> {
              return res.status(200).json({
                status: true,
                data: deletedcartitem.toJSON()
              });
            })
            .catch((err) => {
              return res.status(500).json({
                  status: false,
                  error: err,
              });
              });

          })
          .catch((err) => {
            return res.status(500).json({
                status: false,
                error: err,
            });
            });
        })
        .catch((err) => {
          return res.status(500).json({
              status: false,
              error: err,
          });
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