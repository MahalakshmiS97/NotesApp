import React, { useState,useContext,useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { NotesDataContext } from './Context/NotesContext';
const Edit=()=> {
    const params = useParams()
    const {data,setData}= useContext(NotesDataContext)
    let [title,setTitle]=useState("")
    let [content,setContent]=useState("")
    let navigate = useNavigate()

    const getData=(index)=>{
        setTitle(data[index].title)
        setContent(data[index].content)
    }

    useEffect(()=>{
        if(Number(params.id)<data.length)
        {
          getData(Number(params.id))  
        }
        else{
            navigate('/notes')
        }
    },[])
    const handleEdit=()=>{
        let newArray =[...data]
        newArray.splice(Number(params.id),1,{
            title,
            content
        })
        setData(newArray)
        navigate('/notes')
    }
    
  return <div className="div1">
  <div className="wrapper">
<div className="mb-3">
  <h3>Add a Note</h3>
<label  className="form-label"></label>
<input type="text"  className="form-control" value={title} placeholder="Title"  onChange={(e)=>setTitle(e.target.value)}/>
</div>
<div className="form-floating">
<textarea className="form-control" value={content} placeholder="Leave a comment here" id="floatingTextarea2" style={{height: "100px"}} onChange={(e)=>setContent(e.target.value)}></textarea>
<label >Take a note...</label>
</div>
</div>
&nbsp; &nbsp;<Button onClick={()=>handleEdit()}>Add Note</Button>

</div>

  
}

export default Edit
