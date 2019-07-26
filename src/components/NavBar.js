import React from 'react'
import { Link } from "react-router-dom";

export default class NavBar extends React.Component{

	state = {
		selected: "home"
	}

	setCurrentNav = (e) => {
		this.setState({selected: e.target.parentNode.getAttribute("name")})
	}

	render(){
		return (
			<ul id="navbar">
				<li
					onClick={this.setCurrentNav}
					className={this.state.selected == "home" ? "active" : "" }
					name="home"
				>
					<Link to="/">HOME</Link><div className="underline" />
				</li>
				
				{
					this.props.loggedIn ?
					<li
						onClick={this.setCurrentNav}
						className={this.state.selected == "discover" ? "active" : "" }
						name="discover"
					>
						<Link to="/discover">DISCOVER</Link>
						<div className="underline" />
					</li> : ""
				}
				{
					this.props.loggedIn ? <li><Link to="/account">MY ACCOUNT</Link><div className="underline" /></li> : ""
				}
				{
					this.props.loggedIn ? <li><Link onClick={this.props.logOut}>LOG OUT</Link><div className="underline" /></li> : ""
				}
			</ul>
		)
	}

}
