import React from "react";
import logo from "../assets/logo.svg";
const Project = () => {
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
							<h1 className='h2 mb-4 custom'>Projects</h1>
							<div className='grid  grid-cols-3 gap-6'>
								<ProjectCard />
								<ProjectCard />
								<ProjectCard />
							</div>
							<button className='btn-sm text-gray-200 bg-gray-900 hover:bg-gray-800 ml-3 my-12'>
								Show More
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
			class='relative px-4 py-6 bg-gray-200 shadow-lg sm:rounded-3xl bg-clip-padding bg-opacity-60 border border-gray-100
			hover:drop-shadow-2xl hover:ring-8  rounded-lg transform transition duration-500 hover:scale-110
			'
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
			<div className='flex flex-col m-6s	'>
				<div className='flex flex-row justify-between'>
					<h1>logo</h1>
					<h1>logo</h1>
				</div>
				<div className='mt-4 flex flex-col items-start'>
					<h1>test</h1>
					<h4>Lorem, ipsum.</h4>
					<h6>Tag</h6>
				</div>
			</div>
		</div>
	);
};

export default Project;
