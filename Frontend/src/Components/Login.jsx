import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
function Login({setUser}) {
  const navigate= useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userinfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("http://localhost:3001/user/login", userinfo)
      .then((res) => {
        console.log("This is user",res.data);
        if (res.data) {
          setUser(res.data.user)
          localStorage.setItem("user", JSON.stringify(res.data.user));
          toast.success("Logged in Successfully ");
          setTimeout(()=>{
            document.getElementById("my_modal_3").close();
            window.location.reload();
            
          },1000);
         
        }
        navigate("/");
        // localStorage.setItem("User: ", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        if (err.response) {
          console.log(err);
          toast.error(`error: ${err.response.data.message}`);
        }
      });
  };
  return (
    <div>
      {/* You can open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <a
              href="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              onClick={()=>document.getElementById("my_modal_3").close()}
            >
              ✕
            </a>

            <h3 className="font-bold text-lg">Log in</h3>
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="enter your email"
                className="w-80 px-3 py-1 bordder rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="text"
                placeholder="enter your password"
                className="w-80 px-3 py-1 bordder rounded-md outline-none"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex justify-around mt-4 ">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Log in
              </button>
              <div>
                {" "}
                Not Registered?{" "}
                <Link
                  to="/signup"
                  className="underline text-blue-500 cursor-pointer"
                >
                  SignUp
                </Link>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
