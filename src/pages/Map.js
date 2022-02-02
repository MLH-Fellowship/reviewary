import React from "react";
import { useSelector } from "react-redux";
import MapViewer from "../components/MapViewer/MapViewer";
export default function Map() {
  const { name, email } = useSelector((state) => state.user);
  return (
    <>
      <MapViewer />
      {console.log(`now in Map with user name ${name} and email= ${email} `)}
    </>
  );
}
