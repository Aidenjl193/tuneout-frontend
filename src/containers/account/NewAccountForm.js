import React from './react'

class NewAccountForm extends React.Component {
	state = {
		
	}

	render() {
		return (
			<form>
				<label name="name">band name</label>
				<input type="text" name="name" />
			</form>
		);
	}
}

export default NewAccountForm;
