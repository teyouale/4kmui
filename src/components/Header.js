import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

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
							<img src={logo} className='w-12' />
							<a className='m-2'>4K Labs</a>
						</Link>
					</div>

					<nav className='flex flex-grow'>
						<ul className='flex flex-grow justify-end flex-wrap items-center'>
							<li>
								<Link
									to='/Specialization'
									className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'>
									Specialization
								</Link>
							</li>
							<li>
								<Link
									to='/Teams'
									className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'>
									Teams
								</Link>
							</li>
							<li>
								<Link
									to='/Projects'
									className='font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out'>
									Projects
								</Link>
							</li>
							<li>
								<Link
									to='/Login'
									className='btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3'>
									<span>Login</span>
								</Link>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>
	);
}

export default Header;
