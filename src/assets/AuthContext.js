import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoged, setIsLoged] = useState("");
    
    return (
        <AuthContext.Provider value={{ isLoged, setIsLoged }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
