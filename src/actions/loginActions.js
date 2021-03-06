import axios from 'axios';
export const getUsername = (email, password) => {
   return  function(dispatch){
        axios.get(`http://localhost:9001/users/getuser?email=${email}&password=${password}`).then((response)=>{
            if(response.data.status === "OK"){
                console.log("in result",response.data.result)
                 dispatch({type: "SUCCESS",payload: response.data.result})
            }
        }).catch((error)=> {dispatch({type: "ERROR",status: 'error'})});
    }
 };
 