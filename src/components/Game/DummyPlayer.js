import React, { Component } from 'react';
import '../../App.css';
//import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import io from 'socket.io-client';
import _ from 'lodash';
class DummyPlayer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            px: 10, py: 10, gs: 20, tc: 20, xv: 0, yv: 0, trail: [], tail: 5, ax: 15, ay: 15, name: "Default"

        };
        //postion x and position y
        //grid size and tail count
        //x velocity and y velocity
        //apple x position and apple y position
        this.game = this.game.bind(this);
    
this.key=this.key.bind(this);    }
   
    
 
    
    componentWillReceiveProps(nextProps){
        this.setState({
            px: nextProps.px,py: nextProps.py,gs: nextProps.gs,tc: nextProps.tc,xv: nextProps.xv,yv: nextProps.yv,trail: nextProps.trail,
            tail: nextProps.tail,ax: nextProps.ax,ay: nextProps.ay,name:nextProps.name
        });
    //console.log("Dummy State will recive: ==>",nextProps);
   
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(!_.isEqual(this.state,nextProps)){
        var canv = document.getElementById(this.state.name);
        this.key();
        var ctx = canv.getContext('2d');
       
         this.game(ctx, canv);
         //console.log("Dummy State should up true: ==>",nextProps,nextState);
        //  setTimeout(() => {
        //      debugger;
        //  }, 3000);
         //console.log("Dummy State2: ==>",this.state);
       return true;
        }
        //console.log("Dummy State should up false: ==>",nextProps);
        return false;
       
    }
    componentDidMount() {
        
           
            //3
        
    }



    game(ctx, canv) {

        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, canv.width, canv.height);
        for (var i = 0; i < this.state.trail.length; i++) {

            if (i === this.state.trail.length - 1) {
                ctx.fillStyle = "yellow";
            }
            else {
                ctx.fillStyle = "lime"
            }
           // console.log("Dummy State3: ==>",this.state);
            ctx.fillRect(this.state.trail[i].x * this.state.gs, this.state.trail[i].y * this.state.gs, this.state.gs - 2, this.state.gs - 2);



            }
            ctx.fillStyle = "red";
            ctx.fillRect(this.state.ax * this.state.gs, this.state.ay * this.state.gs, this.state.gs - 2, this.state.gs - 2);
        }

       
       
    
    key(){
        // if (this.state.xv !== 1) {
        //     this.setState({ xv: -1, yv: 0 });

        // }
       
        // if (this.state.yv !== 1) {
        //     this.setState({ xv: 0, yv: -1 });

        // }
        // if (this.state.xv !== -1) {
        //     this.setState({ xv: 1, yv: 0 });

        // }
        // if (this.state.yv !== -1) {
        //     this.setState({ xv: 0, yv: 1 });

        // }
    }
   
    render() {
        //console.log("Dummy Render: ==>",this.state);
        
             //debugger;
         
        return (
            <div>
            <canvas id={this.state.name} width="400" height="400"
                style={{ backgroundColor: "silver" }} >
            </canvas>
            </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(DummyPlayer);
