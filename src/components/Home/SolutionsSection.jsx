import SolutionCard from './SolutionCard';

function SolutionsSection() {
  return (
    <div className=' flex justify-center pt-24 pb-24 bg-[#F5F8FF]'>
        <div className=" w-[80rem]">
        <div className=" grid grid-cols-1 content-center place-items-center lg:grid-cols-2">
            <div className=' space-y-3'>
                <div className=" flex items-center gap-4">
                <div className=" h-[3px] bg-primary w-8"></div>
                <h1 className=" text-title  font-semibold">SOLUTION WE HAVE</h1>
                </div>
                <h1 className=' font-semibold text-3xl'>50+ Solutions</h1>
                <p className=" text-md text-content">Come up with any startup idea, we will help you with best technical solution</p>
                <button className=" py-3 px-6 bg-primary hover:bg-[#F51843] text-white font-semibold rounded-full">Book Meeting</button>
            </div>
            <div className=' w-full'>
                <div className=" grid gap-4 md:gap-8 grid-cols-2 md:grid-cols-3">
                    
                    <SolutionCard title={"Whatsapp Automation"} images={"images/rrd-service1.png"}/>
                    <SolutionCard title={"E-Commerce"} images={"images/e-commerce.jpg"}/>
                    <SolutionCard title={"Booking & Services"} images={"images/booking&services.jpg"}/>
                    <SolutionCard title={"Marketplace"} images={"images/marketplace.jpg"}/>
                    <SolutionCard title={"Scrap Management Solution"} images={"images/scrap.jpg"}/>
                    <SolutionCard title={"Medical Solution"} images={"images/medical.jpg"}/>
                    
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default SolutionsSection