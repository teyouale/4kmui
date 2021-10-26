import React from "react";

const Message = () => {
	return (
		<div className=''>
			{/* <div className='max-w-3xl mx-auto mt-50' data-aos='zoom-y-out'> */}
			<div className='max-w-3xl mx-auto mt-00'>
				<div className='relative flex items-start border-2 border-gray-200 rounded bg-white'>
					{/* Testimonial */}
					<div className='text-center px-12 py-8 pt-20 mx-4 md:mx-0'>
						<div className='absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2'>
							<img
								className='relative rounded-full'
								src={require("../assets/logo.svg").default}
								width='96'
								height='96'
								alt='Testimonial 01'
							/>
						</div>
						<blockquote className='text-xl font-medium mb-4'>
							“ Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex iure
							necessitatibus doloribus nisi recusandae. Impedit omnis, error
							commodi architecto nihil perspiciatis sit? Unde repellendus vero
							quo expedita, magnam neque? Cupiditate. “
						</blockquote>
						<cite className='block font-bold text-lg not-italic mb-1'>
							Lorem
						</cite>
						<div className='text-gray-600'>
							<span>CEO & Co-Founder</span>{" "}
							<a className='text-blue-600 hover:underline' href='#0'>
								@Lorem
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Message;
