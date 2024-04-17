const { DataTypes } = require("sequelize");
const CartModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    }
  };

  module.exports = {
    initialise: (sequelize) => {
      this.model = sequelize.define("cart", CartModel);
      const cart = this.model;
      return cart;
    },
    findAllCart: (query) => {
      return this.model.findAll({
        where: query
      });
    },
    createCart: (cart) => {
      return this.model.create(cart);
    }
  };
  