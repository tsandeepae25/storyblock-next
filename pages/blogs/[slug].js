import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { BlogInfo } from "../../styles/styled/blogDetials.styled";

const BlogDetails = () => {

  const router = useRouter()
  const { slug } = router.query

  const [blog, setBlog] = useState(null);
  const [isLoading, setisLoading] = useState(false);


  useEffect(() => {
    setisLoading(true)
    axios.get(`https://api.storyblok.com/v2/cdn/stories/blogs/${slug}?version=draft&token=Fng0zxrBaX7QHQZ1eEYUVwtt&cv=1658689252`)
      .then(res => {
        const persons = res.data;
        console.log(res.data.story.content);
        setBlog(res.data.story.content)
        setisLoading(false)

      })
  }, []);


  return (
    <BlogInfo>
      {blog && <>
        <h4>{blog.title}</h4>
        <img src={blog.blog_img} alt="" />
        <p>{blog.long_text}</p>
      </>}
    </BlogInfo>



  );
}

export default BlogDetails;