import React from 'react'
import{Link} from 'react-router-dom'
import './style/home.css'

const Home =(props)=>{
    const {token} = props
    // const {handelogout,isLogin} = this.props

    
    return (<div>
        <div className="image">
            <img src="/home.jpeg"/>
        </div>
        <div className ="content">
        <div className="leftcontent">
            <p>Authentication is the act of proving an assertion, such as the identity of a computer system user. In contrast with identification, the act of indicating a person or thing's identity, authentication is the process of verifying that identity</p>
        </div>
        <div className="rightcontent">
            <p>Authentication is the act of proving an assertion, such as the identity of a computer system user. In contrast with identification, the act of indicating a person or thing's identity, authentication is the process of verifying that identity</p>
        </div>

        </div>
    </div>)
}

export default Home