import '../styles/sidebar.css';
import logo from '../assets/logo.png'
import '../styles/base.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Sidebar() {
  
const [isActive, setisActive] = useState(null)

 
    return (
      <section className="sidebar-container">
        <div className="sidebar-wrapper">
          <img src={logo} alt="loopbox-logo" />
          <div className="links">
            <ul>
              <li className={({ isActive }) => (isActive ? "active" : "")}>
                <Link to="/main">
                  <span className="material-symbols-outlined">grid_view</span>
                  overview
                </Link>
              </li>
              <li>
                <Link to="/payment">
                  <span className="material-symbols-outlined">credit_card</span>
                  payments
                </Link>
              </li>

              <li>
                <Link to="/Member">
                  <span className="material-symbols-outlined">groups</span>
                  members
                </Link>
              </li>
              <li>
                <Link to="/transactions">
                  <span className="material-symbols-outlined">swap_horiz</span>
                  transactions
                </Link>
              </li>
              <li>
                <Link to="/settings">
                  <span className="material-symbols-outlined">settings</span>
                  settings
                </Link>
              </li>
              <div className='logout'>
                <Link to="/">
                  <span className="material-symbols-outlined">login</span>
                  logout
                </Link>
              </div>
              {/* <Link to='/confirm'>confirmpayment</Link> */}
            </ul>
          </div>
        </div>
      </section>
    );
}
 
export default Sidebar;