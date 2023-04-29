import Payment from "../models/review.js";
import Review from "../models/review.js";
import StripeService from "../util/stripe-service.js";
const reviewController = {
	// add item to the data base
	createReview: async (req, res) => {
		try {
			const { rating, description } = req.body;
			if (!rating || !description)
				return res
					.status(400)
					.json({ msg: "Please fill in all fields." });

			const newReview = new Review({
				rating,
				description,
			});
			console.log(newReview);
			await newReview.save();
			console.log(req.body);
			// const params = {
			//   payment_method_types: ["card"],
			//   line_items: req.body.cartItems.map((item) => {
			//     console.log("gggggggg",item)
			//     return {
			//       price_data: {
			//         currency: "usd",
			//         product_data: {
			//           name: item.name,
			//         },
			//         unit_amount: Math.round(item.price * 100),
			//       },
			//       quantity: item.qty,
			//     };
			//   }),
			//   mode: "payment",
			//   success_url: `http://localhost:3000/addPayment`,
			//   cancel_url: `http://localhost:3000/addPayment`,
			//   currency: "usd",
			// };
			// const session = await StripeService.checkout.sessions.create(params);
			// res.status(200).json({
			//   url: session.url,

			// });

			res.json({
				message: "Rating Added success",
				data: newReview,
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
	// get all products from the database
	getReviews: async (req, res) => {
		try {
			const reviews = await Review.find();
			res.json({ message: "Review fetch success", data: reviews });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
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
	getOneReview: async (req, res) => {
		const id = req.params.id;
		try {
			const review = await Review.findOne({ _id: id });
			res.json({ message: "Review fetch success", data: review });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	updateReview: async (req, res) => {
		try {
			const id = req.params.id;
			const { rating, discription } = req.body;

			await Review.findOneAndUpdate(
				{ _id: id },
				{ rating, discription },
			);
			res.json({
				message: "Review update success",
				data: { rating, discription },
			});
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},

	deleteReview: async (req, res) => {
		try {
			const id = req.params.id;

			await Review.findByIdAndDelete({ _id: id });
			res.json({ message: "delete success !" });
		} catch (err) {
			return res.status(500).json({ message: err.message });
		}
	},
};
export default reviewController;
