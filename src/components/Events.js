import React, { useState } from "react";
import logo from "../assets/logo.svg";
import event from "../assets/event.png";
function Events() {
	const [isVisible, setisVisible] = useState(false);

	const handleEventChange = () => {
		setisVisible(!isVisible);
	};
	return (
		// <div>
		// <div>
		<section className='relative dotPattern'>
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className='absolute inset-0  md:mt-24 lg:mt-0 bg-secondary pointer-events-none'
				aria-hidden='true'></div>
			<div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-accent transform -translate-y-1/2'></div>
			<div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-40 bg-accent transform translate-y-1/2'></div>
			<div className='relative max-w-6xl mx-auto px-4 sm:px-6 '>
				<div className='py-10 md:py-12'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-5 md:pb-5'>
						<span className=' inline-block mb-2 text- text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-black'>
							Events
						</span>
					</div>
					<div className='flex flex-col'>
						<Card drx='left' />
						<Card drx='right' />
						<Card />
						{isVisible ? <Card drx='left' /> : ""}
						{isVisible ? <Card drx='right' /> : ""}
						<button
							className='self-center  btn-sm text-accent bg-black hover:bg-accent hover:text-secondaryOn mb-20 my-1'
							onClick={handleEventChange}>
							{isVisible ? "Show Less" : "Show More"}
						</button>
					</div>

					{/* <Card /> */}
				</div>
			</div>
		</section>
	);
}
const Card = ({ drx }) => {
	const leftImg = "col-start-1 col-end-8 row-start-1 row-end-2 ";
	const rightCont = "col-start-7 col-end-13 row-start-1 row-end-2 ";

	const rightImg = "col-start-6 col-end-13 row-start-1 row-end-2 ";
	const leftCont = "col-start-1 col-end-7 row-start-1 row-end-2  ";

	return (
		// className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
		// 	!top && "bg-white blur shadow-lg"
		// }`}>
		<div
			className='grid gap-3 grid-cols-12 grid-rows-1 items-center mb-24'
			data-aos='zoom-y-out'
			data-aos-delay='150'>
			<div className={`${drx == "left" ? leftImg : rightImg}`}>
				<div className='customeFilter'>
					<img
						alt='Card'
						src={event}
						// style={{ width: "600px", height: "400px" }}
						className=' rounded-lg  bg-blend-darken hover:bg-black m-0 box-border img '
					/>
				</div>
			</div>
			<div className={`${drx == "left" ? rightCont : leftCont}`}>
				<div
					className=' px-4 py-6 bg-accent shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-100'
					style={{ backdropFilter: "blur(20px)" }}>
					<div className='max-w-md mx-auto'>
						<div>
							<img src={logo} className='h-7 sm:h-8' />
						</div>
						<h1 className='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800'>
							AI Exibition Expo
						</h1>
						<div className='divide-y divide-red-200'>
							<div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
								<p>
									4k-Labs Members showcasing lab projects At Ai Exhibition Expo
								</p>
							</div>
							<div className='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
								Jan-13-2012
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Events;
