import React,{useState,useEffect} from 'react'
import axios from 'axios'
import {useSelector,useDispatch} from 'react-redux'
import {getNotes} from '../actions/notesActions'
import NotesList from './Noteslist'
import NoteForm from './noteform'

const Notes =(props)=>{
    // const [notes,setNotes] = useState([])
    const [token,setToken] = useState("")

    // const token1=localStorage.getItem("token")
    // setToken(token1)

    // const notes = useSelector(state => state.notes)
    // console.log(notes)
    // const dispatch =useDispatch()
    
       

    return (<div>
       {/* <NotesList notes={notes} setNotes={setNotes} />
       <NoteForm notes={notes} setNotes={setNotes}/> */}
      <NotesList/>
      <NoteForm/>
    </div>)
}

export default Notes


// useEffect(()=>{
//     const token=localStorage.getItem("token")
//     setToken(token)

//     axios.get("http://dct-user-auth.herokuapp.com/api/notes", { headers : { 'x-auth' : token}})
//     .then((response)=>{
//         const result = response.data;
//         // console.log(result)
//         setNotes(result);
        
//     })
//     .catch((err)=>{
//         console.log(err.message);
//     })
// },[])