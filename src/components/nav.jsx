import "../styles/nav.css";
import profile from '../assets/user_3.png'
import { useOutletContext } from "react-router-dom";
function Navigation() {


// const { pageTitle } = useOutletContext()

  return (
    <div className="overview">
      <div className="overview-content">
        <div className="intro">
          {/* <h1> { pageTitle }</h1> */}
          <p>apr 2025</p>
        </div>
        <div className="profile">
          <span className="material-symbols-outlined">notifications</span>
          <img src={profile} alt="profile-image" />
          <p>chioma favour</p>
        </div>
      </div>
    </div>
  );
}
export default Navigation;
