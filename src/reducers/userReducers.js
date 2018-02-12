export default function userExistsCheckReducers(state ={}, action)
{
    console.log("action user exists Reducers===>:",action);
    switch(action.type)
    {
        case 'SUCCESS': 
        // contains array of objects
        return {user:action.payload};
        case 'ERROR':
            return {user:action.payload};
        default :
        return state;
    }
} 