import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '../styles/components/_profiledisplay.scss'
import apiService from '../services/apiService'


const NotifsDisplay = ({users}) => {
    const { accessToken, authLoading, user} = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (authLoading) return
        if (!accessToken) { navigate('/login'); return }
    }, [accessToken, authLoading]) // se relance quand les filtres changent

    const [error, setError] = useState(null)
    const [localUsers, setUsers] = useState(users)

    useEffect(() => {
        setUsers(users)
    }, [users])

    if (authLoading) return <p>Chargement...</p>
    

    const handleAccept = async (id) => {
        try {
            await apiService.acceptRequest(accessToken, id)
            setUsers(prev => prev.filter(u => u.sender_id !== id))
        } catch (err) {
            setError(err.message)
        }
    }

    const handleDecline = async (id) => {
        try {
            await apiService.declineRequest(accessToken, id)
            setUsers(prev => prev.filter(u => u.sender_id !== id))
        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="d1notifs">
                 {localUsers.map(user => (
                    <div className="d2notifs" key={user.sender_id}>
                        <p>{user?.pseudo} sent you a friend request</p>
                        <button onClick={() => handleAccept(user.sender_id)}>Accept</button>
                        <button onClick={() => handleDecline(user.sender_id)}>Decline</button>
                    </div>
                 ))}
            </div>
            <p>{error}</p>
        </>
    )
}

export default NotifsDisplay