import ResetPassForm from "../components/ResetPassForm"
import '../styles/pages/_resetpass.scss'

const ResetPass = () => {
    return (
        <>
            <main className="resetpassmain">
            <img className="biglogo" src="/logotx.webp" alt="logo tennistix" />
                <ResetPassForm />
            </main>
        </>
    )
}

export default ResetPass