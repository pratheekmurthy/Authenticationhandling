import React,{useState} from 'react'
import NoteForm from './noteform'



const AddNote=(props)=>{
    // const {addItem} =props
    // const [isSaved,setIsSaved] = useState(false)


    const formSubmit =(note)=>{
        
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

    
    
    return (<div>
        <h2>Add Task</h2>
        <NoteForm formSubmit={formSubmit} />
    </div>)
}

export default AddNote
