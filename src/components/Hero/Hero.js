import React from "react";
import Title from "../Titlebar/Title";
import { ReactComponent as Art } from "../../assets/hero.svg";
import Login from "./Login";

export default function Hero() {
  return (
    <>
      <Title />
      <main>
        <div className="flex flex-col lg:flex-row items-center justify-around mt-10 lg:mt-0 gap-10 p-5 ">
          <div>
            <Login/>
          </div>
          <div className="flex items-center justify-center">
            <Art className="w-9/12 h-1/2 " />
          </div>
        </div>
      </main>
    </>
  );
}
