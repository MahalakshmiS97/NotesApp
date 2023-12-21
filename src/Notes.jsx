  import React,{useContext,useState} from 'react'
  import Button from 'react-bootstrap/Button';
  import icon from './images/noteicon.png';
  import { useNavigate } from 'react-router-dom';
  import { NotesDataContext } from './Context/NotesContext';
  import { Formik } from 'formik';
  import * as Yup from 'yup'
  function Notes() {
    let {data,setData} = useContext(NotesDataContext)
    const navigate=useNavigate()

    const noteSchema = Yup.object().shape({
      title:Yup.string().required('* Required'),
      content:Yup.string().required('* Required'),
    })
    let handleDelete = (index)=>{
      let newArray=[...data]
      newArray.splice(index,1)
      console.log(data)
      setData(newArray)
    }
    return <>
    <Formik
    initialValues={{
        title:"",
        content:""
    }}

    validationSchema={noteSchema}
    onSubmit={(values)=>{
      let newArray=[...data]
      newArray.push(values)
      setData(newArray)
    }}
    >
      {({errors,touched,handleBlur,handleSubmit,handleChange})=>(
        <form onSubmit={handleSubmit}>
             <div className="div1" >
             <div className="wrapper">
          <div className="mb-3">
             <h3>Add a Note</h3>
      
       <label htmlFor="exampleFormControlInput1" className="form-label"></label>
       <input type="text" className="form-control" id="exampleFormControlInput1" name='title'placeholder="Title" onBlur={handleBlur} onChange={handleChange}/>
       {errors.title && touched.title ? <div style={{color:"red"}}>{errors.title}</div>:null}
     </div>
     <div className="form-floating">
       <textarea className="form-control" placeholder="Leave a comment here" onBlur={handleBlur} onChange={handleChange} id="floatingTextarea2" name = 'content' style={{height: "100px"}} ></textarea>
       <label htmlFor="floatingTextarea2">Take a note...</label>
       {errors.content && touched.content ? <div style={{color:"red"}}>{errors.content}</div>:null}
     </div>
     </div>
     &nbsp; &nbsp;<Button type="submit">Add Note</Button>
     </div>
     </form>
        )}
    
    </Formik>
  <div className="view">
      <div className="mynote"><img className="img1" src={icon}/>&nbsp; &nbsp;MY Notes</div>
      <div className="recent">Recently viewed</div>
      </div>
  <div className="row row-cols-1 row-cols-md-3 g-4 div2">
      {
      data.map((e,i)=>{
        return <div key={i}>
        <div className="col">
        <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">{e.title}<span><i className="fa-solid fa-pencil" style={{color:"#203562"}} onClick={()=>{
            navigate(`/edit/${i}`)
          }}>&nbsp;&nbsp;</i>
          <i className="fa-regular fa-trash-can" style={{color:"#203562"}} onClick={()=>handleDelete(i)}></i></span></h5>
          <p className="card-text">{e.content}</p>
        </div>
        <div className="card-footer">
          <small className="text-body-secondaryclassName">Last updated 3 mins ago</small>
        </div>
      </div>
      </div>
      </div>
      })
  }
    </div>
  </>
  }

  export default Notes
