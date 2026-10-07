import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '../styles/components/_profiledisplay.scss'


const ProfileDisplay = () => {
    const { accessToken, authLoading, user } = useAuth()
    const navigate = useNavigate()
    const urlimg = `/avatars/${user?.pp}`

    useEffect(() => {
        if (authLoading) return
        if (!accessToken) { navigate('/login'); return }
    }, [accessToken, authLoading]) // se relance quand les filtres changent

    if (authLoading) return <p>Chargement...</p>

    return (
        <>
            <section className="s1profile">
                <img src={urlimg} alt="photo de profil" />
                <div className="d1profile">
                    <p>{user?.pseudo}</p>
                    <Link to="/notif">Notifications</Link>
                    <Link to="/favlist">Favorite list</Link>
                    <Link to="/modify">Modify profile</Link>
                    <button>Logout</button>
                </div>
            </section>
        </>
    )
}

export default ProfileDisplay