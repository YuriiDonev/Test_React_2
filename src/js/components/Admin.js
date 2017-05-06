import React from 'react';
import { DefaultState } from '../default';

export default class Admin extends React.Component {
	constructor(props) {
		super(props);
		this.state = DefaultState;
	}

	checkData() {
		const username = this.admin.value;
		const password = this.password.value;

		if (this.state.username !== username && this.state.password !== password) {
			this.setState({massage: 'Check your username and password please'});
			this.setState({
				usernameChecked: false,
				passwordChecked: false
			});
			return;
		}
		if (this.state.username !== username) {
			this.setState({massage: 'Check your username please'});
			this.setState({
				usernameChecked: false,
				passwordChecked: false
			});
			return;
		}
		if (this.state.password !== password) {
			this.setState({massage: 'Check your password please'});
			this.setState({
				usernameChecked: false,
				passwordChecked: false
			});
			return;
		}
		this.setState({
			usernameChecked: true,
			passwordChecked: true
		});
	}

	renderForm() {
		if (!this.state.usernameChecked && !this.state.passwordChecked) {
			return (
				<div>
				<div>Are you Admin?</div>
				<hr/>
				<div>Log in:</div>
				<input type="text" placeholder="Username..." ref={(input) => this.admin = input} />
				<div>Password:</div>
				<input type="text" placeholder="Password..." ref={(input) => this.password = input} />
				<button onClick={this.checkData.bind(this)}>LogIn</button>
				<hr/>
				<div>{this.state.massage}</div>
				</div>
			);
		} else {
			return (
				<div><h4>Welcome to the application control panel</h4></div>
			);
		}
	}

	render() {
		return (
			<div>
				<div>{this.renderForm()}</div>
			</div>
		);
	}
}
