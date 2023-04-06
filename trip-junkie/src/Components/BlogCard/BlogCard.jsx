import blogCardStyles from "./BlogCard.module.scss"


function BlogCard(props) {
    return (
        <>
            <div className={blogCardStyles.blogCardOuter}>
                <div className={blogCardStyles.blogCardLeft}>
                    <div className={blogCardStyles.blogHeading}>
                        {props.place}
                    </div>
                    <div className={blogCardStyles.blogDes}>
                        {props.des}
                    </div>
                </div>
                <div className={blogCardStyles.blogCardRight}>
                    <div className={blogCardStyles.blogImg}>
                        <img src={props.img} className={blogCardStyles.blogPic} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogCard