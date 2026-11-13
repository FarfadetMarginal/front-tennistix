import { useState } from "react"
import apiService from '../services/apiService';
import { Link } from "react-router-dom"
import Loader from "./Loader";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext";

function RegisterForm() {
    const [pseudo, setPseudo] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [nameError, setNameError] = useState(null)
    const [mailError, setMailError] = useState(null)
    const [pswError, setPswError] = useState(null)
    const navigate = useNavigate()
    const { setAccessToken, setUser } = useAuth()

    async function handleSubmit(e) {
        e.preventDefault()
        setError(null)

        const username = pseudo?.trim() || ''
        const userEmail = email?.trim() || ''
        const userPassword = password || ''

        if (username.length < 2) {
            setNameError('Username must have at least 2 characters.')
            return
        }
        if (username.length >= 2) {
            setNameError(null)
        }
        if (userEmail.length < 5) {
            setMailError('Enter a valid email address.')
            return
        }
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/;
        const isValidPsw = passwordRegex.test(userPassword);
        if (isValidPsw === false) {
            setPswError('Must contain at least 6 characters, 1 uppercase letter, 1 lowercase letter and 1 special character')
            return
        }
        if (isValidPsw === true) {
            setPswError(null)
        }

        const controller = new AbortController()

        try {
            setLoading(true)
            const datas = await apiService.register(username, userEmail, userPassword, controller.signal)
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
            }
        }
    }

    if(loading) return <Loader />

  return (
    <>
        <form className="authform" onSubmit={handleSubmit}>
            <h1>Welcome!</h1>
            
            <label htmlFor="pseudo">Username</label>
            <input type="text" name="pseudo" id="pseudo" placeholder="Enter your username" onChange={(e) => setPseudo(e.target.value)} />
            <p>{nameError}</p>

            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" id="mail" placeholder="Enter your mail adress" onChange={(e) => setEmail(e.target.value)} />
            <p>{mailError}</p>

            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <p>{pswError}</p>

            <button type="submit">Register</button>
            <div>
                <p>Already have an account ? </p>
                <Link to="/login">Login</Link>
            </div>
            <p>{error}</p>
        </form>
    </>
  )
}

export default RegisterForm

