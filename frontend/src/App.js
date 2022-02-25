import {
	BrowserRouter,
	Routes,
	Route
  } from "react-router-dom";
import Header from "./components/Header";
import Layout from "./components/Layout";
import { AuthProvider } from "./context/AuthContext";

import HomePage from "./pages/HomePage";
import PostDetailPage from "./pages/PostDetailPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import PrivateRoute from "./utils/PrivateRoute";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AuthProvider>
					
					<Header />

					<Layout >
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/post/:postId" element={<PostDetailPage />} />
							{/* <Route path="signin" element={<SignInPage />} />
							<Route path="signup" element={<SignUpPage />} /> */}
							
							{/* if the user is logged in do not allow them to go to signin or signup pages */}
							<Route element={<PrivateRoute shouldLogIn={false} redirectTo="/" />} >
								<Route path="signin" element={<SignInPage />} />
								<Route path="signup" element={<SignUpPage />} />
							</Route>

						</Routes>
					</Layout>

				</AuthProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
