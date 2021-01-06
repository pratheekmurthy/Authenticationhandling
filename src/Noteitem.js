import React from 'react'
import swal from 'sweetalert'



const Noteitem =(props)=>{
    const {_id,title,body,showifnfo,removeNote} = props

    const showdetails=(e)=>{
        showifnfo(_id)
    }
    
    const remove=(e)=>{
        removeNote(_id)
    }
        
    

    return (<div>
        <h1 onClick={showdetails}>{title}</h1>
        <button onClick={remove}>remove</button>
        
    </div>)
}

export default Noteitem