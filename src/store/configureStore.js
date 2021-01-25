import {combineReducers,createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import notesReducer from '../reducers/notesReducer'

const root = {
    notes : notesReducer
}

const configureStore =()=>{
    const store = createStore(combineReducers(root),applyMiddleware(thunk))
    return store

}

export default configureStore