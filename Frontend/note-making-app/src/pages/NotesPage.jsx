import React from "react";
import Navbar from "../components/Navbar";
import CreateNote from "../components/CreateNote";
import DisplayNotes from "../components/DisplayNotes";
import UpdatingNote from "../components/UpdatingNote";
import Footer from "../components/Footer";

function NotesPage() {
  return (
    <>
      <div className="">
       
        <CreateNote /> {/*Creating a Note using Form & Storing it on DB */}
        <DisplayNotes />
        <UpdatingNote /> {/* Updating the Note  */}
        
      </div>
    </>
  );
}

export default NotesPage;
