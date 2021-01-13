import logo from "./logo.svg";
import FatFooter from "./commons/FatFooter";
import Header from "./commons/Header";
import Home from "./components/Home";
import Admin from "./components/Admin";
import Profile from "./components/Profile";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/profile">
						<Profile />
					</Route>
					<Route path="/admin">
						<Admin />
					</Route>
					<Route path="/login">
						<Login />
					</Route>
					<Route path="/">
						<Home />
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
