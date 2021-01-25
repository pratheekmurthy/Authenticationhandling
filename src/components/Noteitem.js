import React from 'react'
import swal from 'sweetalert'
import axios from 'axios'
import '../style/login.css'



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
                swal(`Good Job`)      
                   
          })
            .catch((err)=>{
                alert(err.message)
            })
            
    }
    }
    

    return (<div className="cardsize">
        <div class="card">
  <div class="card-body">
  <h3 onClick={showdetails}>{title}</h3>
        <button  class="btn btn-success" onClick={()=>{
            removeNote(_id)
        }}>Work Done</button>
  </div>
</div>
       
        
    </div>)
}

export default Noteitem