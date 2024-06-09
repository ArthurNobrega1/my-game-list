import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
  const [isLoged, setIsLoged] = useState(() => {
    return localStorage.getItem('isLoged') || ''
  })

  useEffect(() => {
    localStorage.setItem('isLoged', isLoged);
  }, [isLoged])

  return (
    <AuthContext.Provider value={{ isLoged, setIsLoged }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
