import React from "react";
import logo from "../../components/assets/images/logo.svg";
import { Link } from "react-router-dom";

const Search = ({ CartItem }) => {
	// fixed Header
	window.addEventListener("scroll", function () {
		const search = document.querySelector(".search");
		search.classList.toggle("active", window.scrollY > 100);
	});

	const logged = localStorage.getItem("login");

	const logout = async () => {
		console.log("logout");
		localStorage.clear();
		window.location.reload();
	};

	return (
		<>
			<section className="search">
				<div className="container c_flex">
					<div className="logo width ">
						<img src={logo} alt="" />
					</div>

					<div
						className="search-box f_flex"
						style={{ marginRight: "20px" }}>
						<i className="fa fa-search"></i>
						<input
							type="text"
							placeholder="Search and hit enter..."
						/>
						<span>All Category</span>
					</div>

					<div className="icon f_flex width">
						{!logged ? (
							<div className="btn-group btn-group-sm">
								<Link to="/auth/login">
									<button
										className="btn mt-2"
										style={{
											backgroundColor: "#f3f5f9",
											marginLeft: "10px",
										}}>
										Login
									</button>
								</Link>
								<Link to="/auth/register">
									<button
										className="btn mt-2"
										style={{
											backgroundColor: "#f3f5f9",
											marginLeft: "10px",
										}}>
										Register
									</button>
								</Link>
							</div>
						) : (
							<div className="btn-group btn-group-sm">
								<Link to="">
									<button
										className="btn mt-2"
										style={{
											backgroundColor: "#f3f5f9",
											marginLeft: "10px",
										}}
										onClick={logout}>
										LogOut
									</button>
								</Link>
							</div>
						)}

						<div className="cart">
							<Link to="/cart">
								<i className="fa fa-shopping-bag icon-circle"></i>
								<span>
									{CartItem.length === 0
										? ""
										: CartItem.length}
								</span>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default Search;
