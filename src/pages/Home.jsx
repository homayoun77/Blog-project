import React from "react";
import Blogs from "../components/blogs/Blogs";
import Author from "../components/author/Author";

function Home() {
  return (
    <div className="lg:flex max-w-7xl m-auto lg:flex-row-reverse my-40 bg-red-500">
      <Author />
      <Blogs />
    </div>
  );
}

export default Home;
