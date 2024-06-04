import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { AuthProvider } from "./assets/AuthContext";

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import Game from "./pages/Game";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/game" element={<Game />} />
          <Route path="/game/:gameId" element={<Game />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App