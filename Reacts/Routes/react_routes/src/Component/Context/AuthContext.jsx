import { createContext, useState } from "react";


export const AuthContext = createContext({
    token:"",
    handletokenChange:()=>{

    }
});



export const AuthProvider =({children})=>{

    const [token,settoken]=useState("");

    const handletokenChange=(token)=>{
        settoken(token)
    }

    return <AuthContext.Provider value={{token,handletokenChange}}>{children}</AuthContext.Provider>
}
