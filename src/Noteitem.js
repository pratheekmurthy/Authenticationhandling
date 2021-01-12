import React from 'react'
import swal from 'sweetalert'
import axios from 'axios'



const Noteitem =(props)=>{
    const {_id,title,body,showifnfo,notes,setNotes} = props

    const showdetails=(e)=>{
        showifnfo(_id)
    }
    
    const remove=(id)=>{
        console.log(id)
        const updated = notes.filter((note)=>{
            return note._id !== id
        })
        console.log(updated);
        setNotes(updated)
       
    }

    
    const removeNote =(id)=>{
        // console.log(id)
        const confirm = window.confirm(" Are sure want to remove?")
        if(confirm){

        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                remove(result._id)
                console.log(result._id)
                swal(`Removed`)      
                   
          })
            .catch((err)=>{
                alert(err.message)
            })
            
    }
    }
    

    return (<div>
        <h1 onClick={showdetails}>{title}</h1>
        <button onClick={()=>{
            removeNote(_id)
        }}>remove</button>
        
    </div>)
}

export default Noteitem