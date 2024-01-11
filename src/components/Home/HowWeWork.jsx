import WorkCard from "./WorkCard"
import {motion} from 'framer-motion';

function HowWeWork() {
  return (
    <section className=" pt-24 pb-24 flex justify-center w-full">
        <div className="w-[80rem]">
                <h1 className=" text-4xl md:text-5xl font-semibold text-center">How We Work</h1>
               <div className=" grid grid-cols-1 md:grid-cols-3 gap-12 mt-8">
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.3}} viewport={{once:true}}> <WorkCard image={'images/idea.svg'} text={'Share your idea'} step={1}/></motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.5}} viewport={{once:true}}> <WorkCard image={'images/solution.svg'} text={'Get a solution'} step={2}/></motion.div>
                <motion.div initial={{opacity:0}} whileInView={{opacity:1}} transition={{duration:0.5,delay:0.7}} viewport={{once:true}}> <WorkCard image={'images/startup.svg'} text={'Launch your startup'} step={3}/></motion.div>
              
               
               
               
              
               </div>
                
        </div>
    </section>
  )
}

export default HowWeWork