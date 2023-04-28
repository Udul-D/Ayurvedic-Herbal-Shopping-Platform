const bcryptjs = require("bcryptjs");
const User = require("../../models/user");
const JWT = require("jsonwebtoken");
const LocalStorage = require("node-localstorage").LocalStorage;
var localstorage = new LocalStorage("./scratch");

const register = async (req, res) => {
	// check whether the user already exists
	const exist = await User.findOne({
		email: req.body.email,
	});

	if (exist) {
		return res.status(400).json({ message: "User Already Exists !" });
	} else {
		// encrypt password
		const salt = await bcryptjs.genSalt(5);
		const hashPassword = await bcryptjs.hash(req.body.password, salt);

		const newUser = new User({
			firstname: req.body.firstname,
			lastname: req.body.lastname,
			email: req.body.email,
			phoneNumber: req.body.phoneNumber,
			nicType: req.body.nicType,
			nic: req.body.nic,
			dob: req.body.dob,
			gender: req.body.gender,
			address: req.body.address,
			password: hashPassword,
		});

		if (
			req.body.firstname === "" ||
			req.body.lastname === "" ||
			req.body.email === "" ||
			req.body.mobile === "" ||
			req.body.nicType === "" ||
			req.body.nic === "" ||
			req.body.dob === "" ||
			req.body.gender === "" ||
			req.body.address === "" ||
			req.body.password === ""
		) {
			return res
				.status(400)
				.json({ message: "All the fields are required !" });
		} else {
			try {
				newUser.save();
				return res.status(200).json({
					user: newUser,
					message: "User Registration Successfull !",
				});
			} catch (error) {
				return res.status(400).json({ message: error });
			}
		}
	}
};

const login = async (req, res) => {
	const userData = await User.findOne({ email: req.body.email });

	if (!userData) {
		return res.status(400).send({
			Login: false,
			message: "Invalid email address",
		});
	} else {
		// compare encrypted and entered passwords
		const password = await bcryptjs.compare(
			req.body.password,
			userData.password,
		);

		// validating the password
		if (!password) {
			return res.status(400).send({
				Login: false,
				message: "Incorrect Password !",
			});
		} else {
			const isActive = userData.isActive;

			if (isActive) {
				const id = userData.id;
				const token = JWT.sign({ id }, process.env.SECRETE, {
					expiresIn: process.env.EXPIREIN,
				});

				return res.status(200).json({
					Login: true,
					Role: userData.role,
					message: "Login Successfull",
					token,
					userData,
				});
			} else {
				return res.status(400).send({
					Login: false,
					message: "Account is not Activated !",
				});
			}
		}
	}
};

module.exports = {
	register,
	login,
};
