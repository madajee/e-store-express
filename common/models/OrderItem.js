const { DataTypes } = require("sequelize");
const OrderItemModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
        type: DataTypes.INTEGER
      }
  };

  module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("orderitem", OrderItemModel);
      const orderitem = this.model;
      return orderitem;
    },
    findAllOrderItems: (query) => {
        return this.model.findAll({
          where: query
        });
      },
      createOrderItem: (orderitem) => {
        return this.model.create(orderitem);
      },
  };