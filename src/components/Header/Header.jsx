import { Menu } from "lucide-react"
import { NavLink } from "react-router-dom"
import {motion} from 'framer-motion';
import { useState } from "react";

function Header() {
    const navLink = [
        {
            path:'/',
            link:'Home'
        },
        {
            path:'/about',
            link:'About Us'
        },
        {
            path:'/contact',
            link:'Contact Us'
        }
    ]


    const showMenu = ()=>{
            document.querySelector('#menu').classList.toggle('hidden')
    }
  return (
    <header className=" justify-center relative flex w-full p-8">
        <nav className=" flex  justify-between w-[80rem]">
            <div className=" sm:w-48 w-[10rem] "><img src="images/brand-logo.png" alt="brand" className=" w-52 "  /></div>
            <ul className=" hidden md:flex  gap-12 items-center">
                {
                    navLink.map((item,index)=><li className=" group hover:text-primary" key={index}>
                    <NavLink className={({isActive})=>isActive?' text-primary font-semibold':'font-semibold'} to={item.path}>{item.link}
                    </NavLink>
                    <div className=" group h-[2px] w-0 group-hover:w-full duration-500 bg-primary"></div>
                    
                </li>)
                }
                <li>
                    <button className=" text-white bg-primary  py-3 px-8 hover:shadow-sm hover:shadow-primary font-semibold rounded-full ">Let{`'`}s Talk</button>
                </li>
                
            </ul>
            
                <motion.div id="menu" className=" md:hidden hidden" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.9}}>
                <ul onClick={()=>{showMenu()}} className="bg-[#0d0733] p-6 text-white absolute top-20 right-2 w-[10rem] rounded-2xl space-y-3">
                    { navLink.map((item,index)=><li key={index}>
                    <NavLink to={item.path}>{item.link}</NavLink>
                    </li>)
                    }
                </ul>
            </motion.div>
            <button onClick={()=>{showMenu()}} className=" md:hidden flex"><Menu width={30} height={30}/></button>
        </nav>
    </header>
  )
}

export default Header