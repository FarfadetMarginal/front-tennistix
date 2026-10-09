import { Routes, Route, Outlet } from "react-router"
import Home  from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPass from './pages/forgotpass';
import ResetPass from './pages/resetpass';
import Leaderboard from "./pages/lb";
import Search from "./pages/search";
import Profile from "./pages/profile";
import Modify from "./pages/modify";
import Notifs from "./pages/Notifs";
// import NotFound from './pages/notfound';
import NavBar from "./components/Navbar";

// Layout avec la NavBar permanente
function MainLayout() {
  return (
    <>
      <main>
        <Outlet /> 
      </main>
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
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgotpass" element={<ForgotPass />} />
      <Route path="/resetpass/:token" element={<ResetPass />} />
      {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  );
}

export default App;
