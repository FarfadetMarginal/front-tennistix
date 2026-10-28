import { Routes, Route, Outlet } from "react-router"
import Home  from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import ForgotPass from './pages/ForgotPass';
import ResetPass from './pages/ResetPass';
import Leaderboard from "./pages/Lb";
import Search from "./pages/Search";
import Profile from "./pages/Profile";
import Modify from "./pages/Modify";
import Notifs from "./pages/Notifs";
import NotFound from './pages/NotFound';
import NavBar from "./components/Navbar";
import Legals from "./pages/Legals";
import Settings from "./pages/Settings";

// Layout avec la NavBar permanente
function MainLayout() {
  return (
    <>
      <Outlet /> 
      <NavBar /> 
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/modify" element={<Modify />} />
        <Route path="/notif" element={<Notifs />} />
        <Route path="/legals" element={<Legals />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/resetpass/:token" element={<ResetPass />} />
      <Route path="*" element={<NotFound />}/>
    </Routes>
  );
}

export default App;
