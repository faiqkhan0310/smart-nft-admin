/*eslint-disable*/

import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Classes",
    required: [true, "Class is required!"],
    trim: true,
  },
  name: {
    type: String,
    required: [true, "Name is required!"],
    trim: true,
  },
  desc: {
    type: String,
    required: [true, "Desc is required!"],
    trim: true,
  },
  price: {
    type: Number,
    required: [true, "Price is required!"],
    trim: true,
  },
  list: {
    type: Boolean,
    default: false,
  },
  attributes: {
    type: [],
    trim: true,
  },

  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Product ||
  mongoose.model("Product", classSchema);
