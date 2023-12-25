import React from "react";

import {
  IoLogoHtml5,
  IoLogoCss3,
  IoLogoReact,
  IoLogoNodejs,
  IoLogoGithub,
} from "react-icons/io5";
import { IoLogoJavascript } from "react-icons/io";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-28 bg-blue-800 text-white fixed top-0 z-50">
      <div className="grid md:grid-cols-3 md:justify-between items-center h-full max-w-7xl m-auto px-4">
        <div className=" hidden md:block md:justify-self-start bg-slate-100 rounded rounded-ee-xl rounded-ss-xl p-0.5 boxShadow">
          <Link to={"/"}>
            <div className="flex">
              <IoLogoReact size={24} className="text-blue-500" />
              <IoLogoNodejs size={24} className="text-green-500" />
            </div>
            <div className="flex ">
              <IoLogoJavascript size={24} className="text-yellow-400" />
              <IoLogoHtml5 size={24} className="text-orange-500" />
            </div>
          </Link>
        </div>
        <div className="">
          <ul className="flex flex-row-reverse justify-center text-lg">
            <Link to={"/"}>
              <li className="px-4 hover:text-yellow-300 transition-all ease-in">
                Home
              </li>
            </Link>
            <Link to={"/blogs"}>
              <li className="px-4 mx-6 hover:text-yellow-300 transition-all ease-in">
                Blogs
              </li>
            </Link>
            <Link to={"/authors"}>
              <li className="px-4 hover:text-yellow-300 transition-all ease-in">
                Authors
              </li>
            </Link>
          </ul>
        </div>
        <div className="md:justify-self-end hidden md:block">
          <Link to={"/"}>
            <h1 className="text-2xl lg:text-3xl">Programming Blog</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
