import React from 'react'
import "./SendMessage.css"

function SendMessage(props) {
    return(
       <div className='container-send-message'>
       <h5 className='send-message-username'> You </h5>
       <div className='send-message-body'> {props.message}</div>
       </div>
    )
}

export default SendMessage;