import Sidebar from "./Sidebar"
import Notes from "./Notes"
import Edit from './Edit'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {useState} from "react"
import { Navigate } from "react-router-dom"
function App() {
  let [data,setData] = useState([
    {
        title:"Feedbacks",
        content:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis.",
},
{      
        title:"Weekly Task",
        content:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
}
])

  return (
    <>
     <div id='wrapper'>
      <BrowserRouter>
      <Sidebar/>
      <Routes>
        <Route path='/notes' element={<Notes data={data} setData={setData}/>}/>
        <Route path='/edit/:id' element={<Edit data={data} setData={setData}/>}/>
        <Route path='*' element={< Navigate to='/notes'/>}/>
      </Routes>
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
