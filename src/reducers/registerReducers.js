export default function registerReducers(state ={}, action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        // contains array of objects
        return {register:action.payload};
        case 'ERROR':
            return {register:action.payload};
        default :
        return state;
    }
} 