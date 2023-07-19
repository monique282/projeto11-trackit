import React, { createContext, useState } from "react";

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {

    const [token, settoken] = useState('');
    const [image, setimage] = useState();
    const [concluidos, setconcluidos] = useState();
    return (
        <AuthContext.Provider value={{
            token, settoken,
            image, setimage,
            concluidos, setconcluidos
            }}>
            {children}
        </AuthContext.Provider>
    )
}

