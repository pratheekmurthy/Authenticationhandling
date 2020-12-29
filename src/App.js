import React from 'react'
import {Link, BrowserRouter,Route} from 'react-router-dom'
import Register from './Register'
import Home from './Home'
import Login from './Login'



const App=(props)=>{
    return (<div> 
        <BrowserRouter>
        <Link to="/">Home</Link>|<Link to="/register">Register</Link>|<Link to="/login">Login</Link>
        <Route path="/" component={Home} exact={true}/>
        <Route path="/register" component={Register} exact={true}/>
        <Route path="/login" component={Login} exact={true}/>
        </BrowserRouter>
    </div>)
}

export default App