import React from "react";

import { ImCross } from "react-icons/im";

function Modal({ avatar, setOpen }) {
  return (
    <div onClick={() => setOpen(false)} className="w-full h-screen bg-black/50 z-10 fixed top-0 left-0 flex justify-center items-center ">
      <div
        onClick={() => setOpen(false)}
        className="absolute top-8 right-8 cursor-pointer"
      >
        <ImCross size={30} />
      </div>
      <div className="">
        <img src={avatar} alt="" className="rounded-full p-2" />
      </div>
    </div>
  );
}

export default Modal;
