import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.headers.common["authentication"] =
	localStorage.getItem("authentication");

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root"),
);
