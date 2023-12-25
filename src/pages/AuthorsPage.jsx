import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../graphql/queries";
import Loader from "../shared/Loader";
import { Link } from "react-router-dom";

function AuthorsPage() {
  const { loading, data, error } = useQuery(GET_AUTHORS);

  if (loading) return <Loader />;

  if (error) return <p>error...</p>;

  return (
    <div className="max-w-7xl my-40 mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 xl:gap-x-28 gap-y-16 px-6 md:px-4">
      {data.authors.map((author) => (
        <Link to={`/authors/${author.slug}`}>
          <div
            key={author.id}
            className="rounded-2xl boxShadow p-8 bg-blue-300 hover:scale-105 transition-all duration-300"
          >
            <img src={author.avatar.url} alt="" className="rounded-full" />
            <h1 className="text-center text-4xl py-2">{author.name}</h1>
            <h2 className="text-center text-2xl py-2">{author.field}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default AuthorsPage;
