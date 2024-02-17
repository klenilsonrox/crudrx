'use client'
import React from 'react'

const page = () => {
const [task,setTask]=React.useState("")
const  [tasks,setAllTasks]=React.useState([])
const inputRedf= React.useRef()
const [modal,setModal]=React.useState(false)
const [editingIndex, setEditingIndex] = React.useState(null);

function addTask(){
  setAllTasks([...tasks,task])
  setTask("")
  inputRedf.current.focus()
}


function deleteItem(index) {
  const updatedTasks = tasks.filter((_, i) => i !== index);
  setAllTasks(updatedTasks);
}

function openModalEdit(){

}

function editarItem(index) {
  const item = tasks[index];
  setModal(true);
  setTask(item);
  setEditingIndex(index);
}

function attItem() {
  if (editingIndex !== null) {
    const updatedTasks = [...tasks];
    updatedTasks[editingIndex] = task;
    setAllTasks(updatedTasks);
    setTask("");
    setModal(false);
    setEditingIndex(null);
  }
}


  
  return (
    <div className='max-w-md border mx-auto mt-2 w-screen p-2'>
      <div className='flex justify-between gap-2 items-center'>
      <input type="text" className='border flex-1 py-2' value={task} onChange={({target})=>setTask(target.value)} ref={inputRedf}/>
      <div className='flex gap-4'>
      {!modal && <button className='bg-purple-600 text-white px-4 flex items-center justify-center py-2' onClick={addTask}>add</button>}
      {modal && <button className='bg-green-600 px-2 text-white py-2' onClick={attItem}>atualizar</button>}
      </div>
      </div>

      <div className='mt-4 border-t'>
        <h1 className='text-center mt-2 border-b'>Tarefas</h1>
      </div>
      <div>
        {!modal && tasks.length > 0 ? <ul className='flex flex-col gap-4 mt-2'>
          {tasks && tasks.map((item,index)=> <li className='bg-slate-200 p-2 flex justify-between mx-2'><p>{item}</p><div className='flex gap-4'><button onClick={()=>editarItem(index)} className='bg-green-600 px-2 text-white'>editar</button><span className='cursor-pointer text-red-600 font-bold' onClick={()=>deleteItem(index)}>x</span></div></li> )}
        </ul> : <p className='text-center font-semibold'></p> }
      </div>

    </div>
  )
}

export default page
