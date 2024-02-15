
import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { AuthContext } from "../context/AuthContext";

function Login() {

  const { login,token } = useContext(AuthContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [tokenAddedToUrl,setTokenAddedToUrl] = useState(false);

  //check for token in URL present or not
  useEffect(()=>{
    const urlParam = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParam.get("token");

    if(tokenFromUrl && !tokenAddedToUrl){
      const urlWithoutToken = new URL(window.location.href);
      urlWithoutToken.searchParams.delete("token");
      window.history.replaceState({},"",urlWithoutToken.toString());
    }
  },[tokenAddedToUrl]);

    // Listen for changes in the token state
  useEffect(() => {
    // If token is available and not added to the URL, update the URL with the token
    if (token && !tokenAddedToUrl) {
      const urlWithToken = new URL(window.location.href);
      urlWithToken.searchParams.set("token", token);
      window.history.pushState({}, "", urlWithToken.toString());
      setTokenAddedToUrl(true); // Set the state to indicate that token is added to the URL
    }
  }, [token, tokenAddedToUrl]);

  const handleLogin = (e) => {
    e.preventDefault();
    login(email, password);
    
    // Clear the input fields after successful login
    setPassword("");
    setEmail("");
  };

  return (
    <form className="h-screen">
      <div className=" mt-16 shadow-lg mx-[15%] md:mx-[25%] md:mt-24 lg:mx-[32%] xl:mx-[35%]">
        <p className="text-center font-bold text-[20px]">Login Form</p>
        <div className="flex flex-col justify-center items-center py-6">
          <div className="m-2">
            <label>Email : </label>
            <input
              type="email"
              placeholder="  Enter Email"
              className="border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="m-2">
            <label>Password : </label>
            <input
              type="password"
              placeholder="password "
              className="border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required  
            />
          </div>
          <div>
            <button onClick={handleLogin} className="border p-1 px-3 bg-black text-white font-bold mt-3">
              Submit
            </button>
          </div>
        </div>
        {/* {error && <p style={{ color: 'red' }}>{error}</p>} */}
      </div>
    </form>
  );
}

export default Login;
