const { DataTypes } = require("sequelize");
const CartItemModel = {
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
      this.model = sequelize.define("cartitem", CartItemModel);
      const cartitem = this.model;
      return cartitem;
    },
    findAllCartItems: (query) => {
        return this.model.findAll({
          where: query
        });
      },
      createCartItem: (cartitem) => {
        return this.model.create(cartitem);
      },
  };