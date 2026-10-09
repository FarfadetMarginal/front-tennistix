import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import apiService from '../services/apiService'
import SearchDisplay from "../components/SearchDisplay"
import '../styles/pages/_search.scss'
import NavBar from "../components/Navbar"

const Search = () => {
    const { accessToken } = useAuth()
    const [mode, setMode] = useState('players')
    const [query, setQuery] = useState('')
    const [results, setResults] = useState([])
    const [players, setPlayers] = useState([])

    // Chargement unique au montage
    useEffect(() => {
        const controller = new AbortController()
        apiService.getPlayers(accessToken, controller.signal)
            .then(data => setPlayers(data.data || []))
                
            .catch(err => { if (err.name !== 'AbortError') console.error(err) })
        return () => controller.abort()
    }, [accessToken])

    const handleSearch = async (value) => {
        setQuery(value)
        if (!value.trim()) { setResults([]); return }

        if (mode === 'users') {
            const data = await apiService.getUsers(accessToken, value)
            setResults(data.users || [])
        }
    }

    return (
        <>
        <main className="searchmain">
            <img className="lillogo" src="logotx.webp" alt="logo tennistix" />
            <section className="s1search">

            <div className="checkbox-wrapper-35">
                <input
                    type="checkbox"
                    id="switch"
                    name="switch"
                    className="switch"
                    checked={mode === 'users'}
                    onChange={(e) => {
                        setMode(e.target.checked ? 'users' : 'players')
                        setResults([])
                        setQuery('')
                    }}
                    />
                <label htmlFor="switch">
                    <span className="switch-x-text">Search</span>
                    <span className="switch-x-toggletext">
                        <span className="switch-x-unchecked">
                            <span className="switch-x-hiddenlabel">Unchecked: </span>Players
                        </span>
                        <span className="switch-x-checked">
                            <span className="switch-x-hiddenlabel">Checked: </span>Users
                        </span>
                    </span>
                </label>
            </div>

            <input
                type="text"
                placeholder={mode === 'players' ? 'Search a player...' : 'Search an user...'}
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                />

            <SearchDisplay results={results} mode={mode} query={query} players={players} />
                
            </section>
            <NavBar />
        </main>
        </>
    )
}

export default Search