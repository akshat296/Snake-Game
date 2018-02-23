import axios from 'axios';

export const getChatInfo = () => {
   return  function(dispatch){
        axios.get(`http://localhost:3037/getChatInfo`).then((response)=>{
           // console.log("Testing In Chat Actions: ",response);
            if(response.data.status === "OK"){
                //contains name: "test" in a array of response.data.result
                 dispatch({type: "SUCCESS",payload: response.data.result})
            }
        }).catch((error)=> {dispatch({type: "ERROR",status: 'error'})});
    }
 };
//  async CountriesData() {
//     try{
//         let {status,data} = await axios.get('http://localhost:8080/demo/get');
//         return status===200 ? data:{};
//     }catch(err){
//         throw err;
//     }
//   }
//   async componentDidMount() {
//     let data = await this.CountriesData()
//     this.setState({CountriesData: data});

//   }