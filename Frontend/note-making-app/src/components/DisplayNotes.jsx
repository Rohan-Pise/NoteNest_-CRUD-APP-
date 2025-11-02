import React from 'react'

import {useDisplayNotesCustomHook} from '../CustomHooks/DisplayNotesCustomHook'

function DisplayNotes() {
  //const notes = useRecoilValue(notesState);
  const {deleteNote , notes , fetchNotes , toggleUpdate, setUpdateForm} = useDisplayNotesCustomHook();
  return (
   <div>
       {/*This block is used to print all the notes from backend onto the frontend */}
       <div className='bg-green-500    text-white   '>
       <h2  className="text-5xl font-bold text-center mb-2"> Your Notes  </h2> 
        <div className='flex flex-wrap justify-center '>
       
        {notes &&
          notes.map((note) => {
            return (
             /*<NoteCard note={note} toggleUpdate={toggleUpdate} deleteNote={deleteNote}/>*/
             <div  key={note._id} className="m-2 ">
             <div className="card bg-neutral text-neutral-content w-96">
               <div className="card-body items-center text-center">
                 <h2 className="card-title">{note.title}</h2>
                 <p>{note.body}</p>
                 <div className="card-actions justify-end">
                 <button onClick={()=>{
                         toggleUpdate(note)}} className="btn btn-warning">Update</button>
                   <button onClick={()=> deleteNote(note._id)} className="btn btn-error">Delete</button>
                 </div>
               </div>
             </div>
           </div>
            );
          })}
          </div>
      </div>
    </div> 

    
  )
}




export default DisplayNotes
