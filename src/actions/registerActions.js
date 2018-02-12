import axios from 'axios';
export const registerAction = (name,username,email,password) => {
    return function(dispatch){
        axios.post(`http://localhost:9001/users/create?name=${name}&email=${email}&username=${username}&password=${password}`)
        .then((response)=>{
        if(response.data.status==="OK"){
            dispatch({type: "SUCCESS",payload:response.data.result});
        }
    }).catch((error)=>dispatch({type: "ERROR"}));
}};
export const userExistsCheckAction = (username) => {
    return function(dispatch){
        axios.get(`http://localhost:9001/users/userAlreadyExists?username=${username}`)
        .then((response)=>{
       
        if(response.data.status==="OK"){
            dispatch({type: "SUCCESS",payload:response.data.result});
        }
    }).catch((error)=>dispatch({type: "ERROR"}));
}};