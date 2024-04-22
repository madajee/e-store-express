const { DataTypes } = require("sequelize");

const ProductModel = {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  module.exports = { 
    initialise: (sequelize) => {
        this.model = sequelize.define("product", ProductModel);
        const product = this.model;
       return product;
    },
    findAllProducts: (query) => {
      return this.model.findAll({
        where: query
      });
    },
    createProduct: (product) => {
      return this.model.create(product);
    },
    findProduct: (query) => {
      return this.model.findOne({
        where: query,
      });
    },
  }