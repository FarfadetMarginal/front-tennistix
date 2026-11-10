import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiService from '../services/apiService';
import { Link } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";
import Loader from "./Loader";

function LoginForm() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const { setAccessToken, setUser } = useAuth()
    const [mailError, setMailError] = useState(null)
    
    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)

        const userEmail = email?.trim() || ''
        const userPassword = password || ''

        if (userEmail.length < 5) {
            setMailError('Enter a valid email address.')
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
        const isValidPsw = passwordRegex.test(userPassword);
        if (isValidPsw === false) {
            setError('Must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 special character')
            return
        }
        const controller = new AbortController()
        
        try {
            setLoading(true)
            setError(null)
            const datas = await apiService.login(email, password, controller.signal)
            setAccessToken(datas.token)
            setUser(datas.user)

            navigate('/')
        } catch (err) {
            if(err.name !== 'AbortError') {
            console.error('Loading error: ', err)
            setError(err.message)
            }
        } finally {
            // Le finally s'exécute quoi qu'il arrive, après tout ce qui vient avant
            if(!controller.signal.aborted){
            setLoading(false)
            // Rediriger sur la page profile
            }
        }
    }

    if(loading) return <Loader />

  return (
    <>
        <form className="authform" onSubmit={handleSubmit}>
            <h1>Welcome back !</h1>
            
            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" id="mail" placeholder="Enter your mail adress" onChange={(e) => setEmail(e.target.value)} />
            <p>{mailError}</p>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <p>{error}</p>
            <Link to="/forgotpass">Forgot password</Link>

            <button type="submit">Login</button>
            <div>
                <p>Don't have an account ? </p>
                <Link to="/register">Register</Link>
            </div>
        </form>
    </>
  )
}

export default LoginForm
