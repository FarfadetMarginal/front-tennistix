import '../styles/pages/_profile.scss'
import ProfileDisplay from "../components/ProfileDisplay"

const Profile = () => {
    return (
        <>
            <main className="profilemain">
            <img className="lillogo" src="logotx.webp" alt="logo tennistix" />
                <section className="s1profile">
                    <ProfileDisplay />
                </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Profile