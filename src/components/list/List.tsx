import {
  ArrowBackIosOutlined,
  ArrowForwardIosOutlined,
} from "@material-ui/icons"
import "./list.scss"
import ListItem from "../listItem/ListItem"
import { useRef } from "react"

const List: React.FC = () => {
  const listRef = useRef<HTMLDivElement>(null)

  const handleClick = (direction: string) => {
    if (listRef.current !== null) {
      let distance = listRef.current.getBoundingClientRect().x - 50
      if (direction === "left") {
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      } else {
        listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
    }
  }

  return (
    <div className='list'>
      <span className='listTitle'>Continue to Watch</span>
      <div className='wrapper'>
        <ArrowBackIosOutlined
          className='sliderArrow left'
          onClick={() => handleClick("left")}
        />
        <div className='container' ref={listRef}>
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
          <ListItem />
        </div>
        <ArrowForwardIosOutlined
          className='sliderArrow right'
          onClick={() => handleClick("right")}
        />
      </div>
    </div>
  )
}

export default List
