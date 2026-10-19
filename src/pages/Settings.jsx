import '../styles/pages/_settings.scss'
import { Link, NavLink } from "react-router-dom"

const Settings = () => {
    return (
        <>
            <main className="settingsmain">
            <Link to="/"><img width='45px' height='66px' className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1settings">
                    <NavLink  className='settings-legals1' to="/legals#s1legals"><p>General Terms of Use</p></NavLink>
                    <NavLink  className='settings-legals2' to="/legals#s2legals"><p>Privacy Policy</p></NavLink>
                    <NavLink  className='settings-legals3' to="/legals#s3legals"><p>Legal Notice</p></NavLink>
                </section>
            </main>
        </>
    )
}

export default Settings