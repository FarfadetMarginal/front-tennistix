import '../styles/pages/_profile.scss'
import ProfileDisplay from "../components/ProfileDisplay"
import { Link } from "react-router-dom"

const Legals = () => {
    return (
        <>
            <main className="legalsmain">
            <Link to="/"><img className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1legals">
                    <ProfileDisplay />
                </section>
                <section className="s2legals">
                    <ProfileDisplay />
                </section>
                <section className="s3legals">
                    <ProfileDisplay />
                </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Legals