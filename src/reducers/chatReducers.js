export default function loginReducers(state ={}, action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        return {type:action.type,chat:action.payload};
        case 'ERROR':
            return {type:aciton.type,chat:action.payload};
        default :
        return state;
    }
} 