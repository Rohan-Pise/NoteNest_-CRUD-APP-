import React from 'react'
import { useEffect } from 'react'
import{useLogoutHook} from "../CustomHooks/LogoutHook"

function Logout() {
  const{logout} = useLogoutHook();


useEffect(()=>{
  logout();
  },[])
  return (
    <div className="bg-white h-screen  mx-auto text-center flex items-center justify-center">
       <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Logged Out Successfully 💚 
          </h2>
    </div>
  )
}

export default Logout
