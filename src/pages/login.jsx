import LoginForm from "../components/loginform";
import '../styles/pages/_login.scss'

const Login = () => {
    return (
        <>
            <main className="loginmain">
            <img className="biglogo" src="logotx.webp" alt="logo tennistix" />
                <LoginForm />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Login