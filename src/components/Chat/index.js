import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';

class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleUsername = this.handleUsername.bind(this);  
    }

    componentDidMount() {
        this.socket = io('/chat')
        this.socket.on('message', message => {
            this.setState({
                messages: [message, ...this.state.messages]
            })
        });
        this.socket.on('login', username => {
            this.setState({
                username:username
            })
        })
        this.socket.on('user joined', username => {
            this.setState({
                username
            })
        })
    }

    handleSubmit(event) {
        const body = event.target.value;
        if (event.keyCode === 13 && body) {
            const message = {
                body,
                from: 'Me: '
            }
            this.setState({ messages: [message, ...this.state.messages] });
            this.socket.emit('message', body)
            event.target.value = '';
        }
    }
    handleUsername(event) {
        const username = event.target.value;
        if (event.keyCode === 13 && username) {
            this.socket.emit('add user', username)
            event.target.value = '';
        }}
    

    render() {
        const messages = this.state.messages.map((message, index) => {
            return <div key={index}><li><b>{message.from}</b> {message.body}</li><br /></div>;
        })
        return (<div >
                <input type="text" placeholder="Enter a Name..." onKeyUp={this.handleUsername}/>
                <br/>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt distinctio adipisci voluptatibus consectetur repudiandae incidunt, officia, debitis, nemo vero aspernatur et corrupti alias sint possimus consequuntur ducimus. Dicta, consectetur quasi.
                <input type="text" placeholder="Enter a Value..." onKeyUp={this.handleSubmit}/>
                {messages}
        </div>);
    }
}

function mapStateToProps(state, ownProps) {
    return {
    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
