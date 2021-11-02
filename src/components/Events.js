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
		<section className='relative'>
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div class='custom-shape-divider-bottom-1635863865'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'>
					<path
						d='M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z'
						opacity='.25'
						class='shape-fill'></path>
					<path
						d='M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z'
						opacity='.5'
						class='shape-fill'></path>
					<path
						d='M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z'
						class='shape-fill'></path>
				</svg>
			</div>
			<div
				className='absolute inset-0  md:mt-24 lg:mt-0 bg-eventbg pointer-events-none'
				aria-hidden='true'></div>
			{/* <div className='absolute left-0 right-0 bottom-0 m-auto w-px p-px h-40 bg-accent transform translate-y-1/2'></div> */}
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
	const rightCont =
		"col-start-7 col-end-13 row-start-1 row-end-2  z-50 text-right ";

	const rightImg = "col-start-6 col-end-13 row-start-1 row-end-2 ";

	const leftCont = "col-start-1 col-end-7 row-start-1 row-end-2  ";

	return (
		// className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
		// 	!top && "bg-white blur shadow-lg"
		// }`}>
		<div
			className='grid gap-3 grid-cols-12 grid-rows-1 mb-24'
			data-aos='zoom-y-out'
			data-aos-delay='150'>
			<div
				className={`${
					drx == "left" ? rightCont : leftCont
				}  z-50 items-center`}>
				<h2 className='mb-1 text-2xl font-bold leading-none tracking-tight text-gray-400'>
					Exibition
				</h2>
				<h1 className='mb-4 text-2xl font-bold leading-none tracking-tight text-gray-800'>
					AI Exibition Expo
				</h1>
				<div
					className=' px-4 py-6 bg-accent shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-100'
					style={{ backdropFilter: "blur(20px)" }}>
					<div className='max-w-md mx-auto'>
						<div className='divide-y divide-red-200'>
							<div className='py-1 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
								<p>
									Lorem ipsum, dolor sit amet consectetur adipisicing elit.
									Tempora ad obcaecati expedita impedit omnis quam reprehenderit
									optio aut facere veniam, dicta deserunt, sunt ipsa dolor
									fugiat nisi aperiam earum. Ut. Lorem ipsum, dolor sit amet
									consectetur adipisicing elit. Tempora ad obcaecati expedita
									impedit omnis quam reprehenderit optio aut facere
								</p>
							</div>
							<div className='flex flex-row-reverse'>
								<img src={logo} className='h-7 w-auto ' />
							</div>
						</div>
					</div>
				</div>
				<div className='flex flex-row-reverse'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className=' w-6 h-6 text-black px-1 py-1 box-content'>
						<title>External Link</title>
						<path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
						<polyline points='15 3 21 3 21 9'></polyline>
						<line x1='10' y1='14' x2='21' y2='3'></line>
					</svg>
				</div>
				<br />
			</div>
			<div className={`${drx == "left" ? leftImg : rightImg} m-auto`}>
				<div className='customeFilter'>
					<img
						alt='Card'
						src={event}
						// style={{ width: "600px", height: "400px" }}
						className=' rounded-lg  bg-blend-darken hover:bg-black m-0 box-border img '
					/>
				</div>
			</div>
		</div>
	);
};

export default Events;
