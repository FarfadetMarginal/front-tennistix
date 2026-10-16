import { createContext, useContext, useState, useEffect } from "react"
import apiService from '../services/apiService'
import Loader from "../components/Loader"

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
    }, []) //recup des infos au chargement

    useEffect(() => {
      const controller = new AbortController()

      const timer = setTimeout(async () =>{
        try {
          const data = await apiService.refresh(controller.signal)
          setAccessToken(data.token)
          setUser(data.user)
        } catch (err) {
          console.log('refresh failed:', err.message)
          if (err.name !== 'AbortError') setAccessToken(null)
        } finally {
          if (!controller.signal.aborted) setLoading(false)
        }
      }, 840000)//14minutes, token = 15minutes donc un peu de délai


      return () => {
        clearTimeout(timer)
        controller.abort()
      }
    }, [accessToken]) //au bout de 14minutes, on refresh pour pas que ca plante

  if (loading) return <Loader />

  return (
    <AuthContext.Provider value={{ accessToken, setAccessToken, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)