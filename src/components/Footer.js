import React from "react";
import logo from "../assets/logo.svg";
const Footer = () => {
	return (
		<footer className='relative  pt-8 pb-6 pattern'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-wrap text-left lg:text-left'>
					<div className='w-full lg:w-6/12 px-4 flex flex-row self-baseline mb-6 items-center'>
						<div className='mr-2   flex flex-col'>
							<button
								className='bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mb-2'
								type='button'>
								<i className='fab fa-twitter'></i>
							</button>
							<button
								className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mb-2'
								type='button'>
								<i className='fab fa-facebook-square'></i>
							</button>
							<button
								className='bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mb-2'
								type='button'>
								<i className='fab fa-linkedin'></i>
							</button>
							<button
								className='bg-white text-gray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mb-2'
								type='button'>
								<i className='fab fa-github'></i>
							</button>
						</div>
						<div>
							<h4 className='text-3xl fonat-semibold text-gray-700'>
								Let's keep in touch!
							</h4>
							<h5 className='text-lg mt-0 mb-2 text-gray-600'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vel
								voluptas eius ex, commodi impedit.
							</h5>
						</div>
					</div>
					<div className='w-full lg:w-6/12 px-4'>
						<div className='flex flex-wrap items-top mb-6'>
							<div className='w-full lg:w-4/12 px-4 ml-auto'>
								<span className='block uppercase text-gray-500 text-sm font-semibold mb-2'>
									Links
								</span>
								<ul className='list-unstyled'>
									<li>
										<a className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'>
											About Us
										</a>
									</li>
									<li>
										<a className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'>
											Project
										</a>
									</li>
									<li>
										<a className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'>
											Specialization
										</a>
									</li>
									<li>
										<a className='text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-sm'>
											Contact Us
										</a>
									</li>
								</ul>
							</div>
							<div className='w-full lg:w-4/12 px-4'>
								<img
									alt='Card'
									src={logo}
									data-aos='flip-left'
									data-aos-easing='ease-out-cubic'
									data-aos-duration='2000'
									// style={{ width: "600px", height: "400px" }}
									className=' rounded-lg  bg-blend-darken  m-0 box-border'
								/>
							</div>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-300' />
				<div className='flex flex-wrap items-center md:justify-between justify-center'>
					<div className='w-full md:w-4/12 px-4 mx-auto text-center'>
						<div className='text-sm text-gray-500 font-semibold py-1'>
							© <span id='get-current-year'>2021</span>
							<a className='text-gray-500 hover:text-gray-800' target='_blank'>
								{" "}
								4K Labs
							</a>
							.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
