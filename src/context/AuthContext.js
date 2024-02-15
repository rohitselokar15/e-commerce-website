import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) =>{

    const[user,setUser] = useState(null);
    const[error,setError] = useState(null);
    const [token, setToken] = useState(null);
    const [authenticated,setAuthenticated] = useState(false);


    const login = async (email,password)=>{
        try{
            const response = await fetch('https://reqres.in/api/login',{
                method:'POST',
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({email,password}),
            });
            if(response.ok){
                alert("successfully Login");
            }
            else{
                alert("Invalid Crediantial");
            }
            

            const data = await response.json();
            setUser(data);
            setToken(data.token);
            setError(null);
            setAuthenticated(true);
        }
        catch(error){
            setUser(null);
            setToken(null);
            setAuthenticated(false);
            setError("Authentication Failed");
        }
    };

    const logout = ()=>{
        setUser(null);
        setToken(null);
        setAuthenticated(false);
        setError(null);
    }

    
    return(
        <AuthContext.Provider value={{user,error,token,login,logout,authenticated}}>
        {children}
        </AuthContext.Provider>
    )
}