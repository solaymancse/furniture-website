import { Banner } from "../components/Banner"
import { Feature } from "../components/Feature"
import { Navbar } from "../components/Navbar"
import { OurProducts } from "../components/OurProducts"


export const Home = () => {
  return (
    <div className="h-screen w-full">
        <Navbar/>
        <Banner/>
        <Feature/>
        <OurProducts/>
    </div>
  )
}
