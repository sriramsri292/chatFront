import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useCart } from "./cartext";
import {useNavigate } from 'react-router-dom';
export default function Home() {
  const { userName = { name: '' }, setUserName } = useCart();
  const navigate = useNavigate();


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
console.log(userName);

  return (
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
    <div style={{width:'100%',height:'170vh',  background: '#D2B48C',}}> 

    
    <div> 
        <h3 style={{marginLeft:'30px',marginTop:'30px',height:'15%',width:'20%',background: '#ffffcc',fontFamily:'revert',fontSize:'30px'}}> Chat With Astrologers</h3>
        
    </div>
   

<div> 
<Container>
      <Row>
        <Col>  <Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://jaipurastrologers.in/wp-content/uploads/2023/01/Astrologer-Vinod-Shastri-150x150.jpg" />
      <Card.Body>
        <Card.Title>Mr Horold Das</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic ,Nadi</h5>
         <h5 style={{fontFamily:'initial'}}> 20 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr Horold Das'}); navigate('/chat');}}>
      Chat
    </Button>
      </Card.Body>
    </Card></Col>
        <Col>  <Card style={{ width: '18rem',backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://5bestincity.com/listimg/India/guwahati-as/Dr-Kartick-Chakraborty-Professional-Services-Astrologers-Guwahati-Assam.jpg" />
      <Card.Body>
        <Card.Title> Mr HariDas</Card.Title>
        <Card.Text>
        <h5 style={{fontFamily:'initial'}}> vedic ,Numerlogy</h5>
         <h5 style={{fontFamily:'initial'}}> 10 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:' Mr HariDas'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col>  <Card style={{ width: '18rem',backgroundColor: '#d3d3d3' }}>
      <Card.Img  style={{height:'100px',width:'200px'}} variant="top" src="https://5bestincity.com/listimg/India/guwahati-as/Astrologer-OM-Acharya-Sailyajit-Professional-Services-Astrologers-Guwahati-Assam.jpg" />
      <Card.Body>
        <Card.Title>Mr ShatGuru</Card.Title>
        <Card.Text>
        <h5 style={{fontFamily:'initial'}}> Nadi,KP</h5>
         <h5 style={{fontFamily:'initial'}}> 15 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr ShatGuru'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <Row style={{marginTop:'10px'}}>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://cdn0.weddingwire.in/vendor/2258/3_2/640/png/mani1_15_122258.webp" />
      <Card.Body>
        <Card.Title>Ms Harini </Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic ,Nadi</h5>
         <h5 style={{fontFamily:'initial'}}> 20 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Ms Harini'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://cdn0.weddingwire.in/vendor/3597/3_2/640/jpeg/guru_15_403597-165278860387740.webp" />
      <Card.Body>
        <Card.Title>Mr Pndit</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic ,Nadi</h5>
         <h5 style={{fontFamily:'initial'}}> 10 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr Pndit'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/458529197/photo/fortune-teller-at-jaipur-india.webp?s=612x612&w=is&k=20&c=Fw6_DJhN33v-WRU557bRy1xgUgyJyCzKX8bO80mAso8=" />
      <Card.Body>
        <Card.Title>Mr Leo Das</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic</h5>
         <h5 style={{fontFamily:'initial'}}> 19 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr Leo Das'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <Row style={{marginTop:'10px'}}> 
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/1347480695/photo/beard-priest-holy-astrologer-guru-or-jyotishi-placing-cowrie-shells-on-chart-and-counting-to.jpg?s=612x612&w=0&k=20&c=Fa0mG3pfB7X_odMXwU4rM0lyyVFIradeKZjgmo3sd0Y=" />
      <Card.Body>
        <Card.Title>Mr Vishwa</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> KP, vedic</h5>
         <h5 style={{fontFamily:'initial'}}> 20 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr Vishwa'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/523921005/photo/fortune-teller-india.jpg?s=612x612&w=0&k=20&c=5aD0FVE8xYhPscZYzb-zqDkswOezlTqr2sFmDrG0yDs=" />
      <Card.Body>
        <Card.Title>MR Guru</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}>KP,Vastu ,Vedic</h5>
         <h5 style={{fontFamily:'initial'}}> 10 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'MR Guru'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/1664785042/photo/zodiac-sign-of-pisces-in-astrology.jpg?s=612x612&w=0&k=20&c=iyMzqaNRp1Sg_a0e2xhpfwLtbagHoxPzpVAhFpC5xRg=" />
      <Card.Body>
        <Card.Title>Mr Leo Das</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic</h5>
         <h5 style={{fontFamily:'initial'}}> 19 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr Leo Das'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
      </Row>
      <Row style={{marginTop:'10px'}}>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/1347480665/photo/holy-indian-god-man-or-guru-with-rudrakshi-mala-using-laptop-concept-of-online-horoscope.jpg?s=612x612&w=0&k=20&c=4bthIRupBNHtb4S6K2gUqUwTL7JSqnLjOeiUdwlZvAk=" />
      <Card.Body>
        <Card.Title>Mr  Das</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic</h5>
         <h5 style={{fontFamily:'initial'}}> 19 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr  Das'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/481176600/photo/indian-brahman.jpg?s=612x612&w=0&k=20&c=uumQYy4b290EG7W5iCI0YcEaOXuGlIVZczIDYobhh_M=" />
      <Card.Body>
        <Card.Title>Mr Leo</Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> vedic</h5>
         <h5 style={{fontFamily:'initial'}}> 19 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Mr Leo'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
        <Col><Card style={{ width: '18rem' ,backgroundColor: '#d3d3d3' }}>
      <Card.Img style={{height:'100px',width:'200px'}} variant="top" src="https://media.istockphoto.com/id/1196358997/photo/palmistry-fortune-teller-reads-lines-on-hand-or-palm-to-tell-future.jpg?s=612x612&w=0&k=20&c=Fz_vOz2CPwFqZ3FsGWedkU4KHVnLn-qnFHFVhEC4gTo=" />
      <Card.Body>
        <Card.Title>Ms Rithika </Card.Title>
        <Card.Text>
         <h5 style={{fontFamily:'initial'}}> Nadi</h5>
         <h5 style={{fontFamily:'initial'}}> 10 Years Experience</h5>
        </Card.Text>
        <Button variant="primary" onClick={() =>{setUserName({name:'Ms Rithika'}); navigate('/chat');}}>Chat</Button>
      </Card.Body>
    </Card></Col>
      </Row>
    </Container>
</div>


    </div>
    </div>
  );
}
