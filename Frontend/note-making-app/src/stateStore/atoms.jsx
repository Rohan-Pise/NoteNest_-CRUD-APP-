import { atom } from 'recoil';

export const notesState = atom({
  key: 'notes', // unique ID (with respect to other atoms/selectors)
  default: null, // default value (aka initial value)
});

export const formState = atom({
  key:"formState",
  default:{
    title: "",
    body: "",
  }
});

export const updateState = atom({
  key:"updateState",
  default:
    {
      _id:null,
      title: "",
      body: "",
    }
  
})






