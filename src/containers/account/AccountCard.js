import React from 'react';
import { Link } from "react-router-dom";

const AccountCard = (props) => {
	const { account } = props;
	return (
		<Link to={`accounts/${account.id}`}>
			<div class="account-card">
				<h3>{ account.account_name }</h3>
			</div>
		</Link>
	);
}

export default AccountCard;
