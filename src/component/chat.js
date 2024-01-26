import React, { useState, useEffect, useRef } from "react";
import { useCart } from "./cartext";
import io from "socket.io-client";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function Chat()
{
  const handleRechargeClick = () => {
    // The Razorpay options
    const options = {
      key: "rzp_test_SvDURJUR3Tw1wc",
      key_secret: "uTgHLO5qWAVWkCtziVcBJZs9",
      totalAmount: 100 * 100, // Convert amount to paise
      currency: "INR",
      name: "STARTUP_PROJECTS",
      description: "For testing purpose",
      amount: 100 * 100, // Set the total amount in paise
      handler: function (response) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: "sriram",
        email: "sriram@gmail.com",
        contact: "9629104734",
      },
      notes: {
        address: "Razorpay Corporate office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    // Create a new Razorpay instance and open the payment dialog
    var pay = new window.Razorpay(options);
    pay.open();
  };

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
   
    const socketRef = useRef();
    const { userName = { name: '' }} = useCart();
    useEffect(() => {
      socketRef.current = io("https://chatback2.onrender.com");

    
      // Listen for incoming messages
      socketRef.current.on('chat message', (msg) => {
        setMessages(prevMessages => [...prevMessages, { text: msg, sender: 'other' }]);
      });
    
      // Clean up the socket connection when the component unmounts
      return () => {
        socketRef.current.disconnect();
      };
    }, []);
    
  
    const sendMessage = () => {
      // Emit the message to the server
      alert('please recharge your wallet')
      socketRef.current.emit('chat message', newMessage);
  
      // Update the local state
      setMessages(prevMessages => [...prevMessages, { text: newMessage, sender: 'you' }]);
      setNewMessage('');
    };
    
   
    return(
        <div> 
            <div>
       <Navbar className="bg-body-tertiary" >
        <Container>
          <Navbar.Brand  style={{fontFamily:'cursive',fontWeight:'bolder',}}>
            <img
              alt=""
              src="https://img.freepik.com/premium-photo/stylish-young-woman-posing-against-black-background-smiling-happy-female-influencer-doing-interesting-content-her-chanel_129180-2881.jpg?w=996"
              width="60"
              height="60"
              className="d-inline-block align-top"
            />{' '}
          Astro Chat
          </Navbar.Brand>
         <h6 style={{marginLeft:'50%'}}> Available Balance : 0$</h6>
         <Button variant="outline-success" onClick={handleRechargeClick}>Recharge</Button>{' '}
        </Container>
      </Navbar>
    </div>
      <section style={{ backgroundColor: '#eee' }}>
      <div className="container py-5">
        <div className="row d-flex justify-content-center">
          <div className="col-md-8 col-lg-6 col-xl-4"style={{ width: '80%' }}>
            <div className="card">
              <div className="card-header d-flex justify-content-between align-items-center p-3" style={{ borderTop: '4px solid #ffa900' }}>
                <h5 className="mb-0">Chat With Astrologer</h5>
                <div className="d-flex flex-row align-items-center">
               
                  <i className="fas fa-minus me-3 text-muted fa-xs"></i>
                  <i className="fas fa-comments me-3 text-muted fa-xs"></i>
                  <i className="fas fa-times text-muted fa-xs"></i>
                </div>
              </div>
              <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', maxHeight: '600px', overflowY: 'auto' }}>


                <div className="d-flex justify-content-between">
                  <p className="small mb-1">{userName.name}</p>
                  
                </div>
                <div className="d-flex flex-row justify-content-start">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} />
                  <div>
                    <p className="small p-2 ms-3 mb-3 rounded-3" style={{ backgroundColor: '#f5f6f7' }}>May i help you ?</p>
                  </div>
                </div>
                <div className="card-body" data-mdb-perfect-scrollbar="true" style={{ position: 'relative', height: '400px' }}>
  {messages.map((message, index) => (
    <div key={index} className={`d-flex flex-row justify-content-${message.sender === 'you' ? 'end' : 'start'} mb-4 pt-1`}>
     
      <div>
        <p className={`small p-2 me-3 mb-3 text-white rounded-3 ${message.sender === 'you' ? 'bg-warning' : ''}`}>
          {message.text}
        </p>
      </div>
      {message.sender === 'you' && (
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 1" style={{ width: '45px', height: '100%' }} />
      )}
    </div>
  ))}
</div>



                
                

              </div>
              <div className="card-footer text-muted d-flex justify-content-start align-items-center p-3">
                <div className="input-group mb-0">
                  <input  type="text"
            className="form-control"
            placeholder="Type message"
            aria-label="Recipient's username"
            aria-describedby="button-addon2"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)} />
                  <button className="btn btn-warning"
            type="button"
            id="button-addon2"
            onClick={sendMessage}
            style={{ paddingTop: '.55rem' }}
            >
                    Button
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
        </div>
            );
}