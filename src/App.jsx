import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Main from "./pages/Main";
import Payment from "./pages/payment";
import Layout from "./layout";
// import Confirmpayment from "./modals/confirm";
import Transactions from "./pages/transactions";
import Member from "./pages/member";

function App() {
  return (
    <Router>
      <Routes>
        {/* No Navbar / Sidebar */}
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* With Navbar / Sidebar */}
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/member" element={<Member />} />
          <Route path="/transactions" element={<Transactions />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
