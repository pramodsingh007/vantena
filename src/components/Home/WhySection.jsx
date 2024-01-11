import {motion} from 'framer-motion';

import WhySectionCard from "./WhySectionCard"

function WhySection() {
  return (
    <section className=" flex justify-center mt-24">
        <div className=" w-[80rem] space-y-7">
            <div>
            <div className=" flex justify-center"><div className=" h-[3px] bg-primary w-[20px]"></div></div>
            <p className=" text-xs text-center font-medium mt-2">Your IDEA + OUR TECHNOLOGY</p>
            </div>
            <h1 className=" text-center  text-4xl md:text-5xl font-semibold">Why Vantena?</h1>
            <div className=" grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.3}} viewport={{once:true}}><WhySectionCard image={'images/team-work.svg'} title={'Friendly technology team'} text={'To Help Entrepreneurs & Startups in Technology'}/></motion.div>
            <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.5}} viewport={{once:true}}><WhySectionCard image={'images/save-money.svg'} title={'Choose your Budget'} text={'Get solution based on your budget'}/></motion.div>
            <motion.div initial={{y:100,opacity:0}} whileInView={{y:0,opacity:1}} transition={{duration:0.5,delay:0.7}} viewport={{once:true}}><WhySectionCard image={'images/reward.svg'} title={'Quality service'} text={'Actions speak more than words. Checkout our portfolio to experience next level quality.'}/></motion.div>
            
            
            
            
            </div>
        </div>
    </section>
  )
}

export default WhySection