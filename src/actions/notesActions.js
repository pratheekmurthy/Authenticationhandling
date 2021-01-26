import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import swal from 'sweetalert'

const token=localStorage.getItem("token")



const addNotes =(note)=>{
    return { type : 'ADD_NOTES', payload: note}
}
const setNotes =(notes)=>{
    return {type : 'GET_NOTES',payload : notes}
}

const removeNote = (note)=>{
    return { type : 'REMOVE_NOTE', payload : note}
}

export const getNotes =() =>{
    return(dispatch)=>{
        axios.get("http://dct-user-auth.herokuapp.com/api/notes", { headers : { 'x-auth' : token}})
        .then((response)=>{
            const result = response.data;
            dispatch(setNotes(result)); 
        })
        .catch((err)=>{
            alert(err.message);
        })}}

export const deleteNote =(id)=>{
    return (dispatch)=>{
        console.log(id);
        axios.delete(`http://dct-user-auth.herokuapp.com/api/notes/${id}`,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                dispatch(removeNote(result))
                swal(`Good Job`)      
                   
          })
            .catch((err)=>{
                alert(err.message)
            })

    }       
    }

 export  const formSubmit =(note)=>{
        return (dispatch)=>{
            axios.post("http://dct-user-auth.herokuapp.com/api/notes",note,{
            headers :{
                "x-auth" : localStorage.getItem("token")
            }
        })
            .then((response)=>{
                const result=response.data
                addNotes(result);
                swal("success!", "Succesfully Task Added", "success")
                
                
          })
            .catch((err)=>{
                alert(err.message)
            })
            
        
        }
    }





