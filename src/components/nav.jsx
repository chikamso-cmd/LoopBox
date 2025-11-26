import "../styles/nav.css";
import profile from '../assets/user_3.png'

function Navigation() {
  return (
    <div className="overview">
      <div className="overview-content">
        <div className="intro">
          <h1> overview</h1>
          <hr />
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
