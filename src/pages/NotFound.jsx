import '../styles/pages/_notfound.scss'
import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <>
            <main className="notfoundmain">
            <Link to="/"><img width='341px' height='498px' className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1notfound">
                    <h1>404</h1>
                    <h2>Not Found</h2>
                    <img src="404webp.png" alt="blue marble racket and ball" />
                </section>
            </main>
        </>
    )
}

export default NotFound
