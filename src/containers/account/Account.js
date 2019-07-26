import React from "react";
import './Account.css';
import NewAccountForm from './NewAccountForm'
import AccountCard from './AccountCard'
import api from '../../Api'

class Account extends React.Component {

	state = {
		showAccountForm: false,
		accounts: []
	}

	toggleAccountForm = () => {
		this.setState({ showAccountForm: !this.state.showAccountForm })
	}

	addNewAccount = (account) => {
		let accounts = [...this.state.accounts];
		accounts.push(account);
		this.setState({accounts: accounts})
	}

	componentDidMount() {
		fetch(api.accounts, {
			headers: {
				"Authorization": localStorage.getItem('jwt')
			}
		})
			.then(resp => resp.json())
			.then((data) => {
				this.setState({accounts: data})
			})
	}

	render(){
		return (
			<div>
				<div id="account-list">
					<h2>my accounts</h2>
					<button onClick={this.toggleAccountForm} >create account</button>
					{
						this.state.accounts.map((account) => {
							return <AccountCard account={account} />
						})
					}
				</div>
				<div>
				</div>
				{
					this.state.showAccountForm ? < NewAccountForm
					toggleAccountForm={this.toggleAccountForm}
					addNewAccount={this.addNewAccount}
					/> : <div/>
				}
			</div>
		)
	}
}

export default Account;
