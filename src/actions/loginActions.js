import axios from 'axios';

export const getUsername = (email, password) => {
   return  function(dispatch){
        axios.get(`http://localhost:9001/users/getuser?email_or_username=${email}&password=${password}`).then((response)=>{
            if(response.data.status === "OK"){
               // console.log("in actions login ===>",response.data.result);
                //contains name: "test" in a array of response.data.result
                 dispatch({type: "SUCCESS",payload: response.data.result})
            }
        }).catch((error)=> {dispatch({type: "ERROR",status: 'error'})});
    }
 };
