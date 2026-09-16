import { useState } from "react"
import apiService from '../services/apiService';
import { Link } from "react-router-dom"

function RegisterForm() {
    const [pseudo, setPseudo] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const controller = new AbortController()

        try {
            setLoading(true)
            const datas = await apiService.register(pseudo, email, password, controller.signal)
            setData(datas)
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
            <label htmlFor="pseudo">Username</label>
            <input type="text" name="pseudo" placeholder="Enter your username" onChange={(e) => setPseudo(e.target.value)} />

            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" placeholder="Enter your mail adress" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={(e) => setPassword(e.target.value)} />

            <button type="submit">Register</button>
            <div>
                <p>Already have an account ? </p>
                <Link to="/login">Login</Link>
            </div>
        </form>
        <p>{error}</p>
    </>
  )
}

export default RegisterForm