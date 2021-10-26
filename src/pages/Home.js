import React from "react";
import { Header, HeroHome, Division, Events, Project } from "../components/";
const Home = () => {
	return (
		<div>
			<div className='flex flex-col min-h-screen overflow-hidden'>
				<Header />

				<main className='flex-grow'>
					{/*  Page sections */}
					<HeroHome />
					<Division />
					<Events />
					<Project />
					{/* 
					<FeaturesHome />
					<FeaturesBlocks />
					<Testimonials />
					<Newsletter /> */}
				</main>

				{/* <Footer /> */}
				{/* <Footer /> */}
			</div>
		</div>
	);
};

export default Home;
