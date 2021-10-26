import React, { useEffect } from "react";
import Home from "./pages/Home";
import { Switch, Route, useLocation } from "react-router-dom";
import AOS from "aos";
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
		<div>
			<Switch>
				<Route exact path='/'>
					<Home />
				</Route>
			</Switch>
		</div>
	);
};

export default App;
