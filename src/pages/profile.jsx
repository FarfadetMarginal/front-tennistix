import '../styles/pages/_profile.scss'
import ProfileDisplay from "../components/ProfileDisplay"
import { Link } from "react-router-dom"

const Profile = () => {
    return (
        <>
            <main className="profilemain">
            <Link to="/"><img width={45} height={66} className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1profile">
                    <ProfileDisplay />
                </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Profile