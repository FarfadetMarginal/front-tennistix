import { createContext, useContext, useState, useEffect } from "react"
import apiService from '../services/apiService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null)
  const [loading, setLoading] = useState(true)

    useEffect(() => {
        const controller = new AbortController()

        apiService.refresh(controller.signal)
        .then(data => setAccessToken(data.token))
        .catch(err => {
            if (err.name !== 'AbortError') setAccessToken(null)
        })
        .finally(() => {
            if (!controller.signal.aborted) setLoading(false)
        })

        return () => controller.abort()
    }, [])

  if (loading) return <p>Chargement...</p>

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)