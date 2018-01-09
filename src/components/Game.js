import React, { Component } from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Game extends Component {
  
    constructor(props) {
    super(props);
    this.state = {
        px:10,py:10,gs:20,tc:20,xv:0,yv:0,trail:[],tail:5,canv:null,ctx:null
    }; 
    
   this.snake=this.snake.bind(this);
   this.game=this.game.bind(this);
   this.keyPush=this.keyPush.bind(this);
   
  }
componentWillMount(){
   
}
snake(){
   var canv=document.getElementById("gc");
   var ctx=canv.getContext("2d");
    document.addEventListener("keydown",this.keyPush);
    setInterval(this.game,1000/15);
}




game(){
    this.setState({px:this.state.px+this.state.xv});
    this.setState({py:this.state.py+this.state.yv});
    if(this.state.px<0){
        this.setState({px:this.state.tc-1});
    }
    if(this.state.px<this.state.tc-1){
        this.setState({px:0});
    }
    if(this.state.py<0){
        this.setState({py:this.state.tc-1});
    }
    if(this.state.py>this.state.tc-1){
        this.setState({py:0});
    }
    ctx.fillStyle="black";
    ctx.fillRect(0,0,canv.width,canv.height);
    
    ctx.fillStyle="lime";
    for(var i=0;i<this.state.trail.length;i++){
    ctx.fillRect(this.state.trail[i].x*this.state.gs,this.state.trail[i].y*this.state.gs,this.state.gs-2,this.state.gs-2);
    if(this.state.trail[i].x==this.state.px && this.state.trail[i].y==this.state.py ){
        this.state.tail=5;

    }
}
this.setState({trail:this.state.trail.push({x:this.state.px,y:this.state.py})});
while(this.state.trail.length>this.state.tail){
    this.setState({trail:this.state.trail.shift()});
}
if(this.state.ax==this.state.px && this.state.ay==this.state.py){
    this.setState({trail:this.state.tail+1});
    this.setState({ax:Math.floor(Math.random()*this.state.tc)});
    this.setState({ay:Math.floor(Math.random()*this.state.tc)});

}
    ctx.fillStyle="red";
    ctx.fillRect(this.state.ax*this.state.gs,this.state.ay*this.state.gs,this.state.gs-2,this.state.gs-2);
}
keyPush(evt){
    switch(evt.keyCode){
        case 37:
        this.setState({xv:-1,yv:0});
        break;
        case 38:
        this.setState({xv:0,yv:-1});
        break;
        case 39:
        this.setState({xv:1,yv:0});
        break;
        case 40:
        this.setState({xv:0,yv:1});
        break;
    }
}
  render() {
    
    

    return (
      
            <canvas id="gc" width= "400" height="400"  style={{backgroundcolor:'red'}} >
           
            <div onLoad = {this.snake}></div>
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
  