import React from "react";
import { ReactComponent as Logo } from "../../assets/logo.svg";
export default function Title() {
  return (
    <>
      <header>
        <div className="flex">
          <div className="self-start px-8 py-4">
            <Logo className="h-12 w-48 cursor-pointer hover:scale-105 transition-all " />
          </div>
        </div>
      </header>
    </>
  );
}
