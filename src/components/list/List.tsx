import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef, useState } from "react"

const List: React.FC = () => {
  const [slideNumber, setSlideNumber] = useState<number>(0)

  const listRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: string) => {
    if (listRef.current !== null) {
      let distance = listRef.current.getBoundingClientRect().x - 50
      if (direction === "left" && slideNumber > 0) {
        setSlideNumber((currentSlideNumber) => currentSlideNumber - 1)
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      }
      if (direction === "right" && slideNumber < 5) {
        setSlideNumber((currentSlideNumber) => currentSlideNumber + 1)
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
    }
  }

  return (
    <div className='list'>
      <span className='listTitle'>Continue to Watch</span>
      <div className='wrapper'>
        {slideNumber > 0 && (
          <ArrowBackIosOutlined
            className='sliderArrow left'
            onClick={() => handleClick("left")}
          />
        )}
        <div className='container' ref={listRef}>
          <ListItem index={0} />
          <ListItem index={1} />
          <ListItem index={2} />
          <ListItem index={3} />
          <ListItem index={4} />
          <ListItem index={5} />
          <ListItem index={6} />
          <ListItem index={7} />
          <ListItem index={8} />
          <ListItem index={9} />
        </div>
        {slideNumber < 5 && (
          <ArrowForwardIosOutlined
            className='sliderArrow right'
            onClick={() => handleClick("right")}
          />
        )}
      </div>
    </div>
  )
}

export default List
