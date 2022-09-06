import Link from "next/link";
import { BlogItem } from "../styles/styled/blog.styled";

const Blog = ({ blog }) => {
  // console.log(blog.content.blog_text.content[0].content[0].text);
  return (
    <BlogItem>
      <Link href={'/blogs/' + blog.slug}>
        <a>
          <h4 className="text-2xl font-normal leading-2 ">{blog.content.title}</h4>
          <img src={blog.content.blog_img} />
          <p>{blog.content.long_text}</p>
        </a>
      </Link>

    </BlogItem>
  );
}

export default Blog;


