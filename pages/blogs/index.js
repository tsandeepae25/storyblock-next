import axios from "axios";
import { useEffect, useState } from "react";
import Blog from "../../components/blog";
import { BlogList } from "../../styles/styled/blogList.styled";

const Blogs = () => {

  const [isLoading, setisLoading] = useState(false);
  const [blogs, setBlogs] = useState();


  useEffect(() => {
    setisLoading(true)
    axios.get(`https://api.storyblok.com/v2/cdn/stories?version=draft&token=Fng0zxrBaX7QHQZ1eEYUVwtt&cv=1656589763`)
      // axios.get(`https://api.storyblok.com/v1/cdn/stories?version=published&token=Zabrpglv0dy5ew3izqHOhAtt`)
      .then(res => {
        const persons = res.data;
        setBlogs(res.data.stories.filter((stroy) => stroy.content.component === 'Blog'))
        console.log(res.data.stories.filter((stroy) => stroy.content.component === 'Blog'));
        console.log(res.data.stories);
        setisLoading(false)

      })
  }, []);


  return (
    <BlogList>
      {isLoading && <div className='loading-box'>Loading...</div>}
      <div className="sub-heading">
        <h3>All Recent Blogs</h3>
        <p>Read your favourite blogs form popular blogers</p>
      </div>
      <div className="blog-list">
        {
          blogs && blogs.map((blog) => (
            <Blog blog={blog}></Blog>
          ))
        }
      </div>
    </BlogList>
  );
}

export default Blogs;