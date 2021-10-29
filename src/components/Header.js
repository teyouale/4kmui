import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { navLink } from "../assets/data";

function Header() {
	const [top, setTop] = useState(true);

	// detect whether user has scrolled the page down by 10px
	useEffect(() => {
		const scrollHandler = () => {
			window.pageYOffset > 10 ? setTop(false) : setTop(true);
		};
		window.addEventListener("scroll", scrollHandler);
		return () => window.removeEventListener("scroll", scrollHandler);
	}, [top]);
	return (
		<header
			className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
				!top && "bg-white blur shadow-lg"
			}`}>
			<div className='max-w-6xl mx-auto px-5 sm:px-6'>
				<div className='flex items-center justify-between h-16 md:h-20'>
					{/* Site branding */}
					<div className='flex-shrink-0 mr-4'>
						{/* Logo */}
						<Link
							to='/'
							className='flex flex-row items-center'
							aria-label='Cruip'>
							<img src={logo} className='w-12 ' />
							<span className='m-2 text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400'>
								4K Labs
							</span>
						</Link>
					</div>

					<nav className='flex flex-grow'>
						<ul className='flex flex-grow justify-end flex-wrap items-center'>
							{navLink.map((item) => {
								return (
									<li key={item.name}>
										<Link
											to={`/${item.name}`}
											className={`
											${
												item.isButton
													? "btn-sm text-primary bg-secondaryOn  ml-3"
													: "font-medium text-primaryOn hover:text-secondaryOn px-5 py-3 flex items-center transition duration-150 ease-in-out"
											}	`}>
											{item.name}
										</Link>
									</li>
								);
							})}
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
