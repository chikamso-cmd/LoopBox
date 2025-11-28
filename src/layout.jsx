import Nav from "./components/nav";
import Sidebar from "./components/sidebar";
import { Outlet, useLocation } from "react-router-dom";
import '../src/styles/layout.css';

function Layout({ children }) {
    const location = useLocation()

  const getPagetitles = (pathname) => {
    const titleMap = {
      '/main': 'Overview',
      '/payment': 'Payment',
      '/member': 'Members',
      '/transactions': 'Transactions',
      '/Settings': 'Settings',

    }
    return titleMap[pathname] || ['overview']
    }
    // const pageTitle = titles[location.pathname] || '';

  return (
    <div className="layout">
      {/* Row container */}
      <div className="top-row">
        <Sidebar />
        <h1>{ getPagetitles(location.pathname)}</h1>
        <Nav />
      </div>

      {/* Page Content */}
      <div className="page-content">
        <Outlet />
        {children}
      </div>
    </div>
  );
}

export default Layout