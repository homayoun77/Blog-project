import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOGS } from "../../graphql/queries";
import BlogCard from "./BlogCard";
import Loader from "../../shared/Loader";
import Modal from "../../shared/Modal";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS);

  if(loading) return <Loader />

  if(error) return <p>error...</p>

  return (
    <>
    <div className="lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 md:p-4">
      {data.posts.map((post) => (
        <div key={post.id} className="">
          <BlogCard data={post} />
        </div>
      ))}
    </div>
    </>
  );
}

export default Blogs;
