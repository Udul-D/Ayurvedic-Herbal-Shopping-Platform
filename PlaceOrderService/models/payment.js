import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
    
  name: {
    type: String,
   
  },
     quantity: {
        type: Number,
       
      },
      price: {
        type: Number,
       
      },
      productImage:{
        type: String

      }
      // color: {
      //   type: String,
      // },
      // size: {
      //   type: String,
      // },
      // categories:{
      //   type: mongoose.Schema.Types.ObjectId,
      //   ref: 'Category'
      // },
  // gender: {
  //   type: String
  // },
  // category: {
  //   type: String
  // },
  // productImage:{
  //       type: String
  //     },
  // description: {
  //       type: String
  //     }
});

export default model('Payment', PaymentSchema); 