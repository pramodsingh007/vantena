import { Facebook, Instagram, Linkedin} from "lucide-react"
import { Link } from "react-router-dom"

function Footer() {
  return (
    <footer className="">
      <img src="images/footer.svg" alt="" />
      <div className=" flex justify-center bg-[#0d0733] pb-12">
      <div className="w-[80rem] grid grid-cols-2 sm:grid-cols-3 gap-6 lg:grid-cols-4">
        <div className=" space-y-5">
          <h1 className=" text-white font-semibold text-lg">Office Address</h1>
          <div>
          <p className=" text-[#d0d3dc]">H.N. 99, 1st Floor</p>
          <p className=" text-[#d0d3dc]">Semaur, Gazipur,</p>
          <p className=" text-[#d0d3dc]">Uttar Pradesh - 233222, India</p>
          </div>
          <div className=" text-[#d0d3dc]">
          <a href="mailto:connect@vantena.com">connect@vantena.com</a><br />
          <a href="mailto:support@vantena.com">support@vantena.com</a>
          </div>
          <div className=" text-[#d0d3dc]">
            <a href="tel:+917726929080">+91 7726929080</a>
          </div>
        </div>

        <div className=" space-y-5">
          <h1 className=" text-white text-lg font-semibold">Quick Links</h1>
          <ul className="text-[#d0d3dc]">
            <li>Home</li>
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            
          </ul>
        </div>

        <div className=" space-y-5">
          <h1 className=" font-semibold text-white text-lg">Vanten</h1>
          <ul className=" text-[#d0d3dc]">
            <li><Link to={'/about'}>About Us</Link></li>
            <li><Link to={'contact'}>Contact Us</Link></li>
          </ul>
        </div>

        <div className=" space-y-5 ">
          <h1 className=" text-white font-semibold text-lg">Follow Us</h1>
         <div className=" flex gap-4">
         <button className=" p-3 rounded-full text-white  bg-slate-800 hover:bg-blue-700"><Facebook/></button>
          <button className=" p-3 rounded-full text-white  bg-slate-800 hover:bg-red-600"><Instagram/></button>
          <button className=" p-3 rounded-full text-white  bg-slate-800 hover:bg-blue-600"><Linkedin/></button>
         </div>
        </div>
      </div>
      </div>
    </footer>
  )
}

export default Footer