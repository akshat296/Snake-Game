import React, { Component } from 'react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import { registerUser } from '../../actions/registerActions'
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Register.css';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			confirm_password: "",
			email: "",
			result: "",
			error: "",
			animation: 0
		};
		this.username = this.username.bind(this);
		this.password = this.password.bind(this);
		this.confirm_password = this.confirm_password.bind(this);
		this.email = this.email.bind(this);
		this.registerUser = this.registerUser.bind(this);
		this.waiting = this.waiting.bind(this);
	}
	username(event) {
		this.setState({ username: event.target.value });
	}
	password(event) {
		this.setState({ password: event.target.value });
	}
	confirm_password(event) {
		this.setState({ confirm_password: event.target.value });
	}
	email(event) {
		this.setState({ email: event.target.value });

	}
	waiting() {

		if (this.props.register.register.affectedRows === 1) {
			this.setState({ result: "Congrats, you've successfully registered" });
		}
		else {
			this.setState({ result: "Error while Registering" });
		}
	}
	registerUser(event) {
		let Error = "";
		if (this.state.password !== this.state.confirm_password) {
			Error = Error + "Password does not Match, ";
		}
		if (this.state.email !== /^.+@.+$/) {
			Error = Error + "Enter a valid email. ";
		}

		if (Error === "") {
			console.log("state check", this.state.username, this.state.email, this.state.password, this.state.confirm_password)
			this.props.registerUser(this.state.username, this.state.email, this.state.password)
			setTimeout(this.waiting, 4000);
		}
		else {
			this.setState({ "error": Error });
		}

		Error ? this.setState((animation) => ({ animation: 1 })) : this.setState({ animation: 0 });

	}
	componentDidUpdate() {
		if (this.state.animation === 1) {
			setTimeout(function () { this.setState({ animation: 0 }); }.bind(this), 830);
		}
	}
	render() {

		const regTable = this.state.animation ? 'myTable regError' : 'myTable';
		return (
			<div className="App">
				<div className="row">
					<Navigation />
					<center>
						<table className={regTable}>
							<thead>
								<tr>
									<th>
										<h2 className="center-text">Register</h2>
										<br />
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>
										<div className={`error ${this.state.error.username}`}>Username taken</div>
										<div className={`error ${this.state.error.email}`}>Please enter a valid Email Id</div>
										<div className={`error ${this.state.error.password}`}>Password Does not match</div>
									</td>
									<td>
										

										<input className="center-text textfield"
											type="text"
											name="username"
											placeholder="Username"
											value={this.state.username}
											onChange={this.username}
										/>

										<input className="center-text textfield"
											type="text"
											name="email"
											placeholder="Email"
											value={this.state.email}
											onChange={this.email} />

										<input className="center-text textfield"
											type="password"
											name="password"
											placeholder="Password"
											value={this.state.password}
											onChange={this.password} />

										<input className="center-text textfield"
											type="password"
											name="confirm_password"
											placeholder="Confirm Password"
											value={this.state.confirm_password}
											onChange={this.confirm_password} />

									</td>
								</tr>
								<tr>
									<td>
										<br />
										<br />
										<input className="center-text submit btn btn-primary"
											type="submit"
											value="Sign up"
											onClick={this.registerUser} /><br />
										<div className="center-text .text-success">
											{this.state.result}
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</center>
					<div className="center-text error">{this.state.error}</div>
				</div>
			</div>


		);
	}
}

function mapStateToProps(state, ownProps) {
	return {
		//courses: state.courses,
		// statusToast: state.statusToast
		register: state.register

	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		//  getUsername: getUsername
		registerUser: registerUser

	}, dispatch);

}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
