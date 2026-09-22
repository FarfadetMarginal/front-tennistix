import RegisterForm from "../components/registerform"
import '../styles/pages/_register.scss'

const Register = () => {
    return (
        <>
            <main className="registermain">
            <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <RegisterForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Register