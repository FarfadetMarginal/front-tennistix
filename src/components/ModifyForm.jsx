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
    const [avatarModal, setAvatarModal] = useState(false)
    const navigate = useNavigate()

    const currentAvatar = pp || user?.pp 
    const urlimg = currentAvatar ? `/avatars/${currentAvatar}` : `/avatars/${user?.pp}`


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

    function handleAvatarSelect(avatar) {
        setPp(avatar)
        setAvatarModal(false)
    }
    
  return (
    <>
        <button className="avatar-edit-button" onClick={() => setAvatarModal(true)} aria-label="Changer de photo de profil"><i className="hgi hgi-stroke hgi-rounded hgi-ai-editing"></i></button>
        <img src={urlimg} alt="photo de profil" />
        <form className="modifyform" onSubmit={handleSubmit}>
            <input className="inputpseudo" type="text" name="pseudo" placeholder={user?.pseudo} onChange={(e) => setPseudo(e.target.value)} />

            {avatarModal && (
                <div className="avatar-modal-overlay" onClick={() => setAvatarModal(false)}> 
                    <div className="avatar-modal" onClick={(e) => e.stopPropagation()}>
                        <button type="button" className="avatar-modal-close" onClick={() => setAvatarModal(false)}> × </button> 
                        <div className="avatar-grid"> {Avatars.map((avatar) => (
                            <button type="button" key={avatar} className={`avatar-choice ${ currentAvatar === avatar ? 'selected' : '' }`} onClick={() => handleAvatarSelect(avatar)} > 
                                <img src={`/avatars/${avatar}`} alt={avatar.replace('.webp', '')} /> 
                            </button> ))} 
                        </div> 
                    </div> 
                </div> )}

            <input className="input2" type="email" name="mail" placeholder={user?.email} onChange={(e) => setEmail(e.target.value)} />

            <input className="input2" type="password" name="password" placeholder="New password" onChange={(e) => setPassword(e.target.value)} />


            <button type="submit">Save</button>

        </form>

        <p>{error}</p>
    </>
  )
}

export default ModifyForm