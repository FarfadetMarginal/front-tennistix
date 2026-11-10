import { useState } from "react"
import apiService from '../services/apiService';
import { Link } from "react-router-dom"
import Loader from "./Loader";


function ForgotPassForm() {
    const [email, setEmail] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const controller = new AbortController()
        try {
            setLoading(true)
            setError(null)
            await apiService.forgotpass(email, controller.signal)
            setError("Mail sent")
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
            <h1>Enter your mail, submit and check your inbox ! </h1>
            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" id="mail" placeholder="Enter your mail adress" onChange={(e) => setEmail(e.target.value)} />

            <button type="submit">Reset password</button>
            <p className="forgotmessage">{error}</p>
            {error === "Mail sent" && <Link to="/login">Back to login</Link>}
        </form>
    </>
  )
}

export default ForgotPassForm
