import React, { Component } from 'react';
import '../../App.css';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../Navigation';
import { registerUser } from '../../actions/registerActions'
import { bindActionCreators } from 'redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import './Register.css';
import { Loading } from './Loading';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			password: "",
			confirm_password: "",
			email: "",
			result: "",
			error: {email:{status:"hide",message:""},password:{status:"hide",message:""},username:{status:"hide",message:""}},
			animation: 0,
			loading:false
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
			
			this.setState({ result: "Congrats, You've successfully registered!" });
			this.setState({loading:false});}
		else {
			this.setState({ result: "Error while Registering" });
		}
	}
	registerUser(event) {
		let Error = {email:{status:"hide",message:""},password:{status:"hide",message:""},username:{status:"hide",message:""}};
		this.setState({ "error": Error });
		
		if (this.state.username === "") {
			Error.username.status = "show";
			Error.username.message = "Username should not be blank";
		}
		if (this.state.password !== this.state.confirm_password) {
			Error.password.status = "show";
			Error.password.message = "Password does not match";
			
		}
		if(this.state.password.length<4){
			Error.password.status = "show";
			Error.password.message = "Password should be of three or more characters";
		}
		if(this.state.password === ""){
			Error.password.status = "show";
			Error.password.message = "Password should not be blank";
		}
		if (!(/^.+@.+$/).test(this.state.email)) {
			Error.email.status = "show";
			Error.email.message = "Please enter a valid Email ID";
		}
		if (Error.email.status === "hide" && Error.password.status === "hide" && Error.username.status === "hide" ) {
			console.log("Error :",Error)
			this.props.registerUser(this.state.username, this.state.email, this.state.password);
			this.setState({loading:true});
			setTimeout(this.waiting, 4000);
		}
		else {
			this.setState({ "error": Error });
		}
		(Error.username.status === 'show' || Error.email.status === 'show' || Error.password.status === 'show') ? this.setState((animation) => ({ animation: 1 })) : this.setState({ animation: 0 });

	}
	componentDidUpdate() {
		if (this.state.animation === 1) {
			setTimeout(function () { this.setState({ animation: 0 }); }.bind(this), 830);
		}
	}
	
	render() {
		const regTable = this.state.animation ? 'wrapper regError' : 'wrapper';
		return (
			
			<div className="App">
				<div className="row">
					<Navigation />
					<center>
					<h2 className="center-text registerText">Registration Page</h2>
					<br />
					
					{this.state.loading?<div><Loading /><br /><br /></div>:''}
					
					
					 <h4 className="center-text text text-success">{this.state.result}</h4> 
						<div className={regTable}>
										<input className="center-text textfield"
											type="text"
											name="username"
											placeholder="Username"
											value={this.state.username}
											onChange={this.username}
										/>
										<div className={`error ${this.state.error.username.status}`}>{this.state.error.username.message}</div>
										<input className="center-text textfield"
											type="text"
											name="email"
											placeholder="Email"
											value={this.state.email}
											onChange={this.email} />
										<div className={`error ${this.state.error.email.status}`}>{this.state.error.email.message}</div>
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
										<div className={`error ${this.state.error.password.status}`}>{this.state.error.password.message}</div>	
										<br />
										<br />
										<input className="center-text submit btn btn-primary"
											type="submit"
											value="Sign up"
											onClick={this.registerUser} /><br />
										<div className="center-text .text-success">
										</div>
								</div>	
					</center>
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
