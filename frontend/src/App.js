import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Header from "./components/Header";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AuthProvider>
					
					<Header />
				
					<Routes>
						<Route element={<PrivateRoute />} >
							<Route path="/" element={<HomePage />} />
						</Route>
						<Route path="signin" element={<SignInPage />} />
						<Route path="signup" element={<SignUpPage />} />
					</Routes>

				</AuthProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
