import { useState, useEffect } from 'react'

const Test = (isLoggedIn) => {
    const [compteur, setCompteur] = useState(0)

    function handleClick() {
        setCompteur(compteur + 1)
    }

    useEffect(() => {
       document.title = "Compteur: " + compteur
    }, [compteur])

    return (
        <>
        <h1>{compteur}</h1>
        <button onClick={handleClick}>+1</button>
        </>
    )
}

export default Test