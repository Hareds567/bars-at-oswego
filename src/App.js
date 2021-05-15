import "./App.css";
//Local Imports
import NavigationBar from "./NavigationBar/Navigation_Bar";
import Header from "./Header/Header";
import Home from "./Home/Home";
import About from "./About/About";
//Bars
import TheRaven from "./Bars/TheRaven/TheRaven";
import TheAlleyCat from "./Bars/TheAlleyCat/TheAlleyCat";
// Events
import BridgeStreetRun from "./Events/BST/BridgeStreetRun";
import Dbus from "./Events/DBus/Dbus";
//Regular Imports
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link,
} from "react-router-dom";

const App = () => {
	return (
		<Router>
			<Switch>
				<Route exact path='/bars-at-oswego'>
					<div className='App'>
						<div className='navigationBar'>
							<NavigationBar />
						</div>
					</div>
					<div className='test'>
						<div className='header'>
							<Header />
						</div>
						<div className='content'>
							<Home />
						</div>
					</div>
				</Route>
				<Route exact path='/bars-at-oswego/the-raven'>
					<div className='App'>
						<div className='navigationBar'>
							<NavigationBar />
						</div>
						<div className='test'>
							<div className='header'>
								<Header />
							</div>
							<div className='content'>
								<TheRaven />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path='/bars-at-oswego/the-alley-cat'>
					<div className='App'>
						<div className='navigationBar'>
							<NavigationBar />
						</div>
						<div className='test'>
							<div className='header'>
								<Header />
							</div>
							<div className='content'>
								<TheAlleyCat />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path='/bars-at-oswego/the-d-bus'>
					<div className='App'>
						<div className='navigationBar'>
							<NavigationBar />
						</div>
						<div className='test'>
							<div className='header'>
								<Header />
							</div>
							<div className='content'>
								<Dbus />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path='/bars-at-oswego/the-bridge-street-run'>
					<div className='App'>
						<div className='navigationBar'>
							<NavigationBar />
						</div>
						<div className='test'>
							<div className='header'>
								<Header />
							</div>
							<div className='content'>
								<BridgeStreetRun />
							</div>
						</div>
					</div>
				</Route>
				<Route exact path='/bars-at-oswego/about'>
					<div className='App'>
						<div className='navigationBar'>
							<NavigationBar />
						</div>
						<div className='test'>
							<div className='header'>
								<Header />
							</div>
							<div className='content'>
								<About />
							</div>
						</div>
					</div>
				</Route>
				<Route path='/'>
					<Redirect to='/bars-at-oswego' />
				</Route>
			</Switch>
		</Router>
	);
};

export default App;
