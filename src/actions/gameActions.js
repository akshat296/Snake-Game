import axios from 'axios';



export const getGame = () => {
   return  function(dispatch){
        axios.get(`http://localhost:3037/getGameData`).then((response)=>{
            console.log(response);
            if(response.data.status === "OK"){
                //contains name: "test" in a array of response.data.result
                 dispatch({type: "SUCCESS",payload: response.data.result})
            }
        }).catch((error)=> {dispatch({type: "ERROR",status: 'error'})});
    }
 };
