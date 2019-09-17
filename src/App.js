import React from 'react';
import Breakpoint, { BreakpointProvider } from 'react-socks';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';
import Logo from './components/logo/Logo'
import Account from './containers/account/Account'
import NavBar from './components/NavBar'
import ProfilePage from './components/profile/ProfilePage'
import Album from './components/album/Album'
import Player from './components/player/Player'
import PlayerPage from './components/player/PlayerPage'
import Discover from './components/discover/Discover'

import LoginForm from './containers/login/LoginForm'
import Signup from './containers/signup/Signup'

export default class App extends React.Component{
	state = {
		currentSong: {
			url: "",
			name: ""
		},
		loggedIn: false,
		songQueue: [],
		playerRef: {}
	}

	setPlayerRef = (ref) => {
		this.setState({playerRef: ref});
	}

	logOut = () => {
		this.setState({ loggedIn: false });
		localStorage.removeItem('jwt');
		
	}

	//Needs to be done better
	logIn = () => {
		this.setState({ loggedIn: true });
	}

	componentDidMount() {
		if(localStorage.getItem('jwt')) {
			this.setState({ loggedIn: true });
		}
	}

	mainPage = () => {
		return (
			<div>
				<Breakpoint medium up>
					<div className="left screen-height">
						<div id="login-container">
							{
								this.state.loggedIn ? <div /> : <LoginForm logInFunc={this.logIn} />
							}
						</div>
					</div>
					<div className="right screen-height">
						<div id="logo-container">
							<Logo/>
							<h1>TUNE<span className="orange">OUT</span></h1>
						</div>
					</div>
				</Breakpoint>
				<Breakpoint small down>
					<Logo />
					<h1>TUNE<span className="orange">OUT</span></h1>
					{
						this.state.loggedIn ? <div /> : <LoginForm logInFunc={this.logIn} />
					}
				</Breakpoint>
			</div>
		)
	}

	accountPage = () => {
		return (
			<Account />
		)
	}

	signupPage = () => {
		return (

			<Signup logInFunc={this.logIn}/>
		)
	}

	profilePage = (props) => {
		return (
			<ProfilePage {...props} addSongToQueue={this.addSongToQueue}/>
		)
	}

	albumPage = (props) => {
		return (
			<Album {...props} addSongToQueue={this.addSongToQueue}/>
		)
	}

	discoverPage = () => {
		return (
			<Discover addSongToQueue={this.addSongToQueue}/>
		)
	}

	playerPage = () => {
		return (
			<PlayerPage songQueue={this.state.songQueue} playerRef={this.state.playerRef} removeSongFromQueue={this.removeSongFromQueue} />
		)
	}


	addSongToQueue = (song) => {
		let songQueue = [...this.state.songQueue]
		songQueue.push(song);
		this.setState({songQueue: songQueue});
	}

	removeSongFromQueue = (index) => {
		let songQueue = [...this.state.songQueue]
		songQueue.splice(index, 1);
		this.setState({songQueue: songQueue});
	}

	nextSong = () => {
		let songQueue = [...this.state.songQueue]
		songQueue.shift();
		this.setState({songQueue: songQueue});
	}
	
	render() {
		return (
			<Router>
			<BreakpointProvider>
			<NavBar logOut={this.logOut} loggedIn={this.state.loggedIn}/>
			<div className="App">
			<Route path="/" exact component={this.mainPage} />
			<Route path="/account" component={this.accountPage} />
			<Route path="/signup" component={this.signupPage} />
			<Route path="/accounts/:id" component={this.profilePage} />
			<Route path="/albums/:id" component={this.albumPage} />
			<Route path="/discover" component={this.discoverPage} />
			<Route path="/player" component={this.playerPage} />
			</div>
			</BreakpointProvider>
			{
				this.state.loggedIn ? <Player currentSong={this.state.songQueue[0]} nextSong={this.nextSong} setPlayerRef={this.setPlayerRef} /> : ""
			}
			</Router>
		)
	}
}
