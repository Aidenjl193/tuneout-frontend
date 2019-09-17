import React from 'react'
import { withRouter, Link } from "react-router-dom";

class NavBar extends React.Component{

	setCurrentNav = (e) => {
		this.setState({selected: e.target.parentNode.getAttribute("name")})
	}

	render(){
		return (
			<ul id="navbar">
				<li
					className={this.props.location.pathname == "/" ? "active" : "" }
				>
					<Link to="/">HOME</Link><div className="underline" />
				</li>
				
				{
					this.props.loggedIn ?
					<li
						className={this.props.location.pathname == "/discover" ? "active" : "" }
					>
						<Link to="/discover">DISCOVER</Link>
						<div className="underline" />
					</li> : ""
				}
				{
					this.props.loggedIn ?
					<li
						className={this.props.location.pathname == "/account" ? "active" : "" }
					>
						<Link to="/account">MY ACCOUNT</Link>
						<div className="underline" />
					</li> : ""
				}
				{
					this.props.loggedIn ?
					<li
						className={this.props.location.pathname == "/player" ? "active" : "" }
					>
						<Link to="/player">PLAYER</Link>
						<div className="underline" />
					</li> : ""
				}
				{
					this.props.loggedIn ? <li className="float-right"><Link onClick={this.props.logOut}>LOG OUT</Link><div className="underline" /></li> : ""
				}
			</ul>
		)
	}

}

export default withRouter(NavBar);
