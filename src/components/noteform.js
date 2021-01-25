import React,{useState,useEffect} from 'react'
import axios from 'axios'
import '../style/login.css'
import '../style/addform.css'
import swal from 'sweetalert'




const NoteForm =(props)=>{
    const {notes,setNotes} = props
    // const {formSubmit,isSaved,toggleIsSaved, id: slno, title:tasktitle,status :taskstatus} = props
    // const {formSubmit} = props
    const [title,setTitle] = useState("")
    const [body,setbody] =useState("")
    const [formErrors,setFormErrors] =useState({})
    const errors ={}

    // useEffect(()=>{
    //    if(isSaved){
    //        setSattus(false)
    //        setTitle("")
    //        setId(uuidv4())
    //        toggleIsSaved()
    //    }

    // },[isSaved])

    const add=(note)=>{
        setNotes([note,...notes])
    }
    
    const formSubmit =(note)=>{
        console.log(note)
        
        axios.post("http://dct-user-auth.herokuapp.com/api/notes",note,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                add(result)
                swal("success!", "Succesfully Task Added", "success")
                
                
          })
            .catch((err)=>{
                alert(err.message)
            })
            
        
           
    }

    const runValidations =()=>{
        if(title.trim().length === 0){
            errors.name = 'title cannot be blank'
        }

    }

    const handleTitle =(e)=>{
        setTitle(e.target.value)
    }

    const handlebody =(e)=>{
        setbody (e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        runValidations()

        if(Object.keys(errors).length === 0) {
            setFormErrors({})
            console.log(body)
            const formData = {
                title:title,
                body:body
        }
        formSubmit(formData)
        setTitle("")
        setbody("")
        } else {
                console.log('form errors', errors)
                setFormErrors(errors)
                }

    }
    
    
    return (<div className="form1">
    <div className="cardsize1">
        <form onSubmit ={handleSubmit}>
        <div class="card">
        <div class="card-body">
            <h5 class="card-title">Add New Task</h5>
            <div class="mb-3">
        <input type="text" class="form-control" value ={title} id="formGroupExampleInput" placeholder="Task Title"  onChange={handleTitle} />
        </div>
        <div class="form-floating">
        <textarea class="form-control" value={body}onChange={handlebody} placeholder="Task Details" id="floatingTextarea2" ></textarea>
        </div><br/>
        <input type ="submit" value="Add" class="btn btn-success"/>
  </div>
</div>     
</form>
    </div>
    </div>)
}

export default NoteForm