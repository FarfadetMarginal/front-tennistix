import { createContext, useContext, useState, useEffect } from "react"
import apiService from '../services/apiService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [accessToken, setAccessToken] = useState(null)
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const logout = () => {
      setAccessToken(null)
      setUser(null)
  }

    useEffect(() => {
        const controller = new AbortController()

        apiService.refresh(controller.signal)
        .then(data => {
          setAccessToken(data.token)
          setUser(data.user)
        })
        .catch(err => {
          console.log('refresh failed:', err.message)
            if (err.name !== 'AbortError') setAccessToken(null)
        })
        .finally(() => {
            if (!controller.signal.aborted) setLoading(false)
        })

        return () => controller.abort()
    }, [])

  if (loading) return <p>Chargement...</p>

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)