import { logIn, register } from '../../API/auth'
import { createContext, useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'

const defaultAuthContext = {
  isAuthenticated: false,
  currentMember: null,
  register: null,
  login: null,
  logout: null
}

const AuthContext = createContext(defaultAuthContext)
export const useAuth = () => useContext(AuthContext)
// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [currentMember, setCurrentMember] = useState(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')

    if (!authToken) {
      setIsAuthenticated(false)
      return
    }
    setIsAuthenticated(true)

  }, [pathname])
  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        currentMember,
        register: async (data) => {
          const { success, userToken, newUserData } = await register({
            name: data.name,
            email: data.email,
            password: data.password,
            passwordCheck: data.passwordCheck,
            birthday: data.birthday || null,
            gender: data.gender || null,
            address: data.address || null,
            phone: data.phone || null
          })
          setCurrentMember(newUserData)
          setIsAuthenticated(true)
          localStorage.setItem('authToken', userToken)
          
          return success
        },
        login: async (data) => {
          const { success, userToken, userData } = await logIn({
            email: data.username,
            password: data.password
          })
          setCurrentMember(userData)
          setIsAuthenticated(true)
          localStorage.setItem('authToken', userToken)
        
          return success
        },
        logout: () => {
          localStorage.removeItem('authToken')
          setCurrentMember(null)
          setIsAuthenticated(false)
        }
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
