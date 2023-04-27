import mongoose from "mongoose";
const { Schema, model } = mongoose;

const shippingSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    rrequired: true
  },   
  zip: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
});

export default model('Shipping', shippingSchema); 