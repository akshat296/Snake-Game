import React, { Component } from 'react';
import '../box.css';
import { connect } from 'react-redux';
import Box from './box'

class SidePanel extends Component {

    constructor(props)
    {
        super(props);
        this.iterate = this.iterate.bind(this);
        
    }
    iterate(item) {
   let color = " col-sm-4 boxStructure animation yellow";
   let   boxStructure 
        if(item.completed === true)
        {
            color = " col-sm-4  boxStructure animation green";
        }

        if(this.props.editCourses !==  item)
        {
           
            boxStructure  =
           
            <div key={item.id} className={color}>
                <table border = "0">
                    <thead><tr><th>To-do-Title</th></tr></thead>
                    <tbody><tr><td>{item.title}</td></tr></tbody>
                    <thead><tr><th>To-Do-Description</th></tr></thead>
                    <tbody><tr><td>{item.description}</td></tr></tbody>
                    <thead><tr><th>Date-Added</th></tr></thead>
                    <tbody><tr><td>{item.date.toString()}</td></tr></tbody>
                    <thead><tr><th>Completed Status</th></tr></thead>
                    <tbody><tr><td>{item.completed.toString()}</td></tr></tbody></table>
                    </div>
           }
            else{
                
                boxStructure  =
                <div key={item.id} className="col-sm-4 editbox">
                
               <Box num={item.id}> </Box>
               </div>
            }

        return boxStructure;
    }
    render() {

        return (<div className="row"><div className="box">{this.props.courses.map(this.iterate)}</div></div>);
    }

}
function mapStateToProps(state, ownProps) {

    return {
        courses: state.courses
    };
}
export default connect(mapStateToProps)(SidePanel);