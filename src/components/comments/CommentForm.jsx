import { useMutation } from "@apollo/client";
import React, { useState } from "react";
import { SEND_COMMENT } from "../../graphql/mutation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CommentForm({ slug }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [pressed, setPressed] = useState(false);

  const [sendComment, { loading, data, error }] = useMutation(SEND_COMMENT, {
    variables: { name: name, email: email, text: text, slug: slug },
  });

  const sendCommentHandler = (e) => {
    e.preventDefault();
    if (name && email && text) {
      sendComment();
      setPressed(true);
    } else {
      toast.warn("Please fill out all fields", {
        position: "top-center",
      });
    }
  };

  if (data && pressed) {
    toast.success("Comment posted and waiting to be confirmed ", {
      position: "top-center",
    });
    setPressed(false);
    setName("");
    setEmail("");
    setText("");
  }

  return (
    <div className="bg-white p-8 rounded-2xl boxShadow">
      <h3 className="mb-8 text-2xl text-blue-500">Leave your comments here</h3>
      <form action="">
        <div className="relative">
          <input
            onChange={(event) => setName(event.target.value)}
            type="text"
            id="name"
            value={name}
            className="block p-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none outline-none peer"
          />

          <label
            htmlFor="name"
            className={
              name
                ? "absolute text-gray-500 duration-300 transform-translate-y-4 scale-75 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 top-1 peer-focus:scale-75 -translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                : "absolute text-gray-500 duration-300 transform-translate-y-4 scale-75 top-2.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            }
          >
            Name
          </label>
        </div>

        <div className="relative my-8">
          <input
            onChange={(event) => setEmail(event.target.value)}
            type="text"
            id="email"
            value={email}
            className="block p-3 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-400 appearance-none outline-none peer"
          />

          <label
            htmlFor="email"
            className={
              email
                ? "absolute text-gray-500 duration-300 transform-translate-y-4 scale-75 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 top-1 peer-focus:scale-75 -translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                : "absolute text-gray-500 duration-300 transform-translate-y-4 scale-75 top-2.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            }
          >
            Email
          </label>
        </div>

        <div className="relative">
          <textarea
            onChange={(event) => setText(event.target.value)}
            name="comment"
            id="comment"
            value={text}
            cols="30"
            rows="8"
            className="block p-3 w-full
            text-sm text-gray-900 bg-transparent rounded-lg border
            border-gray-400 appearance-none outline-none peer"
          ></textarea>

          <label
            htmlFor="comment"
            className={
              text
                ? "absolute text-gray-500 duration-300 transform-translate-y-4 scale-75 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 top-1 peer-focus:scale-75 -translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                : "absolute text-gray-500 duration-300 transform-translate-y-4 scale-75 top-2.5 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-1 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
            }
          >
            Comment text
          </label>
        </div>
      </form>
      <div className="flex justify-end">
        {loading ? (
          <button
            className="bg-blue-500 px-5 py-2 mt-8 text-white rounded disabled:bg-gray-400"
            disabled
          >
            Sending Comment...
          </button>
        ) : (
          <button
            className="bg-blue-500 px-5 py-2 mt-8 text-white rounded"
            onClick={sendCommentHandler}
          >
            Send Comment
          </button>
        )}
      </div>
      <ToastContainer />
    </div>
  );
}

export default CommentForm;
