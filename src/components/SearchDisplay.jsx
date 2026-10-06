import apiService from '../services/apiService'
import { useAuth } from "../contexts/AuthContext"

const SearchDisplay = ({ results, mode, query, players }) => {
    const { accessToken } = useAuth()

    const handleSendRequest = async (userId) => {
        try {
            await apiService.sendRequest(accessToken, userId)
            console.log('Demande envoyée')
        } catch (err) {
            console.error(err.message)
        }
    }
    
    const displayed = mode === 'users'
        ? results
        : players.filter(p => p.name.toLowerCase().includes(query.toLowerCase()))

    return (
        <div className='divsearch'>
            {displayed.map(item => (
                <div key={item.id}>
                    <p>{mode === 'players' ? item.name : item.pseudo}</p>
                    {mode === 'users' && (
                        <button onClick={() => handleSendRequest(item.id)}>Add friend</button>
                    )}
                </div>
            ))}
        </div>
    )
}

export default SearchDisplay