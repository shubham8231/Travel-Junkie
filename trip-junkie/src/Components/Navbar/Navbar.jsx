import navbarStyles from "./Navbar.module.scss"
import {FaFacebookF,FaInstagram,FaTwitter,FaYoutube,FaShoppingCart} from "react-icons/fa"
import logoImage from "/images/travelJunkieLogo.png"

function Navbar() {
    return (
        <>
            <div className={navbarStyles.outer_navbar}>
                <div className={navbarStyles.inner_left_navbar}>
                    <div className={navbarStyles.logoImg}>
                        <img src={logoImage} alt="" className={navbarStyles.logo1}/>
                    </div>
                </div>
                <div className={navbarStyles.inner_right_navbar}>
                    <div className={navbarStyles.upper_right}>
                        <FaFacebookF color="white" size="20px"/>
                        <FaInstagram color="white" size="20px"/>
                        <FaTwitter color="white" size="20px"/>
                        <FaYoutube color="white" size="20px"/>
                        <input type="text" className={navbarStyles.searchbar} placeholder="Search here!"></input>
                    </div>
                    <div className={navbarStyles.bottom_right}>
                        <a href="#" className={navbarStyles.navItem}>
                            ABOUT
                        </a>
                        <a href="#" className={navbarStyles.navItem}>
                            BLOG
                        </a>
                        <a href="#" className={navbarStyles.navItem}>
                            TRAVEL TIPS
                        </a>
                        <a href="#" className={navbarStyles.navItem}>
                            DESTINATION
                        </a>
                        <a href="#" className={navbarStyles.navItem}>
                            RESOURCES
                        </a>
                        <a href="#" className={navbarStyles.navItem}>
                            CONTACT
                        </a>
                        <FaShoppingCart color="white" size="20px"/>
                        
                    </div>
                </div>

            </div>
        </>
    )
}

export default Navbar;