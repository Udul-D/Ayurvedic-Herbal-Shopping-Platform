import mongoose from "mongoose";
const { Schema, model } = mongoose;

const ReviewSchema = new Schema({
    
  rating: {
    type: String,
   
  },
     discription: {
        type: Number,
       
      },
      
      // price: {
      //   type: Number,
       
      // },
      // productImage:{
      //   type: String

      // }
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

export default model('Review', ReviewSchema); 