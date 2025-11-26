import '../styles/sidebar.css';
import logo from '../assets/logo.png'
import '../styles/base.css';
import { Link } from 'react-router-dom';


function Sidebar () {
    return (
      <section className="sidebar-container">
        <div className="sidebar-wrapper">
          <img src={logo} alt="loopbox-logo" />
          <div className="links">
            <ul>
              <li className="active">
                <span className="material-symbols-outlined">grid_view</span>
                overview
              </li>
              <li>
                <span className="material-symbols-outlined">credit_card</span>
                <Link to='/payment'/>
              </li>
              <li>
                <span className="material-symbols-outlined">groups</span>
                members
              </li>
              <li>
                <span className="material-symbols-outlined">swap_horiz</span>
                transactions
              </li>
              <li>
                <span className="material-symbols-outlined">settings</span>
                settings
              </li>
            </ul>
          </div>
        </div>
      </section>
    );
}
 
export default Sidebar;