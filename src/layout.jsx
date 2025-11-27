import Nav from "./components/nav";
import Sidebar from "./components/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import '../src/styles/layout.css';

function Layout() {
    const location = useLocation()

    const titles = [
      {
        "/main": "Overview",
        "/payment": "Payments",
        "/members": "Members",
        "/transaction": "Transaction",
        "/setting": "etting",
      },
    ];
    const pageTitle = titles[location.pathname] || '';

  return (
    <div className="layout">
      {/* Row container */}
      <div className="top-row">
        <Sidebar />
        <Nav />
      </div>

      {/* Page Content */}
      <div className="page-content">
              <Outlet context={{ pageTitle }}/>
      </div>
    </div>
  );
}

export default Layout;
