import Featured from "../components/featured/featured"
import List from "../components/list/List"
import Navbar from "../components/navbar/Navbar"
import "./home.scss"

const Home: React.FC = () => {
  return (
    <div className='home'>
      <Navbar />
      <Featured />
      <List />
      <List />
      <List />
      <List />
      <List />
    </div>
  )
}

export default Home
