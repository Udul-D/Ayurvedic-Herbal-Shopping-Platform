const mongoose = require("mongoose");

const user = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		phoneNumber: { type: String, required: true },
		nicType: { type: String, required: true, unique: true },
		nic: { type: String, required: true },
		country: { type: String, required: true },
		dob: { type: String, required: true },
		gender: { type: String, required: true },
		password: { type: String, required: true },
		isForiegner: { type: Boolean, default: true },
	},
	{ timestamps: true },
);

module.exports = mongoose.model("users", user);
