import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiService from '../services/apiService';
import { Link } from "react-router-dom"

function LoginForm() {
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const controller = new AbortController()

        try {
            setLoading(true)
            setError(null)
            const datas = await apiService.login(email, password, controller.signal)
            navigate('/home')
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

    if(loading) return <p>Chargement...</p>

  return (
    <>
        <form onSubmit={handleSubmit}>
            <h1>Welcome back !</h1>
            
            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" placeholder="Enter your mail adress" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />
            <Link to="/forgotpass">Forgot password</Link>

            <button type="submit">Login</button>
            <div>
                <p>Don't have an account ? </p>
                <Link to="/register">Register</Link>
            </div>
        </form>
        <p>{error}</p>
    </>
  )
}

export default LoginForm