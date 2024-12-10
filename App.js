import React , {useState} from 'react'

const App = () => {
  const[add,setadd]=useState(0);
  const adde = () =>{
    setadd(curr=>curr+1)
  }
  return (
    <div>
      <h1>Count : {add}</h1>
      <button onClick={adde}>Add</button>
    </div>
  )
}

export default App
