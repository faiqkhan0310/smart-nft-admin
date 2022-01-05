/*eslint-disable*/

import { Sequelize, DataTypes } from "sequelize";
import db from "../utils/dbConnect";
import Product from "../models/Product.seq";
import ClassAttribute from "../models/class_attributes";

const Class = db.define("class", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Name is empty" },
    },
  },

  type: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "Type is empty." },
    },
  },
});

Class.hasMany(Product);
Product.belongsTo(Class);

Class.hasMany(ClassAttribute);
ClassAttribute.belongsTo(Class);

db.sync({ alter: true })
  .then(() => {})
  .catch((err) => console.log(err));

module.exports = Class;
