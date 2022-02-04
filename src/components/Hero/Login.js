import React, { useState } from "react";
import { ReactComponent as Mapillary } from "../../assets/mapilarry.svg";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../redux/userSlice";

export default function Login() {
  let navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = () => {
    dispatch(setUser(userInfo));
    navigate("/map");
  };

  return (
    <>
      <div className="h-full flex flex-col items-center justify-center gap-7 ml-0 lg:ml-20">
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-row items-center justify-center gap-2 group">
            <Mapillary className="h-16 w-16 transition group-hover:-translate-x-2 group-hover:-translate-y-2 group-hover:scale-110" />
            <h1 className="font-bold text-5xl capitalize text-gray-700">
              Reviewary
            </h1>
          </div>
          <p className="text-center  w-60 pt-3  text-gray-500">
            explore the world from a different prospective
          </p>
        </div>
        <form className="flex flex-col gap-5 pt-10" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={userInfo.name}
            onChange={handleChange}
            id="name"
            placeholder="Name"
            className="rounded-2xl py-2  border-2 border-cyan-500 placeholder-cyan-500 font-semibold text-center p-1 focus:border-orange-600 "
          />
          <input
            type="text"
            name="email"
            value={userInfo.email}
            onChange={handleChange}
            id="Email"
            placeholder="Email"
            className="rounded-2xl py-2  border-2 border-cyan-500 placeholder-cyan-500 font-semibold text-center p-1 focus:border-orange-600 "
          />
          {/* <Link to="/map"> */}
          <div className="flex flex-row gap-2 justify-evenly">
            <button
              type="submit"
              className="w-28  mt-3 self-center bg-orange-600 text-white font-bold py-2 px-4 rounded-2xl hover:bg-transparent hover:text-orange-600 border-2 border-orange-600  transition"
            >
              Enter
            </button>
            <a
              href="https://mapillary.github.io/mapillary-js/examples/component-marker-map/"
              className=" mt-3 self-center bg-transparent text-slate-600 font-bold py-2 px-4 rounded-2xl hover:bg-transparent hover:text-orange-600 border-2 border-slate-600  hover:border-orange-600 transition"
            >
              Experimental 
            </a>
          </div>
          {/* </Link> */}
        </form>
      </div>
    </>
  );
}
