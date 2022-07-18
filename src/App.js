import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import SingleProject from "./pages/project";
import Error from "./pages/404";

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="project/:id" element={<SingleProject />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</Router>
	);
};

export default App;
