
import Payment from "../models/payment.js";
import StripeService from "../util/stripe-service.js"
const paymentController={

    // add item to the data base
    createPayment: async (req, res) => {
        try {
          console.log(req.body.cartItems);
          const { name,quantity, price, productImage} = req.body;
            // if (!name || !quantity || !price)
            // return res.status(400).json({ msg: "Please fill in all fields." });

            const newPayment = new Payment({
              quantity, price,name,
            });
            console.log(newPayment)
            await newPayment.save();
            console.log(req.body)
            const params = {
              payment_method_types: ["card"],
              line_items: req.body.cartItems.map((item) => {
                console.log("gggggggg",item)
                return {
                  price_data: {
                    currency: "usd",
                    product_data: {
                      name: item.name,
                    },
                    unit_amount: Math.round(item.price * 100),
                  },
                  quantity: item.qty,
                };
              }),
              mode: "payment",
              success_url: `http://localhost:3000/addPayment`,
              cancel_url: `http://localhost:3000/addPayment`,
              currency: "usd",
            };
            const session = await StripeService.checkout.sessions.create(params);
            res.status(200).json({
              url: session.url,
           
            });

            // res.json({
            //     message:"Payent Added success",
            //     data:newPayment,
            // });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
  // get all products from the database
  // getProducts: async (req, res) => {
  //   try {
  //     const products = await Product.find();
  //     res.json({ message: "Products fetch success", data: products });
  //   } catch (err) {
  //     return res.status(500).json({ message: err.message });
  //   }
  // },
  // get all products from the database
  // getOneProduct: async (req, res) => {
  //   const id = req.params.id;
  //   try {
  //     const product = await Product.findOne({ _id: id });
  //     res.json({ message: "Product fetch success", data: product });
  //   } catch (err) {
  //     return res.status(500).json({ message: err.message });
  //   }
  // },

  //   getCategoryProduct: async (req, res) => {
  //     const { product } = req.body;
  //       try {

  //           const categoryProduct = await Product.find({product:product});
  //           res.json({ message: " Sub Category file fetch success", data: categoryProduct});
  //       } catch (err) {
  //           return res.status(500).json({ message: err.message });
  //       }
  //   },
    // get one item in the data base
    // getOneProduct: async (req, res) => {
    //     const id = req.params.id;
    //     try {
    //         const product = await Product.findOne({ _id: id });
    //         res.json({ message: "Product fetch success", data: product });
    //     } catch (err) {
    //         return res.status(500).json({ message: err.message });
    //     }
    // },
    // updateProduct: async (req, res) => {
    //     try {
    //       const id = req.params.id;
    //       const {name, price, color,size,categories,gender,productImage,description}= req.body;
    
    //       await Product.findOneAndUpdate(
    //         { _id: id },
    //         { name, price, color, size, categories, gender, productImage,description}
    //       );
    //       res.json({
    //         message: "Product update success",
    //         data: { name, price, color, size, categories, gender, productImage,description},
    //       });
    //     } catch (err) {
    //       return res.status(500).json({ message: err.message });
    //     }
    //   },
      // deleteProduct: async (req, res) => {
      //   try {
      //     const id = req.params.id;
    
      //     await Product.findByIdAndDelete({ _id: id });
      //     res.json({ message: "delete success !" });
      //   } catch (err) {
      //     return res.status(500).json({ message: err.message });
      //   }
      // },


};
export default paymentController;