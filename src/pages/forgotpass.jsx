import ForgotPassForm from "../components/forgotpassform"
import '../styles/pages/_forgotpass.scss'

const ForgotPass = () => {
    return (
        <>
            <main className="forgotpassmain">
            <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <ForgotPassForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default ForgotPass