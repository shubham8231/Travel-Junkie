import footerStyles from './Footer.module.scss'

function Footer() {
    return (
        <div className={footerStyles.footersection}>
            <div className={footerStyles.tips}>
                <div className={footerStyles.content1}>
                    GET MY BEST STUFF SENT <br />
                    STRAIGHT TO YOU!
                </div>

                <div className={footerStyles.searchbar1}>
                    <input type="text" className={footerStyles.searchbar} placeholder="First Name"></input>

                    <input type="text" className={footerStyles.searchbar2} placeholder="Email Address"></input>

                    <div className={footerStyles.submitBtn}>

                        Submit
                    </div>
                </div>
            </div>
            <div className={footerStyles.last}>
                <div className="part1">

                </div>
                <div className="part1">

                </div>
                <div className="part1">

                </div>
                <div className="part1">

                </div>
                <div className="part1">

                </div>
            </div>
            <div className={footerStyles.footercontent}>
                <div className={footerStyles.search}>

                </div>
                <div className={footerStyles.follow}>

                </div>
            </div>
        </div>
    )
}

export default Footer