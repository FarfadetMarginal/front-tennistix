import '../styles/pages/_profile.scss'
import { Link } from "react-router-dom"
import CGU from '../components/CGU'
import RGPD from '../components/RGPD'
import Conf from '../components/conf'
import MentionsLegales from '../components/mentionslegales'

const Legals = () => {
    return (
        <>
            <main className="legalsmain">
            <Link to="/"><img className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1legals">
                    <CGU />
                </section>
                <section className="s2legals">
                    <RGPD />
                </section>
                <section className="s3legals">
                    <Conf />
                </section>
                <section className="s4legals">
                    <MentionsLegales />
                </section>
            </main>
        </>
    )
}

export default Legals