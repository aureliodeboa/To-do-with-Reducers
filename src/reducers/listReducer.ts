import { Item } from "@/types/Item";


type AddAction = {
    type: 'add';
    payload: {
        text: string;
    }
}

type  EditTextAction = {
    type: 'editText';
    payload: {
        id :number;
        newText: string;
    }
}

type ToggleAction = {
    type: 'toogleDone';
    payload: {
        id: number;
       
    }

}

type RemoveAction = {
    type:'removeAction';
    payload:{
        id:number;
    }
}



type ListActions= AddAction| RemoveAction | ToggleAction | EditTextAction;

export const listReducer = (list: Item[], action: ListActions): Item[] =>{

    switch (action.type){
        case 'add':
            return[...list,{
                id: list.length,
                text: action.payload.text,
                done:false,
            }]

        case 'editText': 
        return(list.map(element=>{
            if(element.id === action.payload.id)
                {
                    element.text= action.payload.newText;
                }
            return element;   
        }));

        case 'toogleDone':
            return list.map(e => {
                if(e.id == action.payload.id){
                    e.done= !e.done;
                    
                }
                return e;
            })
        
        case 'removeAction': 
            return list.filter(element=>element.id !== action.payload.id);

        default:
            return list;
        
    }


    
}