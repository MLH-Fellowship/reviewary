import React from "react";
import { Link } from "react-router-dom";

export default function BackButton() {
  return (
    <Link to="/">
      <button
        className="absolute top-5 right-10 bg-black text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
      >
        Back to Login
      </button>
    </Link>
  );
}