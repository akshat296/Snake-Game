import axios from 'axios';
export const registerUser = (username,email,password,confirm_password) => {
    return function(dispatch){
        axios.post(`http://localhost:9001/users/registeruser?email=${email}&username=${username}&password=${password}`)
        .then((response)=>{
        if(response.data.status==="OK"){
            console.log(response);
            dispatch({type:"SUCCESS",payload:response.data.result})
        }
    }).catch((error)=>{type:"ERROR"});
}};