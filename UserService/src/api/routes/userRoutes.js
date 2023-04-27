const router = require("express").Router();
const {
	retrieveAllUsers,
	getOneUser,
	updateUser,
	deleteUser,
	filterUserByEmail,
	filterUserByIsActive,
} = require("../controllers/user/userControl");

router.get("/", retrieveAllUsers);
router.get("/:id", getOneUser);
router.put("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.post("/filter/email", filterUserByEmail);
router.post("/filter/active", filterUserByIsActive);

module.exports = router;
