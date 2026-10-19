
import ModifyForm from "../components/ModifyForm";
import '../styles/pages/_modify.scss'
import { Link } from "react-router-dom"

const Modify = () => {
    return (
        <>
            <main className="modifymain">
                <Link to="/"><img width={56} height={82}  className="lillogo" src="logotx.webp" alt="logo tennistix" /></Link>
                <section className="s1modify">
                    <ModifyForm />
                </section>
            </main>
        </>
    )
}

export default Modify