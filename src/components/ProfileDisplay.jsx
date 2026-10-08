import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '../styles/components/_profiledisplay.scss'
import apiService from '../services/apiService'


const ProfileDisplay = () => {
    const { accessToken, authLoading, user, logout } = useAuth()
    const navigate = useNavigate()
    const urlimg = `/avatars/${user?.pp}`

    const handleLogout = async () => {
        await apiService.logout()
        logout()
        navigate('/login')
    }

    useEffect(() => {
        if (authLoading) return
        if (!accessToken) { navigate('/login'); return }
    }, [accessToken, authLoading]) // se relance quand les filtres changent

    if (authLoading) return <p>Chargement...</p>

    return (
        <>
                <img src={urlimg} alt="photo de profil" />
                <div className="d1profile">
                    <p>{user?.pseudo}</p>
                    <Link to="/notif">Notifications</Link>
                    <Link to="/favlist">Favorite list</Link>
                    <Link to="/modify">Modify profile</Link>
                    <button onClick={handleLogout}>Logout</button>
                </div>
        </>
    )
}

export default ProfileDisplay