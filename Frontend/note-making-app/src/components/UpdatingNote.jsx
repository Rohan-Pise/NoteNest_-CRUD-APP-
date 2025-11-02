import React from "react";
import { useUpdatingNotesHook } from "../CustomHooks/UpdatingNotesHook";

function UpdatingNote() {
  const { updateForm, handleUpdateFieldChange, updateNote } =
    useUpdatingNotesHook();
  return (
    <div>
      {updateForm._id && (
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">
                Stay Updated Stay Forward !
              </h1>
              <p className="py-6">
                Easy and efficient way of updating notes on the go , Access them
                anytime anywhere , Safe and Secure
              </p>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={updateNote} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Title</span>
                  </label>
                  <input
                    type="text"
                    value={updateForm.title}
                    name="title"
                    onChange={handleUpdateFieldChange}
                    placeholder="update Your title Here"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Description</span>
                  </label>
                  <textarea
                    name="body"
                    value={updateForm.body}
                    onChange={handleUpdateFieldChange}
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button type="submit" className="btn btn-success">
                    Update-Note
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default UpdatingNote;
