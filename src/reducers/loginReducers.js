export default function loginReducers(state ={}, action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        return {login:action.payload};
        case 'ERROR':
            return {login:action.payload};
        default :
        return state;
    }
} 