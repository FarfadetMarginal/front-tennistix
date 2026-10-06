import { Routes, Route } from "react-router"
import Home  from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPass from './pages/forgotpass';
import ResetPass from './pages/resetpass';
import Leaderboard from "./pages/lb";
import Search from "./pages/search";
// import NotFound from './pages/notfound';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/leaderboard" element={<Leaderboard />}/>
        <Route path="/search" element={<Search />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgotpass" element={<ForgotPass />}/>
        <Route path="/resetpass/:token" element={<ResetPass />}/>
        {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  )
}

export default App
