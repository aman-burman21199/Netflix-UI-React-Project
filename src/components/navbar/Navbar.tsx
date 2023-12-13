import { Search, Notifications, ArrowDropDown } from "@material-ui/icons"
import "./navbar.scss"
import ProfilePic from "../../assets/Profile Pic.jpg"
import NetflixLogo from "../../assets/Netflix-Logo.png"

const Navbar: React.FC = () => {
  return (
    <div className='navbar'>
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
          <ArrowDropDown className='icon' />
        </div>
      </div>
    </div>
  )
}

export default Navbar
