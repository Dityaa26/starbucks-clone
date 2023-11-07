import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import HeroSection from "./components/reward/HeroSection"
import Reward from "./pages/Reward"
import Footer from "./components/Footer"


function App() {


  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App
