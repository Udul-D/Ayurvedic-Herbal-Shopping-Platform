const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const authRoutes = require("./api/routes/authRoutes");
const userRoutes = require("./api/routes/userRoutes");

const app = express();
dotenv.config();

app.use(cors());

// creating the connection with database
mongoose
	.connect(process.env.URL)
	.then(() => {
		console.log("Database Connection Succeeded 🔥");
	})
	.catch((err) => {
		console.log("Database Connection Failed ❌ : " + err);
	});

// middleware
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/user", userRoutes);

// creating the port connection with the backend server
const port = process.env.PORT || 5000;

app.listen(process.env.PORT || 5000, () => {
	console.log(
		"Server listening on port " + process.env.PORT || 5000,
		"🔥",
	);
});
