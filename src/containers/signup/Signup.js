import React from 'react'
import { Link } from "react-router-dom";
import api from '../../Api'

export default class Signup extends React.Component {
	state = {
		user: {
			email: "",
			password: ""
		},
		valid: true
	}

	onFormChange = (e) => {
		let user = { ...this.state.user };
		user[e.target.name] = e.target.value;
		this.setState({user: user, valid: true});
	}

	login = (e) => {
		e.preventDefault();
		
		const body = {user: {...this.state.user}};
		e.target.reset();
		fetch(api.signup, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(body)
		})
			.then(resp => {
				const jwt = resp.headers.get("Authorization");
				if(jwt) { //store jwt
					localStorage.setItem("jwt", jwt);
					this.props.logInFunc();
				} else { //un-authorized or error
				}
			})
	}
	
	render() {
		return (
			<div id="login-card">
				<form onSubmit={this.login}>
					<input type="text" name="username" placeholder="username" onChange={this.onFormChange} />
					<input type="text" name="email" placeholder="email" onChange={this.onFormChange} />
					<input type="password" name="password" placeholder="password" onChange={this.onFormChange}/>
					<button type="submit">signup</button>
				</form>
			</div>
		);
	}
}
