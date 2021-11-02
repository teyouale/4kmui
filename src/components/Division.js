import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";
import logo from "../assets/logo.svg";
import { DivisionInfo } from "../assets/data";
function Division() {
	const [tab, setTab] = useState(1);

	const tabs = useRef(null);

	const heightFix = () => {
		if (tabs.current.children[tab]) {
			tabs.current.style.height =
				tabs.current.children[tab - 1].offsetHeight + "px";
		}
	};

	useEffect(() => {
		heightFix();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [tab]);

	return (
		<section className='relative bg-divisionbg  '>
			<div
				className='absolute inset-0 bg-divisionbg pointer-events-none mb-16'
				aria-hidden='true'></div>
			<div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-accent transform -translate-y-1/2'></div>
			<div class='custom-shape-divider-bottom-1635862722'>
				<svg
					data-name='Layer 1'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 1200 120'
					preserveAspectRatio='none'>
					<path
						d='M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z'
						class='shape-fill'></path>
				</svg>
			</div>

			<div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-12 md:pt-20'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-1.5 md:pb-16'>
						<span className=' inline-block mb-10 text- text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-black'>
							Specialization
						</span>
						<p className='text-xl text-primaryOn'>
							{DivisionInfo.divisionDesc}
						</p>
					</div>

					<div className='md:grid md:grid-cols-12 md:gap-6'>
						<div
							className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
							data-aos='fade-right'>
							{/* Tabs buttons */}
							<div className='mb-8 md:mb-0 '>
								{DivisionInfo.division.map((item) => {
									return (
										<a
											key={item.key}
											className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
												tab !== item.key
													? "bg-primary shadow-md border-accent hover:shadow-lg"
													: "bg-accent border-transparent "
											}`}
											href='#0'
											onClick={(e) => {
												e.preventDefault();
												setTab(item.key);
											}}>
											<div>
												<div className='font-bold leading-snug tracking-tight mb-1'>
													{item.name}
												</div>
												<div className='text-primaryOn'>{item.desc}</div>
											</div>
											<div className='flex justify-center items-center w-8 h-8 bg-primary rounded-full shadow flex-shrink-0 ml-3'>
												<img src={logo} className='w-3 h-3 fill-current' />
											</div>
										</a>
									);
								})}
							</div>
						</div>

						{/* Tabs items */}
						<div
							className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
							data-aos='zoom-y-out'
							ref={tabs}>
							<div className='relative flex flex-col text-center lg:text-right'>
								{/* Item 1 */}
								{DivisionInfo.division.map((item) => {
									return (
										<Transition
											show={tab === item.key}
											appear={true}
											className='w-full'
											enter='transition ease-in-out duration-700 transform order-first'
											enterStart='opacity-0 translate-y-16'
											enterEnd='opacity-100 translate-y-0'
											leave='transition ease-in-out duration-300 transform absolute'
											leaveStart='opacity-100 translate-y-0'
											leaveEnd='opacity-0 -translate-y-16'>
											<div className='relative inline-flex flex-col'>
												<img
													className='md:max-w-none mx-auto rounded invisible'
													src={logo}
													width='500'
													height='462'
													alt='Features bg'
												/>
												<img
													className='md:max-w-none absolute w-full left-0 transform animate-float'
													src={logo}
													width='500'
													height='44'
													alt='Element'
													style={{ top: "-10%" }}
												/>
											</div>
										</Transition>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Division;
