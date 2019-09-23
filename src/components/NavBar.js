import React from 'react'
import Breakpoint, { BreakpointProvider } from 'react-socks';
import { withRouter, Link } from "react-router-dom";

class NavBar extends React.Component {

	state={
		showNav: false
	}

	setCurrentNav = (e) => {
		this.setState({selected: e.target.parentNode.getAttribute("name")})
	}

	toggleNav = () => {
		this.setState({showNav: !this.state.showNav});
	}

	render(){
		return (
			<>
			<Breakpoint medium up>
			<ul id="navbar">
			<li
			className={this.props.location.pathname == "/" ? "active" : "" }
			>
			<Link to="/">HOME</Link><div className="underline" />
			</li>
			
			{
				this.props.loggedIn ?
				<>
					<li
						className={this.props.location.pathname == "/discover" ? "active" : "" }
					>
						<Link to="/discover">DISCOVER</Link>
						<div className="underline" />
					</li>
					<li
						className={this.props.location.pathname == "/account" ? "active" : "" }
					>
						<Link to="/account">ACCOUNT</Link>
						<div className="underline" />
					</li>
					<li
						className={this.props.location.pathname == "/player" ? "active" : "" }
					>
						<Link to="/player">PLAYER</Link>
						<div className="underline" />
					</li>
				</> : ""
				
			}
			{
				this.props.loggedIn ? <li className="float-right"><Link onClick={this.props.logOut}>LOG OUT</Link><div className="underline" /></li> : ""
			}
			</ul>
			</Breakpoint>
			<Breakpoint small down>
			{
				this.state.showNav ?
				<ul id="navbar-mobile">
				<li>
				<Link to="/" onClick={this.toggleNav}>HOME</Link>
				</li>		
				{
					this.props.loggedIn ?
					<>
						<li>
							<Link to="/discover" onClick={this.toggleNav}>DISCOVER</Link>
						</li>
						<li>
							<Link to="/account" onClick={this.toggleNav}>ACCOUNT</Link>
						</li>
						<li>
							<Link to="/player" onClick={this.toggleNav}>PLAYER</Link>
						</li>
						<li >
							<Link onClick={() =>{
								this.props.logOut();
								this.toggleNav();
							}}>LOG OUT</Link><div className="underline" />
						</li>
					</> : ""
				}
				</ul>
				:
				<div id="navbar-mobile-collapsed">
					<div id="burger" onClick={this.toggleNav}>
						<div />
						<div />
						<div />
					</div>
				</div>
			}

				</Breakpoint>
			</>
		)
	}

}

export default withRouter(NavBar);
