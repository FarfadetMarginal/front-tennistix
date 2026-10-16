import { useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import '../styles/pages/_legals.scss'
import CGU from '../components/CGU'
import Conf from '../components/conf'
import MentionsLegales from '../components/mentionslegales'

const Legals = () => {

    const { hash } = useLocation()

    useEffect(() => {
        const id = hash.slice(1)
        if(id) {
            document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
        }
    }, [hash])

    return (
        <>
            <main className="legalsmain">
                <Link to="/"><img className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section id="s1legals" className="s1legals">
                    <CGU />
                </section>
                <section id="s2legals" className="s2legals">
                    <Conf />
                </section>
                <section id="s3legals" className="s3legals">
                    <MentionsLegales />
                </section>
            </main>
        </>
    )
}

export default Legals
