import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import HeroSection from "./components/reward/HeroSection"
import Reward from "./pages/Reward"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      {/* <h1 className="text-rose-600 font-bold text-5xl">Hello world</h1> */}
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
