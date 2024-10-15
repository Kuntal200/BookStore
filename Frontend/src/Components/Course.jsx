import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";
import {Link} from "react-router-dom";
function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-50 items-center justify-center text-center">
          <h1 className="text-2xl font-semibold md:text-4xl mt-40">
            We're delighted to have you here !
          </h1>
          <p className="mt-12">
            Welcome to BookStore, your one-stop destination for a diverse
            collection of books across various genres. Whether you're a book
            lover searching for your next great read or someone looking to
            explore new interests, we have something for everyone. Dive into our
            extensive collection that spans both paid and free books, carefully
            categorized for your convenience.
          </p>
          <Link to="/">
          <button className=" bg-pink-600 text-white mt-6 px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
