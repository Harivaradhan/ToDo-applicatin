import logo from './logo.svg';
import {useState} from 'react';
import './App.css';

function App() {
  const[toDos,setTodos]=useState([])//we are adding to dos to array so we gave array to the brackets
  const[toDo,setToDo]= useState(' ')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>start day with planning 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setTodos([...toDos,{id:Date.now() ,text: toDo , status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {

          toDos.map(
            (value)=>{
              return(
                <div className="todo">
                <div className="left">
                  <input onChange={(e)=>{
                    console.log(e.target.checked)
                    setTodos(toDos.filter(obj2=>{
                      if(obj2.id==value.id)
                        {
                          obj2.status=e.target.checked

                        }return obj2;
                    }))
                  }} value={value.status} type="checkbox" name="" id="" />
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i onClick={()=>setTodos(toDos.filter(obj2=>(obj2.id!==value.id)))} className="fas fa-times"></i>
                </div>
              </div>
              )
           
          }
        )
      }
      {toDos.map((value)=>{
        if(value.status===true)
          {
            return(<h1>{value.text}</h1>)
          }
          return null
      }

      )}
      
      </div>
    </div>
  );
}

export default App;
