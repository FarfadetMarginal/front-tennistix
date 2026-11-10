import ForgotPassForm from "../components/ForgotPassForm"
import '../styles/pages/_forgotpass.scss'
import { useNavigate } from "react-router-dom"

const ForgotPass = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="forgotpassmain">
                <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <button type="button" onClick={() => navigate(-1)}>←</button>
                <ForgotPassForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default ForgotPass
