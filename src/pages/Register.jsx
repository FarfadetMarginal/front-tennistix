import RegisterForm from "../components/RegisterForm"
import '../styles/pages/_register.scss'
import { useNavigate } from "react-router-dom"

const Register = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="registermain">
                <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <button type="button" onClick={() => navigate(-1)}>←</button>
                <RegisterForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Register
