import React from 'react'
import api from '../../Api'

class NewAccountForm extends React.Component {
	state = {
		account_name: "",
		errors: []
	}

	onFormChange = (e) => {
		let state = { ...this.state };
		state.errors = [];
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
			  if(data.errors) {
				  this.setState({ errors: data.errors })
			  }else{
				  this.props.toggleAccountForm();
				  this.props.addNewAccount(data);
			  }
		  })
	}

	renderErrors = () => {
		if(this.state.errors.length > 0) {
			return(
				<ul>
					{
						this.state.errors.map((error) => {
							return <li><span className="alert">{error}</span></li>
						})
					}
				</ul>
			)
		}
	}

	render() {
		return (
			<div id="account-form">
				<div className="form-card">
					{
						this.renderErrors()
					}
					<form onSubmit={this.submit}>
						<label name="account_name">account name</label>
						<input type="text" name="account_name"  onChange={this.onFormChange}/>
						<button type="submit">create account</button>
					</form>
					<button onClick={this.props.toggleAccountForm}>GO BACK</button>
				</div>
			</div>
		);
	}
}

export default NewAccountForm;
