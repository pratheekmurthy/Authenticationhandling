import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Noteitem from './Noteitem'
import swal from 'sweetalert'

const NotesList =(props)=>{
    const {notes} = props
    const [note,setnote] = useState({})


    
    const showifnfo =(id)=>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                console.log(result)
                setnote(result)
                swal(`Title - ${note.title} Body - ${note.body}`)     
          })
            .catch((err)=>{
                alert(err.message)
            })
            
            
    }

    const removeNote =(id)=>{
        console.log(id)
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                console.log(result)
                swal(`Removed`) 
                   
          })
            .catch((err)=>{
                alert(err.message)
            })
            
    }


    return (<div>
        {notes.length === 0 ? (<div>
            <h2>No Tasks found</h2>
            <p>Add Your first task</p>
            </div>
            ):(
                <div>
                    <h2>My tasks - {notes.length}</h2>
                    {
                        notes.map((note)=>{
                            return (
                                // <Taskitem key={task.id} {...task} removeitem={removeitem} edititem={edititem}/>
                                <Noteitem key={note._id} {...note} showifnfo={showifnfo} removeNote={removeNote}/>
                                
                            )
                        })
                    }
                </div>
            )}
    </div>)
}

export default NotesList