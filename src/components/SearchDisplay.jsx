import apiService from '../services/apiService'
import { useAuth } from "../contexts/AuthContext"
import { useState } from "react"

const SearchDisplay = ({ results, mode, query, players }) => {
    const { accessToken } = useAuth()
    const [error, setError] = useState(null)
    const [sentRequests, setSentRequests] = useState([])

    const handleSendRequest = async (userId) => {
        try {
            await apiService.sendRequest(accessToken, userId)
            console.log('Demande envoyée')
            setSentRequests(prev => [...prev, userId])
        } catch (err) {
            if (err.status === 409) {
                setSentRequests(prev =>
                    prev.includes(userId) ? prev : [...prev, userId]
                )
                return
            }
            console.error(err.message)
            setError(err.message)
        }
    }
    
    const displayed = mode === 'users'
        ? results
        : players.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className='divsearch'>
            {displayed.map(item => (
                <>
                <div key={item.id}>
                    {mode === 'users' && (
                        <img src={`/avatars/${item?.pp}`} alt="profile picture" />
                    )}
                    <p>{mode === 'players' ? item.name : item.pseudo}</p>
                    {mode === 'users' && (
                        <button onClick={() => handleSendRequest(item.id)} disabled={sentRequests.includes(item.id)}>{sentRequests.includes(item.id) ? "Request sent" : "Add friend"}</button>
                    )}
                </div>
                <p>{error}</p>
                </>
            ))}
        </div>
    )
}

export default SearchDisplay