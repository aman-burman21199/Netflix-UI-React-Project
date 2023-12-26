import { ArrowBackOutlined } from "@material-ui/icons"
import "./watch.scss"

const Watch: React.FC = () => {
  return (
    <div className='watch'>
      <div className='back'>
        <ArrowBackOutlined />
        Home
      </div>
      <video
        className='video'
        autoPlay
        controls
        src='https://www.youtube.com/watch?v=-F0L6EoK15s'
      />
    </div>
  )
}

export default Watch
