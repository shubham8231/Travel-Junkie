import BlogCard from "../BlogCard/BlogCard";
import blogStyles from "./BlogArea.module.scss"


import blogImg from "/images/Shillong.jpg"
import cherapunji from "/images/Cherrapunji.jpg"

function BlogArea() { 
  return (
    <div className={blogStyles.page2}>
        <div className={blogStyles.maincontent}>
          Popular Blogs
        </div>
        <div className={blogStyles.blogCards}>
          <BlogCard place="Shillong" img={blogImg} des="Shillong was capital for composite Assam during the British regime and later till a separate State of Meghalaya was formed. David Scott, the British civil servant of the East India Company, was the Agent of the Governor-General North East Frontier. During the First Anglo-Burmese War the British authorities felt the need for a road to connect Sylhet"/>
          <BlogCard place="Cherrapunji" img={cherapunji} des="The history of the Khasi people – native inhabitants of Sohra– may be traced from the early part of the 16th century. Between the 16th and 18th centuries, these people were ruled by their tribal 'Syiems (rajas or chiefs) of Khyriem' in the Khasi Hills. The Khasi hills came under British authority in 1833 with the submission of the last of the important Syiem, Tirot Sing Syiem." />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
    </div>
  )
}

export default BlogArea;