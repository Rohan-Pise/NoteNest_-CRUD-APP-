import React from 'react'
import { useEffect } from 'react';
import {loggedInState} from '../stateStore/authStore'
import { useRecoilValue } from 'recoil'
import { useCustomLoginHook } from '../CustomHooks/CustomLoginHook';
import { Navigate } from 'react-router-dom';

function RequiredAuth(props) {
 const isLoggedIn = useRecoilValue(loggedInState);
 const{checkAuth} = useCustomLoginHook();

useEffect(()=>{
   if(isLoggedIn === null){
    checkAuth();
   } 
},[])

if(isLoggedIn === null){
  return <div>Loading .......</div>
}

 if(isLoggedIn === false){
  return <Navigate to="/login"></Navigate>
 }

 return <div>{props.children}</div>
}

export default RequiredAuth
