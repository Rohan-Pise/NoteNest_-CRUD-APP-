import { useRecoilState } from 'recoil';
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import {  notesState , updateState } from '../stateStore/atoms';
import axios from "axios";

export function useUpdatingNotesHook() {

  const [notes, setNotes] = useRecoilState(notesState);
  const [updateForm , setUpdateForm]= useRecoilState(updateState);

  const updateNote = async (e)=>{
    e.preventDefault();
  const {title , body} = updateForm;
  
    //send update request
    const res = await axios.put(`${API_BASE_URL}/notes/${updateForm._id}`,{title,body},{withCredentials:true})
  
  console.log(res);
    //update state
    const newNotes = [...notes];
    const noteIndex = notes.findIndex((note)=>{
      return note._id === updateForm._id;
    });
    newNotes[noteIndex] = res.data.note;
  
    setNotes(newNotes);
  
    //clear update form state
    setUpdateForm({
      _id : null,
      title:"",
      body:""
    })
  }

  const handleUpdateFieldChange = (e)=>{
    const {name , value} = e.target

    setUpdateForm({
      ...updateForm,
      [name]: value,
    })
  }

  return{
     updateNote,
     notes,
     setNotes,
     setUpdateForm,
     updateForm,
     handleUpdateFieldChange
  }
}


