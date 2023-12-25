import React from "react";
import Loader from "../shared/Loader";
import { GET_BLOGS } from "../graphql/queries";
import { useQuery } from "@apollo/client";
import BlogCard from "../components/blogs/BlogCard";

function BlogsPage() {
  const { loading, data, error } = useQuery(GET_BLOGS);

  console.log(data);

  if (loading) return <Loader />;

  if (error) return <p>error...</p>;

  return (
    <div className="max-w-7xl my-40 mx-auto grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12 px-6 md:px-4">
      {data.posts.map((post) => (
        <div key={post.id} className="">
          <BlogCard data={post} />
        </div>
      ))}
    </div>
  );
}

export default BlogsPage;
