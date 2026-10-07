import { useState, useEffect } from "react"
import apiService from '../services/apiService';
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"


const Avatars = ['blaireau.webp', 'bouledogue.webp', 'bull.webp', 'chien.webp', 'coq.webp', 'croco.webp', 'fox.webp', 'goat.webp', 'gorille.webp', 'koala.webp', 'lapin.webp', 'leopard.webp', 'lion.webp', 'loup.webp', 'lynx.webp', 'ours.webp', 'owl.webp', 'panthere.webp', 'rhino.webp', 'tigre.webp']

function ModifyForm() {
    const [pseudo, setPseudo] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [pp, setPp] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const { accessToken, authLoading, user } = useAuth()
    const navigate = useNavigate()
    useEffect(() => {
            if (authLoading) return
            if (!accessToken) { navigate('/login'); return }
            console.log(user)
        }, [accessToken, authLoading]) // se relance quand les filtres changent
    
        if (authLoading) return <p>Chargement...</p>

    async function handleSubmit(e) {
        e.preventDefault()
        const controller = new AbortController()

        try {
            setLoading(true)
            await apiService.updateUser( accessToken, pseudo, email, password, pp, controller.signal)
            navigate('/profile')
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
            <input type="text" name="pseudo" placeholder={user?.pseudo} onChange={(e) => setPseudo(e.target.value)} />

            <label htmlFor="mail">Mail</label>
            <input type="email" name="mail" placeholder={user?.email} onChange={(e) => setEmail(e.target.value)} />

            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="New password" onChange={(e) => setPassword(e.target.value)} />

            <div className="avatar-grid">
                {Avatars.map(avatar => (
                    <img
                        key={avatar}
                        src={`/avatars/${avatar}`}
                        alt={avatar}
                        className={pp === avatar ? 'selected' : ''}
                        onClick={() => setPp(avatar)}
                    />
                ))}
            </div>

            <button type="submit">Save</button>

        </form>
        <p>{error}</p>
    </>
  )
}

export default ModifyForm