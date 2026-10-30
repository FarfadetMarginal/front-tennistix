import { useEffect } from "react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"
import apiService from "../services/apiService"
import '../styles/pages/_settings.scss'

const Settings = () => {
    const { accessToken, logout } = useAuth()
    const navigate = useNavigate()

    useEffect(() => {
        if (!accessToken) navigate('/login')
    }, [accessToken, navigate])

    const handleResetAnalytics = () => {
        localStorage.removeItem("analyticsConsent")
        window.location.reload()
    }

    const handleDeleteAccount = async () => {
        const confirmed = window.confirm(
            "Are you sure you want to permanently delete your account? Your profile, predictions and friend connections will be deleted. This action cannot be undone."
        )

        if (!confirmed) return

        try {
            await apiService.deleteUser(accessToken)
            logout()
            navigate('/login')
        } catch (err) {
            console.error('error: ', err)
        }
    }

    return (
        <>
            <main className="settingsmain">
                <Link to="/"><img width={56} height={82} className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1settings">
                    <NavLink className='settings-legals1' to="/legals#s1legals"><p>General Terms of Use</p></NavLink>
                    <NavLink className='settings-legals2' to="/legals#s2legals"><p>Privacy Policy</p></NavLink>
                    <NavLink className='settings-legals3' to="/legals#s3legals"><p>Legal Notice</p></NavLink>
                    <button type="button" onClick={handleResetAnalytics}>
                        Change analytics consent
                    </button>
                    <button type="button" onClick={handleDeleteAccount}>
                        Delete account
                    </button>
                </section>
            </main>
        </>
    )
}

export default Settings
