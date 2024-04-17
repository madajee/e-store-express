const CartItemModel = require("../../common/models/CartItem");

module.exports = { 
    getAllCartItems: (req, res) => { 
        const { query: filters } = req;

        CartItemModel.findAllCartItems(filters)
        .then((cartitems) => {
            return res.status(200).json({
              status: true,
              data: cartitems,
            });
          })
          .catch((err) => {
            return res.status(500).json({
              status: false,
              error: err,
            });
          });
    },
    createCartItem: (req, res) => {
        const { body } = req;
    
        CartItemModel.createCartItem(body)
          .then((cartitem) => {
            return res.status(200).json({
              status: true,
              data: cartitem.toJSON(),
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