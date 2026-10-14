import { useState } from 'react'

function TestLog() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    return isLoggedIn
}

export default TestLog