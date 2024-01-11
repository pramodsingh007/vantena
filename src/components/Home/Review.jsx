import Slider from 'react-slick';
import ReviewCard from './ReviewCard';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function Review() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
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
    <div className=" flex justify-center py-24 ">
        <div className=" w-[80rem] space-y-8 overflow-hidden">
            <div className=" flex items-center justify-center gap-4">
            <div className=" h-[3px] bg-primary w-8"></div>
            <h1 className=" font-semibold">WHAT THEY SAY</h1>
            </div>
            <h1 className=" font-semibold text-3xl text-center ">Client Reviews</h1>
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
  )
}

export default Review