import { getStoryblokApi } from "@storyblok/react";
import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../../components/blog";
import { BlogList } from "../../styles/styled/blogList.styled";

const Blogs = (props) => {

  const [isLoading, setisLoading] = useState(false);
  const [blogs, setBlogs] = useState();
  const [, set] = useState();

  console.log(props.data.stories);

  useEffect(() => {

  }, []);


  // useEffect(() => {
  //   setisLoading(true)
  //   axios.get(`https://api.storyblok.com/v2/cdn/stories?version=draft&token=Fng0zxrBaX7QHQZ1eEYUVwtt&cv=1656589763`)
  //     // axios.get(`https://api.storyblok.com/v1/cdn/stories?version=published&token=Zabrpglv0dy5ew3izqHOhAtt`)
  //     .then(res => {
  //       const persons = res.data;
  //       setBlogs(res.data.stories.filter((stroy) => stroy.content.component === 'Blog'))
  //       console.log(res.data.stories.filter((stroy) => stroy.content.component === 'Blog'));
  //       console.log(res.data.stories);
  //       setisLoading(false)

  //     })
  // }, []);


  return (

    <div>
      {/* <BlogList>
      </BlogList> */}

      {isLoading && <div className='loading-box'>Loading...</div>}
      <div className="sub-heading mt-6 mb-14">
        <h3 className="text-3xl text-center mb-0">All Recent Blogs</h3>
        <p className="text-center mt-0">Read your favourite blogs form popular blogers</p>
      </div>
      <div className="blog-list grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {
          props.data.stories && props.data.stories.map((blog) => (
            <Blog blog={blog}></Blog>
          ))
        }
      </div>

    </div>


  );
}

export default Blogs;


export async function getStaticProps() {
  // home is the default slug for the homepage in Storyblok
  // let slug = "blogs";
  // load the draft version
  let sbParams = {
    version: "draft", // or 'published'
    starts_with: "blogs/",
  };

  const storyblokApi = getStoryblokApi();
  let { data } = await storyblokApi.get(`cdn/stories/`, sbParams);

  return {

    props: {
      data,
    },

    revalidate: 3600, // revalidate every hour
  };
}