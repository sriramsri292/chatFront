import React,{useState,useEffect} from 'react'

import { Link } from 'react-router-dom';
import {  useNavigate } from 'react-router-dom';
const Register = () => {
    const navigate = useNavigate();
    const [user,setUser]=useState({
        email:'',
        password:'',
        firstName:''
      })
      const [message, setMessage] = useState({
        message: '', 
      });
      console.log(message);

      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
          ...prevUser,
          [name]: value,
        }));
      };
      useEffect (()=>
  {
  console.log(user.email);
  console.log(user.password);
  console.log(user.firstName);
  },[user])
      const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate required fields
  if (!user.email || !user.password || !user.firstName) {
   alert("Enter The Details ");
    return;
  }
  

        const data = {
          email: user.email,
          password: user.password,
          firstName:user.firstName
        };
        try {
          const response = await fetch('https://finale-p2jq.onrender.com/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
      
          const result = await response.json();
          setMessage({
            message: result.message,
           
          });
      
          console.log(result.message);
      
          if (result.success) {
            
            navigate('/');
          }
          setUser({
            email: '',
            password: '',
          });
        } catch (error) {
          console.error(error);
      
         
        }
      }

    return (
        <>
            
            <div style={{height:'inherit',width:'100%',backgroundColor:'lightGrey'}}> 

           
            <div className="container my-3 py-3">
                <h1 className="text-center">Register</h1>
                <hr />
                <div class="row my-4 h-100">
                    <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
                        <form>
                            <div class="form my-3">
                                <label for="Name">Full Name</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="firstName"
                                    placeholder="Enter Your Name"
                                    name="firstName"
                                    value={user.firstName}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div class="form my-3">
                                <label for="Email">Email address</label>
                                <input
                                    type="email"
                                    class="form-control"
                                    id="Email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleInputChange}
                                    placeholder="name@example.com"
                                    
                                />
                            </div>
                            <div class="form  my-3">
                                <label for="Password">Password</label>
                                <input
                                    type="password"
                                    class="form-control"
                                    id="Password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleInputChange}
                                    placeholder="Password"
                                />
                            </div>
                            <div className="my-3">
                                <p>Already has an account? <Link to="/" className="text-decoration-underline text-info">Login</Link> </p>
                            </div>
                            <div className="text-center">
                                <button class="my-2 mx-auto btn btn-dark" type="submit" onClick={handleSubmit}>
                                    Register
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </div>
           
        </>
    )
}

export default Register