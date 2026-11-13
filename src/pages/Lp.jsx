import { Link } from "react-router-dom"
import LpFeatures from "../components/LpFeatures"
import LpFooter from "../components/LpFooter"
import '../styles/pages/_lp.scss'

const Lp = () => {
    return (
        <div className="lp">
            <header className="lpheader">
                <Link to="/" aria-label="TennisTix home"><img width={60} height={88} className="lillogo" src="/logotx.webp" alt="TennisTix" /></Link>
                <nav aria-label="Account">
                    <Link className="lplogin" to="/login">Login</Link>
                    <Link className="lpregister" to="/register">Register</Link>
                </nav>
            </header>
            <main className="Lpmain">
                <LpFeatures />
                <section className="lpjoin" aria-labelledby="lpjointitle">
                    <h2 id="lpjointitle"><Link to="/register">Join Tennistix now !</Link></h2>
                    <Link className="lpcreate" to="/register">Create free account</Link>
                </section>
            </main>
            <LpFooter />
        </div>
    )
}

export default Lp
