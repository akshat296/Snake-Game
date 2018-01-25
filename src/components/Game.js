import React, { Component } from 'react';
import '../App.css';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import { setTimeout } from 'core-js/library/web/timers';


class Game extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
        px:10,py:10,gs:20,tc:20,xv:0,yv:0,trail:[],tail:5,ax:15,ay:15,name:'Random',maintain:0
    }; 
    //postion x and position y 
    //grid size and tail count
    //x velocity and y velocity
    //apple x position and apple y position
   this.timer=this.timer.bind(this);
   this.game=this.game.bind(this);
   this.keyPush=this.keyPush.bind(this);
 //this.handleLoad=this.handleLoad.bind(this);
  }
  componentWillMount(){
    if(this.state.maintain===0){
        //console.log("component will mount props name",this.props.name)
        this.setState({name:this.props.name});
        //this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
   }
  }
componentDidMount(){
  //  window.addEventListener('load', this.handleLoad);
  this.socket = io('/')
  this.socket.on('player', obj => {
   //console.log('did mount player 3 object',obj);

     this.setState({px:obj.px,py:obj.py,gs:obj.gs,tc:obj.tc,xv:obj.xv,yv:obj.yv,trail:obj.trail
        ,tail:obj.tail,ax:obj.ax,ay:obj.ay,name:obj.name,maintain:1});
        console.log('did mount player 3 object2',obj.gs,obj);
        console.log('did mount player 3 state',this);
        var canv=document.getElementById(this.state.name);
        var ctx =canv.getContext('2d');
        document.addEventListener("keydown",this.keyPush);
        this.timer= setInterval(()=>{this.game(ctx,canv)},1000/25); 

});

       // console.log("props name",this.props.name)
        //this.setState({name:this.props.name});
        if(this.state.maintain===0){
var canv=document.getElementById(this.state.name);
this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:0})
this.setState({maintain:1});
this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:0})
var ctx =canv.getContext('2d');
document.addEventListener("keydown",this.keyPush);
this.timer= setInterval(()=>{this.game(ctx,canv)},1000/15);
  //3
   
        }
}
timer(){
    return null;
}


game(ctx,canv){
    //var canv=document.getElementById("gc");
   
    this.setState({px:(this.state.px+this.state.xv)});
    //console.log('player 1 px',this.state.px);
    //this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    this.setState({py:(this.state.py+this.state.yv)});
   
    //console.log('player 1 py',this.state.py);
	this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain});
    if(this.state.px<0){
        this.setState({px:this.state.tc-1});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    }
    if(this.state.px>this.state.tc-1){
        this.setState({px:0});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    }
    if(this.state.py<0){
        this.setState({py:this.state.tc-1});
        //console.log('player 1 py',this.state.py);
	this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain});
    }
    if(this.state.py>this.state.tc-1){
        this.setState({py:0});
        //console.log('player 1 py',this.state.py);
	this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain});
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    
    //ctx.fillStyle="lime";
    // 
    // 
    
    for(var i=0;i<this.state.trail.length;i++){
    // 
    if(i===this.state.trail.length-1){
        ctx.fillStyle="yellow";  
    }
    else{
        ctx.fillStyle="lime"
    }
     
    ctx.fillRect(this.state.trail[i].x*this.state.gs,this.state.trail[i].y*this.state.gs,this.state.gs-2,this.state.gs-2);
    if(this.state.trail[i].x===this.state.px && this.state.trail[i].y===this.state.py ){
        ctx.fillStyle='pink';
        ctx.font="50px Georgia";
        ctx.fillText("Game Over!",70,80);
       
        if(this.state.xv !== 0 || this.state.yv !== 0){
        clearInterval(this.timer);}
        this.setState({tail:5});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})

    }
    
    }
     
var b={x:this.state.px,y:this.state.py};
// this.setState(prevState => ({
//     trail: [...prevState.trail, b]
// }))
this.setState({trail:[...this.state.trail,b]});
this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})

//this.setState({trail:c});
while(this.state.trail.length>this.state.tail){
    var abc=this.state.trail;
    abc.shift();
    this.setState({trail:abc});
    this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
}
if(this.state.ax===this.state.px && this.state.ay === this.state.py){
    
    this.setState({tail:this.state.tail+10});
    this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    this.setState({ax:Math.floor(Math.random()*this.state.tc)});
    this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    this.setState({ay:Math.floor(Math.random()*this.state.tc)});
    this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})

}
    ctx.fillStyle="red";
    ctx.fillRect(this.state.ax*this.state.gs,this.state.ay*this.state.gs,this.state.gs-2,this.state.gs-2);
}
keyPush(evt){
    
    
    switch(evt.keyCode){
        case 37://left
        if(this.state.xv !== 1){
        this.setState({xv:-1,yv:0});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
        //this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    }
        break;
        case 38://up
        if(this.state.yv !== 1){
        this.setState({xv:0,yv:-1});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
        //this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    }
       //  
        break;
        case 39://right
        if(this.state.xv !== -1){
        this.setState({xv:1,yv:0});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
        //this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
    }
        // 
        break;
        case 40://down
        if(this.state.yv !== -1){
        this.setState({xv:0,yv:1});
        this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})
        //this.socket.emit('player',{px:this.state.px,py:this.state.py,gs:this.state.gs,tc:this.state.tc,xv:this.state.xv,yv:this.state.yv,trail:this.state.trail,tail:this.state.tail,ax:this.state.ax,ay:this.state.ay,name:this.state.name,maintain:this.state.maintain})    
    }
        // 
        break;
        default:
        break;
    }
}
  render() {
    console.log("in render state",this.state)
    return (
            <canvas id={this.state.name} width= "400" height="400"  
            style={{backgroundColor:"silver"}} >
            </canvas> 
    );
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
  export default connect(mapStateToProps,mapDispatchToProps)(Game);
  