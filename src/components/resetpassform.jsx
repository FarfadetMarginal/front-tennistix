import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import apiService from '../services/apiService';


function ResetPassForm() {
    const [email, setEmail] = useState(null)
    const [newPassword, setNewPassword] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState(null)
    const { token } = useParams();

    async function handleSubmit(e) {
        e.preventDefault()
        const controller = new AbortController()
        try {
            setLoading(true)
            setError(null)
            const datas = await apiService.resetpass(token, email, newPassword, controller.signal)
            navigate('/login');
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

    if(loading) return <p>Chargement...</p>

  return (
    <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" placeholder="Enter your mail adress" onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="Enter your password" onChange={(e) => setNewPassword(e.target.value)} />

            <button type="submit">Reset password</button>
        </form>
        <p>{error}</p>
    </>
  )
}

export default ResetPassForm