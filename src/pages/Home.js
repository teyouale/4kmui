import React from "react";
import {
	Header,
	HeroHome,
	Division,
	Events,
	Project,
	Message,
	Footer,
	Partners,
} from "../components/";
const Home = () => {
	return (
		<div>
			<div className='flex flex-col min-h-screen overflow-hidden'>
				<Header />

				<main className='flex-grow'>
					{/*  Page sections */}
					<HeroHome />
					<Division />
					{/* <Message /> */}
					<Events />
					<Project />
					{/* <Partners /> */}
				</main>
				<Footer />
			</div>
		</div>
	);
};

export default Home;
