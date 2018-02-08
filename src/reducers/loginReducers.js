export default function loginReducers(state ={}, action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        return {type:action.type,login:action.payload};
        case 'ERROR':
            return {type:aciton.type,login:action.payload};
        default :
        return state;
    }
} 