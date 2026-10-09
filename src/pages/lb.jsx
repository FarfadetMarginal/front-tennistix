import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import apiService from '../services/apiService'
import LbDisplay from "../components/LbDisplay"
import LbFilters from "../components/filterbarlb"
import '../styles/pages/_lb.scss'
import NavBar from "../components/Navbar"


const Leaderboard = () => {
    const { accessToken, authLoading } = useAuth()
    const navigate = useNavigate()
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [type, setType] = useState('score')
    const [scope, setScope] = useState('global')

    useEffect(() => {
        if (authLoading) return
        if (!accessToken) { navigate('/login'); return }

        const controller = new AbortController()
        async function load() {
            try {
                setLoading(true)
                const res = await apiService.getLb(accessToken, type, scope, controller.signal)
                setData(res.result || [])
            } catch (err) {
                if (err.name !== 'AbortError') setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        load()
        return () => controller.abort()
    }, [accessToken, authLoading, type, scope]) // se relance quand les filtres changent

    if (loading) return <p>Chargement...</p>
    if (error) return <p>{error}</p>

    return (
        <>
        <main className="lbmain">

            <img className="lillogo" src="logotx.webp" alt="logo tennistix" />
            <LbFilters type={type} setType={setType} scope={scope} setScope={setScope} />
            <section className="s1lb">
                <LbDisplay data={data} type={type} />
            </section>
        <NavBar />
        </main>
        </>
    )
}

export default Leaderboard