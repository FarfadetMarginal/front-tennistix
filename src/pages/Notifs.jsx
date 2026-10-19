import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import apiService from '../services/apiService'
import NotifsDisplay from "../components/NotifsDisplay"
import '../styles/pages/_notifs.scss'
import { Link } from "react-router-dom"

const Notifs = () => {

    const { accessToken } = useAuth()
    const [request, setRequest] = useState([])

    // Chargement unique au montage
    useEffect(() => {
        const controller = new AbortController()
        apiService.getRequests(accessToken, controller.signal)
            
            .then(data => {
                console.log('requests:', data),
                setRequest(data.requestlist || [])
            })
                
            .catch(err => { if (err.name !== 'AbortError') console.error(err) })
        return () => controller.abort()
    }, [accessToken])

    return (
        <>
            <main className="notifsmain">
                <Link to="/"><img width={56} height={82}  className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1notifs">
                    <NotifsDisplay users={request} />
                </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Notifs