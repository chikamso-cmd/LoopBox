import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import google from '../assets/Google.png';
import apple from '../assets/apple.png';

function Signup() {
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
          <form className="signup-wrapper">
            <h5>sign in to loopBox</h5>
            <p>
              you need to have registered and verify as a member before you can
              proceed
            </p>
            <div className="username">
              <label>username</label>
              <input type="text" name="" id="username" placeholder="username..." required />
            </div>
            <div className="email1">
              <label>email</label>
              <input type="email" name="" id="email" placeholder="email..." required />
            </div>
            <div className="password">
              <label>password</label>
              <input type="password" name="" id="password" placeholder="password..." required />
            </div>

            <div className="confirm">
              <label>confirm-password</label>
              <input
                type="password"
                name=""
                id="confirm-password"
                placeholder="confirm-password..." required
              />
            </div>
            <div className="checkbox">
              <input type="checkbox" name="" id="" />
              <label>
                by creating an account, you agree to our privacy policy
              </label>
            </div>
            <button className="submit-btn" type="submit">
              sign up
            </button>
            <div className="signin-method">
              <div className="hr">
                <hr />
                <p>or signin with</p>
                <hr />
              </div>
            </div>
            <div className="signin-methods">
              <button type="submit" className="google">
                <img src={google} alt="google-icon" />
                google
              </button>
              <button type="submit" className="apple">
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
