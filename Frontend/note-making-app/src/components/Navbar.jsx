import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 z-50 ">
      <div className="navbar bg-primary text-primary-content flex justify-between flex-wrap ">
        <div >
        <button onClick={()=>{
          navigate('/');
        }}className="btn btn-ghost text-xl  bg-green-400 text-black hover:bg-green-500 hover:text-black ">NoteNest❤️</button>
        </div>

        {/*Remaining Buttons other than home such as login, signup , logout
            bg-primary*/}

      <div className="flex flex-wrap">
        <button onClick={()=>{
          navigate('/login');
        }}className="btn btn-ghost text-l bg-blue-600 text-white m-2 hover:hover:bg-blue-700 hover:text-white">Login</button>

        <button onClick={()=>{
          navigate('/signup');
        }}className="btn btn-ghost text-l bg-yellow-500 text-black m-2 hover:bg-yellow-600    hover:text-black">Sign-Up</button>

        <button onClick={()=>{
          navigate('/logout');
        }}className="btn btn-ghost text-l bg-red-500 text-white m-2 hover:bg-red-600    hover:text-white">Logout</button>
        </div>

        
      </div>
    </div>
  );
}

export default Navbar;
