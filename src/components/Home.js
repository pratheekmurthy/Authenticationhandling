import React from 'react'
import{Link} from 'react-router-dom'
import '../style/home.css'

const Home =(props)=>{
    const {token} = props
    // const {handelogout,isLogin} = this.props

    
    return (<div>
        <div className="image">
            <img src="/home.jpeg"/>
        </div>
        <div className ="content" className="font">
        <div className="leftcontent">
            <p>Authentication is the act of proving an assertion, such as the identity of a computer system user. In contrast with identification, the act of indicating a person or thing's identity, authentication is the process of verifying that identity</p>
        </div>
        <div className="rightcontent">
            <p>Authorization is a process by which a server determines if the client has permission to use a resource or access a file. Authorization is usually coupled with authentication so that the server has some concept of who the client is that is requesting access</p>
        </div>

        </div>
    </div>)
}

export default Home