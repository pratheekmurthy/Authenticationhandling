import axios from 'axios'
import {useDispatch} from 'react-redux'



const setNotes =(notes)=>{
    return {type : 'GET_NOTES',payload : notes}
}

export const getNotes =() =>{
    return(dispatch)=>{
        const token=localStorage.getItem("token")
    
        axios.get("http://dct-user-auth.herokuapp.com/api/notes", { headers : { 'x-auth' : token}})
        .then((response)=>{
            const result = response.data;
            dispatch(setNotes(result)); 
        })
        .catch((err)=>{
            alert(err.message);
        })}}

