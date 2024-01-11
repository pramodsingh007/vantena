import Slider from "react-slick"
import AboutCard from "../components/About/AboutCard"
import ReviewCard from "../components/Home/ReviewCard"
import Whatsapp from "../components/Whatsapp/Whatsapp"

function About() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
    
  }

  const responsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    
  ]
  return (
    <section className=" flex justify-center mt-12 ">
      <div className=" w-[80rem] overflow-hidden ">
           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 place-content-center">
              <div>
                    <img src="images/about-us.png" alt="aboutus" />
                </div>
                <div className=" space-y-6">
                  <p>WHO WE ARE</p>
                  <h1 className=" md:text-4xl text-3xl font-semibold">When your vision meets our innovation, MAGIC HAPPENS!</h1>
                  <p className=" text-content">Established in 2023, Vanten is a premium technology solutions provider that specializes in crafting bespoke mobile apps and e-commerce website solutions. We also offer WhatsApp automation service and startup setup and consultation services that are tailor-made to fit each client{`'`}s unique requirements. we have an impressive reputation for providing unique business solutions that catalyze growth, innovation, and success.</p>
                </div>
           </div>

           <div className=" grid grid-cols-1 md:grid-cols-3 mt-24   gap-6 bg-white p-12 rounded-2xl">
            <AboutCard image={'images/mission.gif'} title={"Mission"} text={"At Vantena, our mission is to empower businesses and startups with exceptional technical solutions that enable them to achieve their goals and unlock their full potential. We believe in harnessing the power of technology to drive innovation, growth, and success, and we are committed to delivering reliable, scalable, and transformative solutions of the highest quality."}/>
            <AboutCard image={'images/vision.gif'} title={"Vision"} text={"At Vantena, we are relentlessly focused on delivering innovation powered by our state-of-the-art technology. And to the last, we are ALWAYS committed to our client's success and believe that their success is a reflection of our own - the more innovative our services will be, the more innovation the world will witness!"}/>
            <AboutCard image={'images/values.gif'} title={"Values"} text={"At Vantena, our approach is customer-centric and we aim to understand each client's unique requirements and goals to offer them the right solution. We have ready technology available for your ideas that are reliable, scalable, and transformative. Our team values innovation and your idea to the core ."}/>
           </div>

           <div className=" my-24 overflow-hidden">
           <Slider {...settings} responsive={responsive}>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
                <ReviewCard/>
            </Slider>
           </div>
      </div>
      <Whatsapp/>
    </section>
  )
}

export default About