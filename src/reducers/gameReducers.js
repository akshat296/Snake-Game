export default function loginReducers(state ={}, action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        return {type:action.type,game:action.payload};
        case 'ERROR':
            return {type:aciton.type,game:action.payload};
        default :
        return state;
    }
} 