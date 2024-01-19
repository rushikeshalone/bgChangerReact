import { useState } from 'react'

function App() {
  const [color ,setColor] = useState("Olive")
  
  return (
    <div className=' w-full h-screen duration-200 '
    style={{backgroundColor : color}}>

      <div className=' fixed flex flex-wrap  justify-center bottom-12 inset-x-0 px-2 '>
        <div className='flex flex-wrap just  gap-3 shadow-lg bg-white px-3 py-2 rounded-lg'>
          <button  onClick={()=>setColor("Red")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"Red"}}>Red</button>
          <button  onClick={()=>setColor("Green")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"Green"}}>Green</button>
          <button  onClick={()=>setColor("Yellow")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"Yellow"}}>Yellow</button>
          <button  onClick={()=>setColor("purple")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"purple"}}>Purpule</button>
          <button  onClick={()=>setColor("Blue")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"Blue"}}>Blue</button>
          <button  onClick={()=>setColor("Black")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"Black"}}>Black</button>
          <button  onClick={()=>setColor("Pink")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"pink"}}>pink</button>
          <button  onClick={()=>setColor("Orange")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"Orange"}}>Orange</button>
          <button  onClick={()=>setColor("brown")}
          className='outline-none px-4 rounded text-white shadow-lg py-1  ' style={{backgroundColor:"brown"}}>brown</button>
        </div>
      </div>
    </div>
  )
}

export default App
