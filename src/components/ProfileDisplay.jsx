// pages/leaderboard.jsx
import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
// import '../styles/pages/_profile.scss'


const ProfileDisplay = () => {
    const { accessToken, authLoading, user } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (authLoading) return
        if (!accessToken) { navigate('/login'); return }
        console.log(user)
    }, [accessToken, authLoading]) // se relance quand les filtres changent

    if (authLoading) return <p>Chargement...</p>

    return (
        <>
            <section className="s1profile">
                <img src={user?.pp} alt="photo de profil" />
                <p>{user?.pseudo}</p>
                <p>{user?.email}</p>
                <p>{user?.score} pts</p>
                <button>Logout</button>
                <Link to="/modify">Modify profile</Link>
            </section>
        </>
    )
}

export default ProfileDisplay