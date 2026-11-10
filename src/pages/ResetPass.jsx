import ResetPassForm from "../components/ResetPassForm"
import '../styles/pages/_resetpass.scss'
import { useNavigate } from "react-router-dom"

const ResetPass = () => {
    const navigate = useNavigate()
    return (
        <>
            <main className="resetpassmain">
                <img className="biglogo" src="/logotx.webp" alt="logo tennistix" />
                <button type="button" onClick={() => navigate(-1)}>←</button>
                <ResetPassForm />
            </main>
        </>
    )
}

export default ResetPass
