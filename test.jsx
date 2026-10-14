import { useState } from 'react'

const Test = (isLoggedIn) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
            try {
                await apiService.login(email, password, controller.signal)
                setIsLoggedIn(true)
            
            } catch (err) {
                return err
            }

        }
    return (
        <>
        {isLoggedIn === true ? ( 
            <p>Connecté</p>
        ) : (
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="mail" />
                <input type="text" placeholder="password"/>
                <button type="submit">Login</button>
            </form>

        )}
        
        </>
    )
}

export default Test