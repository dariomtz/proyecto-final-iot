import Login from "./auth/Login";
import Signup from "./auth/Signup";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <nav class="navbar bg-body-tertiary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">Chalecos para rondineros</span>
      </div>
    </nav>
    <div className="container p-5">
      <Routes>
        <Route path="/" element={<h1>Main page</h1>} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
      </Routes>
    </div>
  </Router>
);

export default App;
