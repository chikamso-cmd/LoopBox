import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import google from '../assets/Google.png';
import apple from '../assets/apple.png';
import { useEffect, useState } from "react";

function Signup() {

  // const [userInfo, setuserInfo] = useState({});
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');

 async function register(userData) {
   try {
     const response = await fetch(`http://localhost:5000/auth/register`, {
       method: 'POST',
       headers: {
         'content-type': 'application/json',
       },
       body: JSON.stringify(userData)
    });
     if (!response.ok) {
       throw new Error('registration failed');
       
       
     } const data = await response.json();
     return data;
   } catch (err) {
     console.log(err);
     
     
   }
 }
  
  
  
  const handleSubmit =  (e) => {
    e.preventDefault();

    console.log('i am a working function...');

    const Payload = {
      username: 'username',
      email: 'email',
      Password: 'password',
      confirmPassword: 'confirmpassword'
      
    };


    
  }  
  

  return (
    <section className="signup">
      <div className="wrapper">
        <div className="hero">
          <h1>empowering comminities through smart contributions</h1>
          <p>
            join a trusted circle where members save money monthly and everyone
            gets their fair share-one turn at a time. transparent, secure, and
            automated.
          </p>
        </div>
        <div className="signup-cont">
          <img src={logo} alt="loopbox-logo" />

          <form className="signup-wrapper" onSubmit={handleSubmit}>
            <h5>sign in to loopBox</h5>
            <p>
              you need to have registered and verify as a member before you can
              proceed
            </p>
            <div className="usernames">
              <label className="username">username</label>
              <input type="text" name="" id="username" placeholder="username..." required value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="emails">
              <label className="email">email</label>
              <input type="email" name="" id="email" placeholder="email..." required  value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="passwords">
              <label className="password">password</label>
              <input type="password" name="" id="password" placeholder="password..." required  value={Password} onChange={(e) => setPassword(e.target.value)}/>
            </div>

            <div className="confirms">
              <label className="confirm">confirm-password</label>
              <input
                type="password"
                name=""
                id="confirm-password"
                placeholder="confirm-password..." required value={confirmPassword} onChange={(e) => setconfirmPassword(e.target.value)}
              />
            </div>
            <div className="checkbox">
              <input className="chech-box" type="checkbox" name="" id="check" />
              <label className="check">
                by creating an account, you agree to our privacy policy
              </label>
            </div>
            <button className="submit-btn" type="submit" >
              sign up
            </button>
            <div className="signin-method">
              <div className="hr">
                <hr />
                <p>or sign in with</p>
                <hr />
              </div>
            </div>
            <div className="signin-methods">
              <button className="google">
                <img src={google} alt="google-icon" />
                google
              </button>
              <button className="apple"> 
                <img src={apple} alt="google-icon" />
                apple id
              </button>
            </div>
            <h6>
              alredy have an account? <Link to="/">login</Link>
            </h6>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
