import React from 'react'
export const NotesDataContext = React.createContext(null)
import { useState } from 'react'

function NotesContext({children}) {
    let [data,setData] = useState([
        {
            title:"Feedbacks",
            content:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis.",
    },
    {      
            title:"Weekly Task",
            content:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
    },
    {      
        title:"Lyrics",
        content:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
}

])
  return <NotesDataContext.Provider value={{data,setData}}>
            {children}
        </NotesDataContext.Provider>
      
  
}

export default NotesContext
