import '../styles/pages/_profile.scss'
import ProfileDisplay from "../components/ProfileDisplay"
import NavBar from '../components/Navbar'

const Profile = () => {
    return (
        <>
            <main className="profilemain">
            <img className="lillogo" src="logotx.webp" alt="logo tennistix" />
                <section className="s1profile">
                    <ProfileDisplay />
                </section>
                <NavBar />
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Profile