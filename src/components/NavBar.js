import React from 'react'
import { Link } from "react-router-dom";

const NavBar = () => {
	return (
		<ul>
			<li><Link to="/">home</Link></li>
			<li><Link to="/dashboard">dashboard</Link></li>
			<li><Link to="/account">my account</Link></li>
		</ul>
	)
}

export default NavBar;
