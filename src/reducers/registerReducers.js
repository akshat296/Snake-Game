export default function registerReducers(state ={}, action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        console.log("registerReducers:",action.payload);
        return {register:action.payload};
        case 'ERROR':
            return {register:action.payload};
        default :
        return state;
    }
} 