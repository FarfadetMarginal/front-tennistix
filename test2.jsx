import '../styles/components/_card.scss'

function Card() {

    useEffect(() => {
        console.log("composant monté")
        }, [])

    return (
        <>
            <div>
                <h2>titre</h2>
                <p>texte</p>
            </div>
        </>
    )
}

export default Card