import React from 'react'
import { Link } from "react-router-dom";
import './LoginForm.css';
import api from '../../Api'

export default class LoginForm extends React.Component {
	state = {
		email: "",
		password: "",
		valid: true
	}

	onFormChange = (e) => {
		let state = { ...this.state };
		state.valid = true;
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	login = (e) => {
		e.preventDefault();
		
		const body = {user: {...this.state}};
		e.target.reset();
		fetch(api.login, {
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
					this.setState({valid: false});
				}
			})
	}
	
	render() {
		return (
			<div id="login-card">
				<form onSubmit={this.login}>
					{
						this.state.valid ? <p/> : <p><span className="alert">Username or password incorrect!</span></p>
					}
					<input type="text" name="email" placeholder="email" onChange={this.onFormChange} />
					<input type="password" name="password" placeholder="password" onChange={this.onFormChange}/>
					<button type="submit">login</button>
				</form>
				<p>New user? Just sign up <Link to="signup">here</Link></p>
			</div>
		);
	}
}
