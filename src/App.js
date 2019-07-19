import React from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Logo from './components/logo/Logo'
import Account from './containers/account/Account'
import NavBar from './components/NavBar'

import LoginForm from './containers/login/LoginForm'

const mainPage = () => {
	return (
		<div>
			<Breakpoint medium up>
				<div className="left screen-height">
					<div id="login-container">
						<LoginForm />
					</div>
				</div>
				<div className="right screen-height">
					<div id="logo-container">
						<Logo/>
						<h1>tune<span className="orange">out</span></h1>
					</div>
				</div>
			</Breakpoint>
			<Breakpoint small down>
				<Logo />
				<h1>tune<span className="orange">out</span></h1>
				<LoginForm />
			</Breakpoint>
		</div>
	)
}

const accountPage = () => {
	return (
		<Account />
	)
}

function App() {
	return (
		<Router>
			<BreakpointProvider>
				<NavBar />
				<div className="App">
					<Route path="/" exact component={mainPage} />
					<Route path="/account" component={accountPage} />
				</div>
			</BreakpointProvider>
		</Router>
	);
}

export default App;
