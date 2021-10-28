import React, { useState } from "react";
import logo from "../assets/logo.svg";
const Project = () => {
	const [isVisible, setisVisible] = useState(false);

	const handleEventChange = () => {
		setisVisible(!isVisible);
	};

	return (
		<div>
			<section className='relative'>
				{/* Section background (needs .relative class on parent and next sibling elements) */}
				<div
					className='absolute inset-0 bg-gray-100 pointer-events-none mb-16'
					aria-hidden='true'></div>
				<div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div>
				<div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
					<div className='pt-12 md:pt-20'>
						<div className=' w-full text-center pb-12 bg-gray-100 md:pb-16'>
							<span className=' inline-block mb-10 text- text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-black'>
								Projects
							</span>
							<div className='grid  grid-cols-1 gap-6 lg:grid-cols-3'>
								<ProjectCard />
								<ProjectCard />
								<ProjectCard />
								{isVisible ? <ProjectCard /> : ""}
								{isVisible ? <ProjectCard /> : ""}
								{isVisible ? <ProjectCard /> : ""}
							</div>
							<button
								className='btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 my-12'
								onClick={handleEventChange}>
								{isVisible ? "Show Less" : "Show More"}
							</button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
const ProjectCard = () => {
	return (
		<div
			className='relative px-4 py-6 bg-gray-200 shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-100
			hover:drop-shadow-2xl hover:ring-8  rounded-lg transform transition duration-500 hover:scale-110
			'
			// data-aos='zoom-y-out'
			// data-aos-delay='150'
			style={{ backdropFilter: "blur(20px)" }}>
			{/* <div class='max-w-md mx-auto'>
				<div>
					<img src={logo} class='h-7 sm:h-8' />
				</div>
				<h1 class='mb-4 text-4xl font-bold leading-none tracking-tight text-gray-800'>
					AI Exibition Expo
				</h1>
				<div class='divide-y divide-red-200'>
					<div class='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
						<p>
							4k-Labs Members showcasing lab projects At Ai Exhibition Expo
							4k-Labs Members showcasing lab projects At Ai Exhibition Expo
						</p>
					</div>
					<div class='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
						Jan-13-2012
					</div>
				</div>
			</div> */}
			<div className='flex flex-col  px-6 py-5	'>
				<div className='flex flex-row justify-between'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						role='img'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='1'
						strokeLinecap='round'
						strokeLinejoin='round'
						className=' w-10 h-10 text-green-500'>
						<title>Folder</title>
						<path d='M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z'></path>
					</svg>
					<div className='flex flex-row items-center -mr-3  '>
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
							<title>GitHub</title>
							<path d='M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22'></path>
						</svg>
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
				</div>
				<div className='mt-4 flex flex-col text-left'>
					<h1 className=' mb-3 text-2xl '>Swarm of UAVs modified</h1>

					<div className='divide-y divide-black	'>
						<div className='py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7'>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
								suscipit.
							</p>
						</div>
						<div className='pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7'>
							Things , IOT
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Project;
