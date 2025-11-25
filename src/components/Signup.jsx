import "../styles/signup.css";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

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
            <div className="isername">
              <label>username</label>
              <input type="text" name="" id="" placeholder="username..." />
            </div>
            <div className="emai">
              <label>email</label>
              <input type="email" name="" id="" placeholder="email..." />
            </div>
            <div className="password">
              <label>password</label>
              <input type="password" name="" id="" placeholder="password..." />
            </div>

            <div className="confirm">
              <label>confirm-password</label>
              <input
                type="password"
                name=""
                id=""
                placeholder="confirm-password..."
              />
            </div>
            <input type="checkbox" name="" id="" />
            <label>
              by creating an account, you agree to our privacy policy
            </label>
            <button type="submit">sign up</button>
            <div className="signin-method">
              <div className="hr">
                <hr />
                <p>or signin with</p>
                <hr />
                          </div>
                          
                      </div>
                      <div className="btns">
                          <button type="submit" className="google">sign up with google</button>
                          <button type="submit" className="apple">sign up with apple id</button>
                      </div>
                      <h6>alredy have an account? <Link to="/">login</Link></h6>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Signup;
