import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Noteitem from './Noteitem'
import swal from 'sweetalert'

const NotesList =(props)=>{
    const {notes,setNotes,remove} = props
    
    
    const showifnfo =(id)=>{
        axios.get(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                console.log(result)
                swal(`Title - ${result.title} 
                Body - ${result.body}`)     
          })
            .catch((err)=>{
                alert(err.message)
            })
            
            
    }

    
    

    

    return (<div>
        {notes.length === 0 ? (<div>
            <h4>No Tasks found</h4>
            <p>Add Your first task</p>
            </div>
            ):(
                <div>
                    <h4>My tasks - {notes.length}</h4>
                    {
                        notes.map((note)=>{
                            return (
                                // <Taskitem key={task.id} {...task} removeitem={removeitem} edititem={edititem}/>
                                <Noteitem key={note._id} {...note} showifnfo={showifnfo}  notes={notes} setNotes={setNotes}/>
                                
                            )
                        })
                    }
                </div>
            )}
    </div>)
}

export default NotesList