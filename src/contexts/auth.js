import React, { useState, createContext } from 'react';

export const AuthContext = createContext({});

export const AuthProvider = ({children}) => {

    const [user, setUser] = useState({});
    const [token, setToken] = useState('')

    return(
      <AuthContext.Provider value={{ user, setUser, token, setToken}}>
        {children}
      </AuthContext.Provider>
    );

} 

export default AuthContext;