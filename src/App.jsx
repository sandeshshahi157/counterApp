import { useState } from 'react'
import './index.css'
import './App.css'

function App() {
   
  const [count, setCount] = useState(0);
  function updateCount() {
    setCount(count + 1);
  }
  function resetCount(){
  
        setCount(0);
    
  }


  return (
    <>
      <div className="container-sm bg-black rounded-xl overflow-hidden shadow-md  container2">
        <p className="header text-white text-center text-2xl p-2">Counter App</p>
        <p className="text-white text-center text-3xl p-5">{count}</p>

        <div className="Buttons p-3 ">
        <button
          className="Button2  rounded "
          onClick={updateCount}
        >
          Count
        </button>
        <button
          className="Reset rounded  "
          onClick={resetCount}
        >
           Reset
        </button>
        </div>
      </div>
    </>
  )
}

export default App
