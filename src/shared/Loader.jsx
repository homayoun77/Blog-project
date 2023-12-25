import React from "react";
import { InfinitySpin } from "react-loader-spinner";

function Loader() {
  return (
    <div className="w-full h-[400px] flex justify-center items-center">
      <InfinitySpin width="200" color="#4fa94d" />
    </div>
  );
}

export default Loader;
