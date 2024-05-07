const OrderItemModel = require("../../common/models/OrderItem");

module.exports = { 
    getAllOrderItems: (req, res) => { 
        const { query: filters } = req;

        OrderItemModel.findAllOrderItems(filters)
        .then((orderitems) => {
            return res.status(200).json({
              status: true,
              data: orderitems,
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