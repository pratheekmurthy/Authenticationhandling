import React,{useState,useEffect} from 'react'
import axios from 'axios'




const NoteForm =(props)=>{
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
    const formSubmit =(note)=>{
        console.log(note)
        
        axios.post("http://dct-user-auth.herokuapp.com/api/notes",note,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                alert("Added")
                
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
    
    
    return (<div>
        <form onSubmit ={handleSubmit}>
            <input type ="text" value ={title} onChange={handleTitle} placeholder="Title"/><br/>
            <textarea placeholder="body" onChange={handlebody}></textarea><br/>
            <input type ="submit" value="save"/>
        </form>
    </div>)
}

export default NoteForm