import React,{useState,useEffect} from 'react'
import axios from 'axios'
import NotesList from './Noteslist'
import NoteForm from './noteform'

const Notes =(props)=>{
    const [notes,setNotes] = useState([])
    const [token,setToken] = useState("")

        useEffect(()=>{
            const token=localStorage.getItem("token")
            setToken(token)
    
            axios.get("http://dct-user-auth.herokuapp.com/api/notes", { headers : { 'x-auth' : token}})
            .then((response)=>{
                const result = response.data;
                // console.log(result)
                setNotes(result);
                
            })
            .catch((err)=>{
                console.log(err.message);
            })
        },[])
        
        

    return (<div>
       <NotesList notes={notes} setNotes={setNotes} />
       <NoteForm notes={notes} setNotes={setNotes}/>
    </div>)
}

export default Notes