// Filename - App.js

import React from "react";
import {
	BrowserRouter as Router,
	Routes,
	Route,
} from "react-router-dom";
import SignIn from "./pages/SignIn";
import index from "./pages/index";

function App() {
	return (
		<Router>
			<Routes>
                <Route exact path="/" element={<index />} />
				<Route path="/Sign-In" element={<SignIn />} />
			</Routes>
		</Router>
	);
}

export default App;
