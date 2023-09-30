import { Banner } from "../components/Banner"
import { Copyright } from "../components/Copyright"
import { Feature } from "../components/Feature"
import { Footer } from "../components/Footer"
import { Inspirations } from "../components/Inspirations"
import { Navbar } from "../components/Navbar"
import { OurProducts } from "../components/OurProducts"
import { ScrollTop } from "../components/ScrollTop"
import { Share } from "../components/Share"


export const Home = () => {
  return (
    <div className="h-screen w-full">
      <ScrollTop/>
        <Navbar/>
        <Banner/>
        <Feature/>
        <OurProducts/>
        <Inspirations/>
        <Share/>
        <Footer/>
        <Copyright/>
    </div>
  )
}
