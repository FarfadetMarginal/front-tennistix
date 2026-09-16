import { useState } from "react"
import { useNavigate } from "react-router-dom"
import apiService from '../services/apiService';
import { Link } from "react-router-dom"

function ForgotPassForm() {
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const controller = new AbortController()
        try {
            setLoading(true)
            setError(null)
            const datas = await apiService.forgotpass(email, controller.signal)
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

            <button type="submit">Reset password</button>
        </form>
        <p>{error}</p>
    </>
  )
}

export default ForgotPassForm