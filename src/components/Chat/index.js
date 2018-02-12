import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import './Chat.css'
import { getChatInfo } from '../../actions/chatActions';
class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            username:'',
            color:"#473",
            chatterShow:false,
            numUsers:1,
            userLeft:''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        
        this.socket.on('message', message => {
            this.setState({
                messages: [{text :message.text,color:message.color,from:message.from}, ...this.state.messages]
            });

        });
       this.socket.on('user left', Users => {
            this.setState({
                numUsers:Users.numUser,
                userLeft:Users.username

            });

        })
     
    }
    componentWillMount(){
        var abc = this.props.getChatInfo();
        this.socket = io('/chat')
        this.socket.on('user joined', userData => {
            this.setState({
                username:userData.username,
                color:userData.color,
                numUsers:userData.numUsers,
                messages:userData.msgData
            })
        })
        
    }
    handleSubmit(event) {
        const text = event.target.value;
        if (event.keyCode === 13 && text) {
            const message = {
                text,
                from: 'You: '
            }
            this.setState({ messages: [{text :text,color:this.state.color,from:"You: " }, ...this.state.messages], chatterShow:true});
            if(this.props.username){
            this.socket.emit('add user', this.props.username,text);
        }
       
            this.socket.emit('message', text)
            event.target.value = '';
        }
    }

    

    render() {
        var chatterStatus =  this.state.chatterShow ?  "chatter showChatter":"chatter hide";
        const messages = this.state.messages.map((message, index) => {
            return <div key={index}><li className="list" style={{color:message.color}}><b>{message.from}</b> {message.text}</li><br /></div>;
        });
        const chatter = this.props.username ? (<div><h2>Chatter</h2><input type="text" placeholder="Enter a Value..." className = "chatterInput" onKeyUp={this.handleSubmit}/>
        <br/><br/>
        <div  className = {chatterStatus}>
                
                {messages}
    </div></div>):<div></div>;
        return (<div className="center">
                {chatter}
                {/* <p className = "text-success">Number of Users Online - {this.state.numUsers}</p>  */}
                
        </div>);
    }
}

function mapStateToProps(state, ownProps) {
    
    //console.log(state);
    return {

    };
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getChatInfo:getChatInfo
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
