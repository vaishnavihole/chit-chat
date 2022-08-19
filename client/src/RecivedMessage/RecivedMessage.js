import React from 'react'
import "./RecivedMessage.css"

function RecivedMessage(props) {
    return(
        <div>
         <div className='container-recived-message'>
       <h5 className='recived-message-username'> {props.user}</h5>
       <div className='recived-message-body'>{props.message}</div>
       </div>
        </div>
    )
}

export default RecivedMessage;