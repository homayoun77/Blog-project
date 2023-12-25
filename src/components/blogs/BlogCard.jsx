import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../shared/Modal";

function BlogCard({ data }) {

  const [url , setUrl] = useState('')
  const [open , setOpen] = useState(false)

  const openModal = (e) => {
    setUrl(e.target.currentSrc)
    setOpen(true)
  }


  return (
    <>
      {
        open && <Modal avatar={url} setOpen={setOpen} />
      }
      <div className=" boxShadow rounded-xl w-full h-full overflow-hidden">
        {data.author && (
          <div className="flex items-center p-2">
            <img
            onClick={openModal}
              src={data.author.avatar.url}
              alt=""
              className="w-10 rounded-full m-2"
            />
            <p>{data.author.name}</p>
          </div>
        )}
        <div className="h-[180px] w-full">
          <img
            src={data.cover.url}
            alt=""
            className="object-cover w-full h-full"
          />
        </div>
        <h2 className="font-bold text-xl p-4">{data.title}</h2>
        <div className="p-2">
          <Link to={`/blogs/${data.slug}`}>
            <button className="border rounded-3xl border-blue-500 w-full text-blue-700 p-1 hover:bg-blue-600 hover:text-white transition-all">
              Read Article
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogCard;
