import { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState } from 'recoil';
import {notesState} from '../stateStore/atoms';
import {formState} from '../stateStore/atoms';
import {updateState} from '../stateStore/atoms';
import {BrowserRouter , Routes , Route, Link} from "react-router-dom"
import NotesPage from "../pages/NotesPage";
import LoginPage from "../pages/LoginPage"

import RequireAuth  from "./RequiredAuth"
import SignUpPage from "../pages/SignUpPage";
import LogoutPage from "../pages/LogoutPage";
import Navbar from "./Navbar";
import Footer from "./Footer";

function App() {
  const [notes, setNotes] = useRecoilState(notesState);
  const [formValues, setFormValues] = useRecoilState(formState);
  const [updateForm , setUpdateForm]= useRecoilState(updateState)

 // useEffect(() => {
  //  fetchNotes();
 // }, []); // to Run the fetchNotes function on start of program
 
  // functions

  //function ->1
 // const fetchNotes = async () => {
    //Fetches the notes
   // const res = await axios.get("http://localhost:3000/notes",{withCredentials:true});

    //Set to State
   // setNotes(res.data.notes);
    //console.log(res);
 // };

  /*
// all the functions are summarized into this function checkout if you wish
  function summary(){

  
  //function ->2
  const updateFormValue = (e) => {
    const { name, value } = e.target;

    setFormValues({
      ...formValues,
      [name]: value, // if it seems tough Ref:Code bless You YT handling complex inputs
    });
  };

 //function ->3
  const createNote = async (e) => {
    e.preventDefault();
    //Create Note
    const res = await axios.post("http://localhost:3000/notes", formValues);

    //update the state about new Note included
    setNotes([...notes, res.data.note]);

    //clear input values after adding
    setFormValues({ title: "", body: "" });

    console.log("Submit");
  };

  //function ->4 delete Note
  const deleteNote =async (_id)=>{
       //Delete the Note
       const res = await axios.delete(`http://localhost:3000/notes/${_id}`);
       console.log(res);

       //update the state 
       setNotes(notes.filter(note => note._id !== _id));

  }

  //function ->5 
  const handleUpdateFieldChange = (e)=>{
    const {name , value} = e.target

    setUpdateForm({
      ...updateForm,
      [name]: value,
    })
  }

  //function ->6 will run after clicking update btn
  const toggleUpdate = (note)=>{
    //set state on update form
    setUpdateForm({title:note.title, body:note.body, _id:note._id})
}

//function ->7 
const updateNote = async (e)=>{
  e.preventDefault();
const {title , body} = updateForm;

  //send update request
  const res = await axios.put(`http://localhost:3000/notes/${updateForm._id}`,{title,body})

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

  }
*/

  return (
    <>
    
    <div className="App">
      <BrowserRouter>
      <Navbar/>
    
      <Routes>

         <Route index element={<RequireAuth><NotesPage/></RequireAuth>}></Route>
         <Route path='/login' element={<LoginPage/>} ></Route>
         <Route path='/signup' element={<SignUpPage/>}></Route>
         <Route path='/logout' element={<LogoutPage/>}></Route>
         
      
      </Routes>
      <Footer/>
      </BrowserRouter>

      
      
     


     
        
        </div>
    </>
  );
}

export default App;
