import LoginForm from "../components/LoginForm";
import '../styles/pages/_login.scss'
import { useNavigate } from "react-router-dom"

const Login = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="loginmain">
                <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <button type="button" onClick={() => navigate(-1)}>←</button>
                <LoginForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Login
