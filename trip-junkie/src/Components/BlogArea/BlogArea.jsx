import BlogCard from "../BlogCard/BlogCard";
import BlogStyles from "./BlogArea.module.scss"

function BlogArea() { 
  return (
    <div className={BlogStyles.page2}>
        <div className={BlogStyles.maincontent}>
          Popular Blogs
        </div>
        <div className={BlogStyles.blogCards}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
    </div>
  )
}

export default BlogArea;