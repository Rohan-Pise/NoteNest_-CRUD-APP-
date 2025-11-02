import React from "react";
import {notesState} from '../stateStore/atoms';
import { useRecoilValue } from 'recoil';

function NoteCard({note , toggleUpdate , deleteNote}) {
  const notes = useRecoilValue(notesState);
  return (
    <div className="m-2">
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
}

export default NoteCard;
