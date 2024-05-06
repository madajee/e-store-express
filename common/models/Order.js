const { DataTypes } = require("sequelize");
const OrderModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  };

  module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("order", OrderModel);
      const order = this.model;
      return order;
    },
    findAllOrder: (query) => {
      return this.model.findAll({
        where: query
      });
    },
    createOrder: (order) => {
      return this.model.create(order);
    }
  };