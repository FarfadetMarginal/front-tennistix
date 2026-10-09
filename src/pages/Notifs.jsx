import { useState, useEffect } from "react"
import { useAuth } from "../contexts/AuthContext"
import { useNavigate } from "react-router-dom"
import apiService from '../services/apiService'
import NotifsDisplay from "../components/NotifsDisplay"
import NavBar from "../components/Navbar"

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
                <img className="lillogo" src="logotx.webp" alt="logo tennistix" />
                <section className="s1notifs">
                    <NotifsDisplay users={request} />
                </section>
                <NavBar />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Notifs