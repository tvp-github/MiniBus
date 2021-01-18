import logo from "./logo.svg";
import FatFooter from "./commons/FatFooter";
import Header from "./commons/Header";
import Home from "./components/Customer/Home/Home";
import Admin from "./components/Admin/AdminPage/Admin";
import Profile from "./components/Admin/ProfilePage/Profile";
import Login from "./components/Customer/Login/Login";
import Step2 from "./components/Customer/Booking/Step2";
import Step3 from "./components/Customer/Booking/Step3";
import Step4 from "./components/Customer/Booking/Step4";
import Bill from "./components/Customer/Bill/Bill"
import SearchTour from "./components/Customer/SearchTour/SearchTour"
import AdminSystem from "./components/AdminSystem/AdminSystemPage/AdminSystem"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Success from "./components/Customer/Booking/Success";
function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/profile" exact>
						<Profile />
					</Route>
					<Route path="/adminsystem" exact>
						<AdminSystem />
					</Route>
					<Route path="/admin" exact>
						<Admin />
					</Route>
					<Route path="/login" exact>
						<Login />
					</Route>
					<Route path="/bill" exact>
						<Bill />
					</Route>
					<Route path="/searchtour" exact>
						<SearchTour/>
					</Route>
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/booking">
						<Switch>
							<Route path="/booking/step2" exact>
								<Step2 />
							</Route>
							<Route path="/booking/step3" exact>
								<Step3 />
							</Route>
							<Route path="/booking/step4" exact>
								<Step4 />
							</Route>
							<Route path="/booking/success" exact>
								<Success />
							</Route>
						</Switch>
					</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
