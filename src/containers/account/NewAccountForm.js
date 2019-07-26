import React from 'react'
import api from '../../Api'

class NewAccountForm extends React.Component {
	state = {
		account_name: ""
	}

	onFormChange = (e) => {
		let state = { ...this.state };
		state[e.target.name] = e.target.value;
		this.setState(state);
	}

	submit = (e) => {
		e.preventDefault();
		
		const body = {account: {...this.state}};
		fetch(api.accounts, {
			method: "POST",
			headers: {
				"Authorization": localStorage.getItem('jwt'),
				"Content-Type": "application/json",
				"Accept": "application/json"
			},
			body: JSON.stringify(body)
		}).then(resp => resp.json())
		  .then(data => {
			  this.props.toggleAccountForm();
			  this.props.addNewAccount(data);
		  })
	}

	render() {
		return (
			<form id="account-form" onSubmit={this.submit}>
				<label name="account_name">account name</label>
				<input type="text" name="account_name"  onChange={this.onFormChange}/>
				<button type="submit">create account</button>
			</form>
		);
	}
}

export default NewAccountForm;
