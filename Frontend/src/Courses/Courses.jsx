import React from "react";
import Navbar from "../Components/Navbar";
import Course from "../Components/Course";
import Footer from "../Components/Footer";

function Courses({user,setUser}) {
  return (
    <>
      <Navbar user={user} setUser={setUser}/>
      <div className="min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
