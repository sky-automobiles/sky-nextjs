import React from "react";
import BlogsForm from "./BlogsForm";

const page = () => {
  return (
    <div className="bg-white min-h-[calc(100vh-28px)] py-2  rounded-lg mr-2 mt-1.5 px-6 max-h-[calc(100vh-28px)] overflow-scroll">
      <h5 className="text-xl my-4 text-primaryBlue uppercase">
        Upload New Blog
      </h5>
      <div className="  w-full">
        <BlogsForm />
      </div>
    </div>
  );
};

export default page;
