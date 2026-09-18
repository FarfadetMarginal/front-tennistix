import { Routes, Route } from "react-router"
import Home  from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import ForgotPass from './pages/forgotpass';
import ResetPass from './pages/resetpass';
// import NotFound from './pages/notfound';

function App() {
  return (
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/forgotpass" element={<ForgotPass />}/>
        <Route path="/resetpass/:token" element={<ResetPass />}/>
        {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  )
}

export default App
