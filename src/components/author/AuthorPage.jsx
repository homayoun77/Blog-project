import { useQuery } from "@apollo/client";
import React from "react";
import { useParams } from "react-router-dom";
import { GET_AUTHOR } from "../../graphql/queries";
import BlogCard from "../blogs/BlogCard";
import Loader from "../../shared/Loader";

function AuthorPage() {
  const { slug } = useParams();

  const { loading, data, error } = useQuery(GET_AUTHOR, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;

  if (error) return <p>error...</p>;

  return (
    <div className="max-w-7xl m-auto my-48">
      <div className="flex flex-col items-center">
        <img src={data.author.avatar.url} alt="" className="w-64 rounded-full" />
        <h2 className="text-3xl font-bold my-2">{data.author.name}</h2>
        <h3 className="text-xl">{data.author.field}</h3>
      </div>
      <p className="my-20 text-lg px-6 md:px-4">{data.author.description}</p>
      <div>
        <h3 className="p-6 md:p-4 font-bold text-xl">{data.author.name}'s Article</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6 md:p-4">
          {data.author.posts.map((post) => (
            <div key={post.id}>
              <BlogCard data={post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AuthorPage;
