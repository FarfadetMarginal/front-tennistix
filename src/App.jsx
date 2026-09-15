import './App.css'
import { Routes, Route } from "react-router"
// import Home  from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
// import NotFound from './pages/notfound';

function App() {
  return (
    <Routes>
        {/* <Route path="/" element={<Home />}/> */}
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        {/* <Route path="*" element={<NotFound />}/> */}
    </Routes>
  )
}

export default App
