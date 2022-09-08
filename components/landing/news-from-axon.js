import { useState } from "react";
import FeaturedBlogItem from "./featured-blog-iem";

const NewsFromAxon = ({ data }) => {

  console.log(data.story.content.section_blocks[3].featured);

  const [blog, setblog] = useState(data.story.content.section_blocks[3].featured);

  return (
    <div>
      <h2 className="sub-header ">News from Axon</h2>
      {
        blog &&
        <div className="grid grid-cols-3 grid-rows-3 gap-5 max-h-screen">
          <div className="row-span-3"> <FeaturedBlogItem data={blog[0]} /></div>
          <div className="row-span-2"> <FeaturedBlogItem data={blog[1]} /></div>
          <div className="row-span-1"> <FeaturedBlogItem data={blog[2]} /></div>
          <div className="row-span-2"> <FeaturedBlogItem data={blog[3]} /></div>
          <div className="row-span-1"> <FeaturedBlogItem data={blog[4]} /></div>
        </div>
      }






      <br />
      <br />
      <br />
      <br />
      <br />
    </div>




  );
}

export default NewsFromAxon;

