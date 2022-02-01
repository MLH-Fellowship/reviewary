import React from "react";
import ReviewModal from "./ReviewModal";

export default function ReviewButton() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="absolute bottom-5 left-10 bg-black text-white active:bg-gray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Know this place?
      </button>
      {showModal ? (
       <ReviewModal setShowModal={setShowModal}/>
      ) : null}
    </>
  );
}