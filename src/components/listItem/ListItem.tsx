import {
  Add,
  PlayArrow,
  ThumbDownAltOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons"
import "./ListItem.scss"
import { useState } from "react"

type Props = {
  index: number
}

const ListItem: React.FC<Props> = ({ index }) => {
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const trailer =
    "https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761"
  return (
    <div
      className='listItem'
      style={{ left: `${isHovered && index * 225 - 50 + index * 2.5}px` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src='https://occ-0-1723-92.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABU7D36jL6KiLG1xI8Xg_cZK-hYQj1L8yRxbQuB0rcLCnAk8AhEK5EM83QI71bRHUm0qOYxonD88gaThgDaPu7NuUfRg.jpg?r=4ee' />
      {isHovered && (
        <>
          <video src={trailer} autoPlay={true} loop />
          <div className='itemInfo'>
            <div className='icons'>
              <PlayArrow className='icon' />
              <Add className='icon' />
              <ThumbUpAltOutlined className='icon' />
              <ThumbDownAltOutlined className='icon' />
            </div>
            <div className='itemInfoTop'>
              <span>1 hour 14 mins</span>
              <span className='ageLimit'>+16</span>
              <span>1999</span>
            </div>
            <div className='desc'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Aspernatur voluptas, maiores libero animi repudiandae possimus
              facere porro.
            </div>
            <div className='genre'>Action</div>
          </div>
        </>
      )}
    </div>
  )
}

export default ListItem
