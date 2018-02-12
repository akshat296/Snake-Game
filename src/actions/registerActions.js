import axios from 'axios';
export const registerUser = (name,username,email,password) => {
    return function(dispatch){
        axios.post(`http://localhost:9001/users/create?name=${name}&email=${email}&username=${username}&password=${password}`)
        .then((response)=>{
        if(response.data.status==="OK"){
            dispatch({type: "SUCCESS",payload:response.data.result});
        }
    }).catch((error)=>dispatch({type: "ERROR"}));
}};