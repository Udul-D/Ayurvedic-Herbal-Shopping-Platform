const JWT = require("jsonwebtoken");
const LocalStorage = require("node-localstorage").LocalStorage;
var localstorage = new LocalStorage("./scratch");

const verifyToken = (req, res, next) => {
	const token = req.header("access-token");

	if (!token) {
		return res
			.status(401)
			.json({ message: "You are not Authenticated" });
	} else {
		JWT.verify(token, process.env.SECRETE, (err, user) => {
			if (err) {
				return res.status(403).json({ message: "Invalid Token" });
			} else {
				req.user = user;
				next();
			}
		});
	}
};

module.exports = {
	verifyToken,
};
