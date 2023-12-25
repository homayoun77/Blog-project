import { useQuery } from "@apollo/client";
import React from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GET_BLOG_INFO } from "../../graphql/queries";
import Loader from "../../shared/Loader";

import { IoArrowBackSharp } from "react-icons/io5";
import BlogCard from "./BlogCard";
import CommentForm from "../comments/CommentForm";
import Comments from "../comments/Comments";

function BlogPage() {
  const { slug } = useParams();

  const navigate = useNavigate();

  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug: slug },
  });

  if (loading) return <Loader />;

  if (error) return <p>error...</p>;

  return (
    <div className=" max-w-7xl m-auto p-6 md:p-4 my-24">
      <div className="flex items-center justify-between my-10">
        <p onClick={() => navigate(-1)} className="cursor-pointer">
          <IoArrowBackSharp size={30} />
        </p>
        <h1 className="text-2xl md:text-4xl">{data.post.title}</h1>
      </div>
      <div className="w-full xl:h-[600px] rounded-2xl overflow-hidden">
        <img
          src={data.post.cover.url}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex items-center my-10">
        <div className="w-20 rounded-full overflow-hidden">
          <Link to={`/authors/${data.post.author.slug}`}>
            <img
              src={data.post.author.avatar.url}
              alt=""
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="mx-4">
          <Link to={`/authors/${data.post.author.slug}`}>
            <h3 className="text-2xl font-bold">{data.post.author.name}</h3>
          </Link>
          <h4>{data.post.author.field}</h4>
        </div>
      </div>
      <h2 className="text-4xl">{data.post.title}</h2>
      <div className="mb-20 mt-4">
        <p>{data.post.content.text}</p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 my-20">
        {data.post.author.posts.map((post) => (
          <div key={post.id}>
            <BlogCard data={post} />
          </div>
        ))}
      </div>
      <div>
        <CommentForm slug={slug} />
      </div>
      <div>
        <Comments slug={slug} />
      </div>
    </div>
  );
}

export default BlogPage;
