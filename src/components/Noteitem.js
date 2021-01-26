import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteNote} from '../actions/notesActions'
import swal from 'sweetalert'
import axios from 'axios'
import '../style/login.css'



const Noteitem =(props)=>{
    const {_id,title,body,showifnfo} = props

    const dispatch = useDispatch()

    const showdetails=(e)=>{
        showifnfo(_id)
    }
    
    
    const removeNote =(id)=>{
        // console.log(id)
        const confirm = window.confirm(" Are sure want to remove?")
        if(confirm){
            dispatch(deleteNote(id))
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