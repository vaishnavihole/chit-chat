import './App.css';
import {BrowserRouter ,Route , Routes, Link} from "react-router-dom";
import Localstorage from './Localstorage/Localstorage';
import Auth from './Auth/Auth';
// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import ReceivedMessage from "./RecivedMessage/RecivedMessage";
// import SentMessage from "./SendMessage/SendMessage"


function App()
{

//   const [data, setData] = useState([]);

//   const [currentUser, setCurrentUser] = useState("");

//   const [currentMessage, setCurrentMessage] = useState("");

//   const [fetchTrigger, setFetchTrigger] = useState(false);


//   useEffect(()=>{
//     async function fetchData(){
//       const response = await axios.get("/message");
//       setData(response.data);
//     }
//     fetchData();
//   }, [fetchTrigger]);
 
//   function sendMessage()
//   {
//     axios.post("/message", {
//       user: currentUser,
//       messageType: "text",
//       messageBody: currentMessage
//     });

//     setCurrentMessage("");

//     setFetchTrigger(!fetchTrigger);

//   }

  return(
    <>
 <div> 
  <BrowserRouter>
  <Routes>
    <Route path="/localstorage" element={<Localstorage/>} />
    <Route path="/auth" element={<Auth/>} />
  </Routes>
  </BrowserRouter>
 </div>

{/* 
      <div className="chat-container">
      <h2 className='text-center'>We Chat </h2>
      <div className='chat-container'>
        
        {

          data.map((obj, i)=>{
            if(obj.user===currentUser)
            {
              return(
                <SentMessage key={i} message={obj.messageBody}/>
              )
            }
            else
            {
              return(
                <ReceivedMessage key={i}  user={obj.user} message={obj.messageBody}/>
              )
            }
            
          })
        }
      </div>
     
      <div className='myclass'>
        <center><b><br/>current user:</b> {currentUser}</center>

        <center><input className='text-center' type="text"  placeholder="Enter Username"
          onChange={(e)=>{setCurrentUser(e.target.value)}}/>
        <br /><br /> </center>

        <center><input className='text-center'type="text"  placeholder="Enter message"
          value={currentMessage}
          onChange={(e)=>{setCurrentMessage(e.target.value)}}/>
           <br /><br /></center>

        <center><button  onClick={sendMessage}>Send</button></center>
      </div>
      </div> */}
    </>
  )
}

export default App;
