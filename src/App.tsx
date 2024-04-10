// Filename - App.js

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import Home from "./pages/Home";

function App() {
	return (
		<Router>
			<Routes>
                <Route path="/" element={<Home />} />
				<Route path="/Sign-In" element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
