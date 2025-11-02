import axios from 'axios'
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import React from 'react'
import{loggedInState} from "../stateStore/authStore"
import { useRecoilState } from 'recoil'

export function useLogoutHook() {
  const [isLoggedIn , setIsLoggedIn] = useRecoilState(loggedInState)
  async function logout(){
    
    await axios.get(`${API_BASE_URL}/logout`,{withCredentials:true});

    setIsLoggedIn(false);
    
  }
  return{
    logout,
  }
}

