import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoged, setIsLoged] = useState(localStorage.getItem('isLoged') || '')

    useEffect(() => {
        if (isLoged) {
            validateId(isLoged).then(isValid => {
                if (!isValid) {
                    setIsLoged('')
                }
            })
        }
    }, [isLoged])

    const validateId = async (id) => {
        try {
            const response = await fetch(`http://localhost:8888/validateId?id=${id}`)
            const data = await response.json()
            return data.valid
        } catch (error) {
            console.error('Error validating ID:', error)
            return false
        }
    };

    useEffect(() => {
        localStorage.setItem('isLoged', isLoged);
    }, [isLoged])

    return (
        <AuthContext.Provider value={{ isLoged, setIsLoged }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
