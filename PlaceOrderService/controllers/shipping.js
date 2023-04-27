// import Category from "../models/category.js";
import Shipping from "../models/shipping.js";
const shippingController = {
//add category 
    createShipping: async (req, res) => {
        try {
            const { name, address, zip,mobile } = req.body;
            //check parent ID was existing
            // const ExistingParent = await Category.findOne({ _id: parent });
            if (!name || !address || !mobile|| !zip) 
                return res.status(400).json({
                    message: "Fill all inputs",
                });

            const newShipping = new Shipping({
                name, address, zip,mobile
            });
            await newShipping.save();
            res.json({
                message: "Category create success",
                data: newShipping,
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },
// get main category in the data base
    getShippings: async (req, res) => {
        try {
        const shippings = await Shipping.find();
        res.json({ message: "Products fetch success", data: shippings });
        } catch (err) {
        return res.status(500).json({ message: err.message });
        }
    },


//get one category in the data base
    // getOneShipping: async (req, res) => {
    //     const id = req.params.id;
    //     try {
    //         const shipping = await Shipping.findOne({ _id: id });
    //         res.json({ message: "Shipping fetch success", data: shipping });
    //     } catch (err) {
    //         return res.status(500).json({ message: err.message });
    //     }
    // },
  
    getOneShipping: async (req, res) => {
        const id = req.params.id;
        try {
            const shipping = await Shipping.findOne({ _id: id });
            res.json({ message: "Product fetch success", data: shipping });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

//update category details
    updateShipping: async (req, res) => {
        const id = req.params.id;
        const { name, address, zip,mobile } = req.body;

        try {
              await Shipping.findOneAndUpdate(
                { _id: id },
                {  name, address, zip,mobile  }
            );
            res.json({
                message: "Forum post update success",
                data: {  name, address, zip,mobile  },
            });
        } catch (err) {
            return res.status(500).json({ message: err.message });
        }
    },

    deleteShipping: async (req, res) => {
        try {
          const id = req.params.id;
    
          await Shipping.findByIdAndDelete({ _id: id });
          res.json({ message: "delete success !" });
        } catch (err) {
          return res.status(500).json({ message: err.message });
        }
      },





};





export default shippingController;