import './firebase';
import Main from "./Main";
import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return <Router>
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
    </Routes>
  </Router>
};

export default App;
