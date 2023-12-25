import { useQuery } from "@apollo/client";
import React from "react";
import { GET_COMMENTS } from "../../graphql/queries";

function Comments({ slug }) {
  const { loading, data, error } = useQuery(GET_COMMENTS, {
    variables: { slug: slug },
  });
  console.log(data);

  if (loading) return null;

  if (error) return <p>error</p>;

  return (
    <>
      {data.comments.length ? (
        <div className="bg-white rounded-2xl my-20 p-8 boxShadow">
          <h4 className="text-2xl text-blue-500">Comments</h4>
          {data.comments.map((comment) => (
            <div className="border border-gray-500 rounded p-4 my-8">
              <div className="flex items-center mb-4">
                <span className="w-10 h-10 bg-gray-600 text-white flex justify-center items-center rounded-full capitalize mr-2">
                  {comment.name[0]}
                </span>
                <p>{comment.name}</p>
              </div>
              <div>
                <p>{comment.text}</p>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-2xl my-20 p-8 text-center boxShadow">
          <p className="text-2xl text-blue-500"> No Comments here yet! </p>
        </div>
      )}
    </>
  );
}

export default Comments;
