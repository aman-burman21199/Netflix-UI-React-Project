import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import "./navbar.scss"
import ProfilePic from "../../assets/Profile Pic.jpg"
import NetflixLogo from "../../assets/Netflix-Logo.png"
import { useState } from "react"

const Navbar: React.FC = () => {
  // State to change background of Navbar while scrolling.
  const [isScrolled, setIsScrolled] = useState(false)

  window.onscroll = () => {
    setIsScrolled(window.scrollY === 0 ? false : true)

    // Cleanup function otherwise it will run in an infinite loop.
    return () => (window.onscroll = null)
  }

  console.log(isScrolled)

  return (
    <div className={isScrolled ? "navbar scrolled" : "navbar"}>
      <div className='container'>
        <div className='left'>
          <img src={NetflixLogo} alt='Netflix Logo' />
          <span>Homepage</span>
          <span>Series</span>
          <span>Movies</span>
          <span>New and Popular</span>
          <span>My List</span>
        </div>
        <div className='right'>
          <Search className='icon' />
          <span>KID</span>
          <Notifications className='icon' />
          <img src={ProfilePic} alt='profile pic' />
          <div className='profile'>
            <ArrowDropDown className='icon' />
            <div className='options'>
              <span>Settings</span>
              <span>Log Out</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
