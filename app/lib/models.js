import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true }
);

const partsSchema = new mongoose.Schema(
  {
    id: {
      type: String,
    },
    partName: {
      type: String,
      required: true,
    },
    partNum: {
      type: String,
      required: true,
      unique: true,
    },
    stockPart: {
      type: Number,
      required: true,
      min: 0,
    },
    minStock: {
      type: Number,
      required: true,
      min: 0,
    },
    unit: {
      type: String,
    },
    salePrice: {
      type: Number,
      default: false,
      min: 0,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Part =
  mongoose.models.Parts || mongoose.model("Parts", partsSchema);
