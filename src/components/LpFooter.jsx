import { Link } from "react-router-dom"
import '../styles/components/_lpfooter.scss'

function LpFooter() {
    return (
        <footer className="lpfooter">
            <picture className="lplandscape">
                <source media="(prefers-reduced-motion: reduce)" srcSet="/images/lp-tennis-still.webp" />
                <img width={1302} height={434} src="/images/lp-tennis-animated.webp" alt="" />
            </picture>
            <nav className="lplegals" aria-label="Legal information">
                <Link to="/legals#s3legals">Legal notice</Link>
                <Link to="/legals#s2legals">Privacy policy</Link>
                <Link to="/legals#s1legals">Terms of use</Link>
            </nav>
            <p className="lpcopyright">© 2026 Baptiste COUTAS - All rights reserved.</p>
        </footer>
    )
}

export default LpFooter
