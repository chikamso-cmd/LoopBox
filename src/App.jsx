import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './components/Login';
import Signup from './components/Signup';
import Main from './components/Main';
import Modal from './modals/modal';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/Signup" element={<Signup />}></Route>
        <Route path="/main" element={<Main />}></Route>
        <Route path="/modal" element={<Modal />}></Route>
      </Routes>
    </Router>
  );
}

export default App
