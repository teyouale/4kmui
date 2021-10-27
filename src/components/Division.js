import React, { useState, useRef, useEffect } from "react";
import Transition from "../utils/Transition.js";
import logo from "../assets/logo.svg";
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
		<section className='relative'>
			{/* Section background (needs .relative class on parent and next sibling elements) */}
			<div
				className='absolute inset-0 bg-gray-100 pointer-events-none mb-16'
				aria-hidden='true'></div>
			<div className='absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2'></div>

			<div className='relative max-w-6xl mx-auto px-4 sm:px-6'>
				<div className='pt-12 md:pt-20'>
					{/* Section header */}
					<div className='max-w-3xl mx-auto text-center pb-12 md:pb-16'>
						<span className=' inline-block mb-10 text- text-4xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400 font-black'>
							Specialization
						</span>
						<p className='text-xl text-gray-600'>
							Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas
							porttitor congue massa. Fusce posuere, magna sed pulvinar
							ultricies, purus lectus malesuada libero, sit amet commodo magna
							eros quis urna. Nunc viverra imperdiet enim. Fusce est. Vivamus a
							tellus.
						</p>
					</div>

					<div className='md:grid md:grid-cols-12 md:gap-6'>
						<div
							className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6'
							data-aos='fade-right'>
							{/* Tabs buttons */}
							<div className='mb-8 md:mb-0'>
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 1
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(1);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											4K Bots
										</div>
										<div className='text-gray-600'>
											4K-Bots is a department in 4K-Labs that works on AI and
											Robotics.
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<img src={logo} className='w-3 h-3 fill-current' />
									</div>
								</a>
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 2
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(2);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											4K Devs
										</div>
										<div className='text-gray-600'>
											4K-Devs is a department that works on mobile, desktop &
											web development.
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<img src={logo} className='w-3 h-3 fill-current' />
									</div>
								</a>
								<a
									className={`flex items-center text-lg p-5 rounded border transition duration-300 ease-in-out mb-3 ${
										tab !== 3
											? "bg-white shadow-md border-gray-200 hover:shadow-lg"
											: "bg-gray-200 border-transparent"
									}`}
									href='#0'
									onClick={(e) => {
										e.preventDefault();
										setTab(3);
									}}>
									<div>
										<div className='font-bold leading-snug tracking-tight mb-1'>
											4K Things
										</div>
										<div className='text-gray-600'>
											4K-Things is a department in 4K-Labs that works on
											IOT(Internet of Things).
										</div>
									</div>
									<div className='flex justify-center items-center w-8 h-8 bg-white rounded-full shadow flex-shrink-0 ml-3'>
										<img src={logo} className='w-3 h-3 fill-current' />
									</div>
								</a>
							</div>
						</div>

						{/* Tabs items */}
						<div
							className='max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1'
							data-aos='zoom-y-out'
							ref={tabs}>
							<div className='relative flex flex-col text-center lg:text-right'>
								{/* Item 1 */}
								<Transition
									show={tab === 1}
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
								{/* Item 2 */}
								<Transition
									show={tab === 2}
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
											style={{ top: "-5%" }}
										/>
									</div>
								</Transition>
								{/* Item 3 */}
								<Transition
									show={tab === 3}
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
											style={{ top: "0%" }}
										/>
									</div>
								</Transition>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Division;
