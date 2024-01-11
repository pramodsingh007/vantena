import Hero from "../components/Home/Hero"
import HowWeWork from "../components/Home/HowWeWork"
import Review from "../components/Home/Review"
import SolutionsSection from "../components/Home/SolutionsSection"
import WhySection from "../components/Home/WhySection"
import Whatsapp from "../components/Whatsapp/Whatsapp"

function Home() {
  return (
    <div>
    <Hero/>
    <WhySection/>
    <HowWeWork/>
    <SolutionsSection/>
    <Review/>
    <Whatsapp/>
    </div>
  )
}

export default Home