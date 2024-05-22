"use client"

import { listReducer } from "@/reducers/listReducer"
import { Item } from "@/types/Item"
import { useReducer, useState } from "react"

const Page = () =>{

  const [list, dispatch] = useReducer(listReducer, []); // uso o useReducer (tenho que colocar o dispatch), e no useRecudcer(o tipo da lista, lista inical)
  const [addField,setaddField]= useState('');
  const [editField,seteditField] = useState('')

  const handleAddClick= () => {
    if(addField.trim()=== '') return false;
    dispatch({
      type:'add',
      payload: {
        text:  addField
      }
    }
     
    )
    setaddField('');
  }

  const handleEditlist = (id:number) =>{
    const item = list.find(it=> it.id ===id );
    if(!item) return false;

    const newText = window.prompt('Edit task', item.text);
    if(!newText || newText?.trim()==='') return false;

    dispatch({
      type: 'editText',
      payload:{
        id,
        newText
      }
    })
  }

  const handleRemovelist= (id:number)=>{
    dispatch({
      type: 'removeAction',
      payload:{
        id
      }
    })
  }

  const handleToogledone = (id: number) => {
  dispatch({
    type:'toogleDone',
    payload: {id}
  });
  }
  
  

  return(
    <div className="container mx-auto ">
        <h1 className=" text-4xl text-center p-2">To do List</h1>
      <div className="max-w-2xl mx-auto flex rounded-md bg-gray-900 border border-gray-400 p-4 my-4">
      
      <input 
      className="flex-1 rounded-md border border-white p-3 bg-transparent textwhite outline-none"
      title="add" type="text" name="Adicioncar tarefa " 
      value={addField}
      onChange={e=>setaddField(e.target.value)}
      /> 
      <button className="bg-blue-400 m-2 rounded-sm  p-4 " 
      title="adicionar"
       onClick={handleAddClick}>Adicionar</button>



      </div>
      
      <ul className="max-w-2xl mx-auto">
         {list.map(item=>(
          <li 
            className="flex  items-center p-3 my-3 border-b border-gray-700"
            key={item.id}>
          
           <input
            className="w-6 h-6 mr-4"
            type="checkbox"
            defaultChecked={item.done}
            onChange={()=>handleToogledone(item.id)}
            />
           <p  className="flex-1 text-lg" > {item.text} </p>

           <button className="mx-4 bg-yellow-400 m-2 rounded-sm  " 
            title="editar" onClick={()=>handleEditlist(item.id)}> Editar
           </button>
           <button className="mx-4 bg-red-400 m-2 rounded-sm  " 
             title="Deletar" onClick={()=>handleRemovelist(item.id)}> Excluir
           </button>

           </li>
         ))}
      </ul>
     
   
    </div>
  )

}

export default Page;