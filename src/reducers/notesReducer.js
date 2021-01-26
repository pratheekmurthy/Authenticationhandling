const notesInitialState =[]

const notesReducer =(state =notesInitialState,action)=>{
    switch(action.type){
        case 'GET_NOTES': {
            return [...action.payload]
        }

        case 'ADD_NOTES' : {
            return [...state,action.payload]
        }

        case 'REMOVE_NOTE' :{
            const result = state.filter((note)=>{
                return note._id !== action.payload._id
            })
            console.log(result)

            return result
            }
            

        default : {
            return [...state]
        }
    }
}

export default notesReducer