import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	// Toogle Menu
	const [MobileMenu, setMobileMenu] = useState(false);

	const name = localStorage.getItem("FName");
	const logged = localStorage.getItem("login");

	return (
		<>
			<header className="header">
				<div className="container d_flex">
					<div className="d_flex">
						{/* <span
							class="fa-solid fa-border-all"
							style={{ fontSize: "18px" }}></span>
						<h6 className="mt-2">
							Categories
							<i className="fa fa-chevron-down"></i>
						</h6> */}
						<ul>
							{!logged ? (
								<li></li>
							) : (
								<li
									style={{
										backgroundColor: "#e94560",
										color: "white",
										paddingLeft: "40px",
										paddingRight: "40px",
										paddingBottom: "30px",
										height: "53px",
										fontSize: "14px",
										borderRadius: "50px",
										marginRight: "250px",
									}}>
									Welcome{" "}
									<Link
										to="#"
										style={{ color: "white" }}>
										<p className="account">
											{name} !{" "}
										</p>
									</Link>
								</li>
							)}
						</ul>
					</div>

					<div className="navlink">
						<ul
							className={
								MobileMenu
									? "nav-links-MobileMenu"
									: "link f_flex capitalize"
							}
							onClick={() => setMobileMenu(false)}>
							{/*<ul className='link f_flex uppercase {MobileMenu ? "nav-links-MobileMenu" : "nav-links"} onClick={() => setMobileMenu(false)}'>*/}
							<li>
								<Link to="/">home</Link>
							</li>
							<li>
								<Link to="/pages">pages</Link>
							</li>
							<li>
								<Link to="/user">user account</Link>
							</li>
							<li>
								<Link to="/vendor">vendor account</Link>
							</li>
							<li>
								<Link to="/track">track my order</Link>
							</li>
							<li>
								<Link to="/contact">contact</Link>
							</li>
						</ul>

						<button
							className="toggle"
							onClick={() => setMobileMenu(!MobileMenu)}>
							{MobileMenu ? (
								<i className="fas fa-times close home-btn"></i>
							) : (
								<i className="fas fa-bars open"></i>
							)}
						</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Navbar;
