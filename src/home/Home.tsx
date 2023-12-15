import Featured from "../components/featured/featured"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
    </div>
  )
}

export default Home
