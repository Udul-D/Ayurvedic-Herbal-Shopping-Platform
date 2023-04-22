const router = require("express").Router();
const { register, login } = require("../controllers/auth/authControls");

router.post("/user", register);
router.post("/", login);

module.exports = router;
