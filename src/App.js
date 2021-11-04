import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import AOS from "aos";
import Roboto from "./components/Roboto";
import { focusHandling } from "cruip-js-toolkit";
const App = () => {
	const location = useLocation();
	useEffect(() => {
		AOS.init({
			once: true,
			disable: "phone",
			duration: 700,
			easing: "ease-out-cubic",
		});
	});

	useEffect(() => {
		document.querySelector("html").style.scrollBehavior = "auto";
		window.scroll({ top: 0 });
		document.querySelector("html").style.scrollBehavior = "";
		focusHandling("outline");
	}, [location.pathname]); // triggered on route change
	return (
		<div className='	'>
			{/* <h1>Hi</h1>
			<Roboto className='' /> */}

			<Switch>
				<Route exact path='/'>
					<Home />
					{/* <Roboto /> */}
				</Route>
			</Switch>
		</div>
	);
};

export default App;
