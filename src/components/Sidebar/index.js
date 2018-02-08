import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsername } from '../../actions/loginActions';
import { Link } from 'react-router-dom';
import { Loading } from '../Pages/Loading'
import './Sidebar.css';
class Sidebar extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: "test",
			password: "12345",
			loading:false,
			type:"Error Login in"
		};
		this.username = this.username.bind(this);
		this.function2 = this.function2.bind(this);
		this.checkUser = this.checkUser.bind(this);
		this.password = this.password.bind(this);
	}
	username(event) {
		this.setState({ username: event.target.value });
	}
	password(event) {
		this.setState({ password: event.target.value });
	}
	function2() {
		console.log("akshat username", this.props.user);

		this.setState({loading:false})
	}
	checkUser() {
		this.props.getUsername(this.state.username, this.state.password);
		this.setState({loading:true})
		setTimeout(this.function2, 3000);
	}

	render() {
		return (
			<div>
				<h2 className="header">Login</h2>
				<br />
				<input className="center-text textfield"
					type="text"
					name="email"
					placeholder="Username or Email"
					value={this.state.username}
					onChange={this.username} />
				<br />
				<input className="center-text textfield"
					type="text"
					name="password"
					placeholder="Password"
					value={this.state.password}
					onChange={this.password} />
				<br /><br />
				<input className="center-text submit btn btn-primary"
					type="submit"
					value="Login" onClick={this.checkUser} /><br />
					{this.state.loading ? <div><Loading /><br /><br /></div> : ''}
				<Link to='/register' className="text-success">Not registered yet! Sign Up!</Link>
			</div>);
	}
}

function mapStateToProps(state, ownProps) {
	//state is store
	return {
		user: state.chat
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		getUsername:getUsername
	}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
