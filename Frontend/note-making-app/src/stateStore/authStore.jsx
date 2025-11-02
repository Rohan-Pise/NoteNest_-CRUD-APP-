import { atom } from 'recoil';


export const loginState = atom({
  key:"loginState",
  default:{
    email:"",
    password:"",
  }
})

export const messageState = atom({
  key:"message",
  default:{
    msg:"",
  }
})


export const loggedInState = atom({
  key:"loggedInState",
  default:null,
})

// signup states

export const signupState = atom({
  key:"signupState",
  default:({
    email:"",
    password:"",
  })
})