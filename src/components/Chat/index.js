import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import './Chat.css'
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username:'',
            chatterShow:false
        };
        this.handleSubmit = this.handleSubmit.bind(this);
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
                from: 'You: '
            }
            this.setState({ messages: [message, ...this.state.messages], chatterShow:true});
            if(this.props.username){
            this.socket.emit('add user', this.props.username);
        }
            this.socket.emit('message', body)
            event.target.value = '';
        }
    }

    

    render() {
        
        var chatterStatus =  this.state.chatterShow ?  "chatter showChatter":"chatter hide";
        const messages = this.state.messages.map((message, index) => {
            return <div key={index}><li className="list"><b>{message.from}</b> {message.body}</li><br /></div>;
        });
        const chatter = this.props.username ? (<div><h2>Chatter</h2><input type="text" placeholder="Enter a Value..." onKeyUp={this.handleSubmit}/>
        <br/><br/>
        <div  className = {chatterStatus}>
                
                {messages}
    </div></div>):<div></div>;
        return (<div className="center">
                {chatter}
                
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
