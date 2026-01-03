import "../styles/login.css";
import logo from "../assets/logo.png";
import { Link } from 'react-router-dom'
import styles from '../modules/shared.module.css';

import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  let passwordlength = 8;
 

  const handleSubmit = (e) => {
      e.preventDefault();
      if (!email || !password) {
        console.log('please fill all fields');
        setError('incorrect email or password');
        setTimeout(() => {
          setError('')
        }, 3000)
        
      }else{
        console.log("welcome");
        setError("");
        setEmail("");
        setPassword("");
        navigate('/main');
      }
      
  }
  
  
  return (
    <section className="container">
      <div className="login-wrapper">
        <div className="login-hero">
          <h1>welcome to your smart ajo, contribute without stress</h1>
          <p>
            pay using card, transfer, or wallet-your contributions are recorded
            instantly and securely.
          </p>
        </div>
        <div className="login-form">
          <img src={logo} alt="loopbox-logo" />
          
          <form className="form-container" onSubmit={handleSubmit}>
            <h5>sign in to loopBox</h5>
            <p>
              you need to have registered and verify as a member before you can
              proceed
            </p>
            <p className="text-red-600 text-center ">{error}</p>

            <div className="email">
              <label>email</label>
              <input
                type="email"
                name=""
                id="email"
                placeholder="email..."
                
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="password">
              <label>password</label>
              <input className={styles.inputField}
                type="password"
                name=""
                id="password"
                placeholder="password..."
                
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="radio">
              <label>
                remember me
                <input type="checkbox" name="" id="" />
              </label>
              <h6>forgotten password?</h6>
            </div>
            <button type="submit" className="submit-btn">log in</button>
            <h6>
              don't have an account? <Link to="/Signup">create one</Link>
            </h6>
          </form>
        </div>
      </div>
      {/*<Link to="/main">Main</Link>*/}
      {/* <Link to="/modal">Modal</Link> */}
    </section>
  );
}

export default Login;
