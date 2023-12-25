import { useQuery } from "@apollo/client";
import React from "react";
import { GET_AUTHORS } from "../../graphql/queries";
import { Link } from "react-router-dom";

function Author() {
  const { loading, data, error } = useQuery(GET_AUTHORS);

  if (loading) return;

  if (error) return <p>error...</p>;

  return (
    <div className="lg:w-1/4 p-6 md:p-4">
      <div className="boxShadow rounded-2xl px-4 w-full">
        {data.authors.map((author) => (
          <div key={author.id} className="border-b border-gray-400 last:border-b-0 ">
            <Link to={`/authors/${author.slug}`}>
            <div className="flex items-center justify-end py-2 hover:scale-105 transition-all">
              <p>{author.name}</p>
              <img
                src={author.avatar.url}
                alt=""
                className="h-12 rounded-full ml-2"
              />
            </div>
          </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Author;
