export default function courseReducers(state = [], action)
{
    switch(action.type)
    {
        case 'CREATE':
        return [...state, Object.assign({},action.payload)];

        case 'DELETE':
        return [...state.filter((item)=>{
             return item.id !== action.payload.id;
            })
          ];
        case 'DONE':
        
        return [...state.map((item) => {
            if(item.id === action.payload.id)
            {item.completed = true;
           }
            return item;
        })];  
        case 'EDIT':
        
        return [...state.map((item) => {
            if(item.id === action.payload.newpayload.id)
            {item.title = action.payload.newpayload.title;
             item.description =action.payload.newpayload.description;       
           }
            return item;
        })];  
        
      
  
        default :
        return state;
    }
} 