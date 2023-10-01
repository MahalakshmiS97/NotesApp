import React from 'react'
export const NotesDataContext = React.createContext(null)

function NotesContext({children}) {
    let [data,setData] = useState([
        {
            title:"Feedbacks",
            note:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis.",
    },
    {      
            title:"Weekly Task",
            note:"Lorem ipsum dolor sit amet consectetur. Sollicitudin enim risus ut vestibulum morbi tellus sit ac. Fames auctor quisque et aliquam maecenas sed at vitae facilisis. .",
    }
])
  return <NotesDataContext.Provider value={{data,setData}}>
            {children}
        </NotesDataContext.Provider>
      
  
}

export default NotesContext
