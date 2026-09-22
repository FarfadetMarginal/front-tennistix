import ResetPassForm from "../components/resetpassform"
import '../styles/pages/_resetpass.scss'

const ResetPass = () => {
    return (
        <>
            <main className="resetpassmain">
            <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <ResetPassForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default ResetPass