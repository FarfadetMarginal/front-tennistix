
import ModifyForm from "../components/ModifyForm";
import '../styles/pages/_modify.scss'

const Modify = () => {
    return (
        <>
            <main className="modifymain">
                <img className="lillogo" src="logotx.webp" alt="logo tennistix" />
                <section>
                    <ModifyForm />
                </section>
            </main>
            {/* <Footer /> */}
        </>
    )
}

export default Modify