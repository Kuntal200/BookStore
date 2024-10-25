import React, { useEffect, useState } from "react";
import Home from "./Home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses";
import SignUp from "./Components/SignUp";
import { Toaster } from "react-hot-toast";
import Contact from "./Components/Contact";

const ProtectedRoute = ({ user, children }) => {
  if (!user) {
    return <Navigate to="/signup" />;
  }
  return children;
};

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    console.log(user);
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home user={user} setUser={setUser} />} />

          {/* Protect the /courses route */}
          {user !== null ? (
            <Route
              path="/courses"
              element={<Courses user={user} setUser={setUser} />}
            />
          ) : (
            <Route
              path="/courses"
              element={<SignUp />}
            />
          )}
          <Route path="/signup" element={<SignUp />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
