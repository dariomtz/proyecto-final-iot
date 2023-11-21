import './firebase';
import Main from "./Main";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return <Router>
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <span className="navbar-brand mb-0 h1">Chalecos para rondineros</span>
      </div>
    </nav>
    <div className="container p-5">
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  </Router>
};

export default App;
