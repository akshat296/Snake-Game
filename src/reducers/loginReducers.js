export default function loginReducers(state = [], action)
{
    switch(action.type)
    {
        case 'SUCCESS': 
        return [...state,Object.assign({},action.payload)];
        case 'ERROR':
            return [...state, Object.assign({},action.payload)];
        default :
        return state;
    }
} 