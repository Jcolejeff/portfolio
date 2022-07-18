import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import pages
import AnimatedRoutes from "./pages/AnimatedRoutes";
const App = () => {
	return (
		<Router>
			<AnimatedRoutes></AnimatedRoutes>
		</Router>
	);
};

export default App;
