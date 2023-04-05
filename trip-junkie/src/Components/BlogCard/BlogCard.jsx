import blogCardStyles from "./BlogCard.module.scss"
import blogImg from "/images/Shillong.jpg"

function BlogCard() {
    return (
        <>
            <div className={blogCardStyles.blogCardOuter}>
                <div className={blogCardStyles.blogCardLeft}>
                    <div className={blogCardStyles.blogHeading}>
                        Shillong
                    </div>
                    <div className={blogCardStyles.blogDes}>
                    Shillong was capital for composite Assam during the British regime and later till a separate State of Meghalaya was formed. David Scott, the British civil servant of the East India Company, was the Agent of the Governor-General North East Frontier. During the First Anglo-Burmese War the British authorities felt the need for a road to connect Sylhet 
                    </div>
                </div>
                <div className={blogCardStyles.blogCardRight}>
                    <div className={blogCardStyles.blogImg}>
                        <img src={blogImg} className={blogCardStyles.blogPic} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard