import React from 'react'

import {updateState} from '../stateStore/atoms';
import { useRecoilValue } from 'recoil';
import {useCreateNote , useFormManip} from '../CustomHooks/useFormManip'

function CreateNote() {
  const { formValues, updateFormValue } = useFormManip();
  const {createNote} = useCreateNote();
  //const formValues = useRecoilValue(formState)
  const updateForm = useRecoilValue(updateState)
  return (
    <div>
      {!updateForm._id && <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Create Your Notes Now !</h1>
      <p className="py-6">
        Easy and efficient way of creating notes on the go , Access them anytime anywhere , Safe and Secure with <span className='bg-green-500 text-black'> NoteNest </span>
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={createNote} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input  type="text"
            value={formValues.title}
            name="title"
            onChange={updateFormValue}
             className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name="body"
            value={formValues.body}
            onChange={updateFormValue} className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-success">Create-Note</button>
        </div>
      </form>
    </div>
  </div>
</div> }
    </div>
  )
}

export default CreateNote

/* create and update Component
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Stay Updated Stay Forward !</h1>
      <p className="py-6">
        Easy and efficient way of updating notes on the go , Access them anytime anywhere , Safe and Secure
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={updateNote} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input   type="text" value={updateForm.title} name = "title" onChange={handleUpdateFieldChange} placeholder="update Your title Here"
             className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <textarea name="body" value={updateForm.body} onChange={handleUpdateFieldChange} className="input input-bordered" required />
         
        </div>
        <div className="form-control mt-6">
          <button  type="submit" className="btn btn-success">Update-Note</button>
        </div>
      </form>
    </div>
  </div>
</div>


*/