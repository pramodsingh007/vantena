import { Info, Mail, Pencil, Phone, Send, User } from "lucide-react";

function Contact() {
  return (
    <section>
      <div className=" flex justify-center">
        <div className="">
          <div className=" bg-[#f9faff] py-24  grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div className=" space-y-3">
              <div className=" flex justify-center">
                <img src="images/wall-clock.svg" alt="clock" />
              </div>
              <h1 className=" text-center  font-semibold text-2xl">
                Open Hours
              </h1>
              <div>
                <p className="  text-center text-content">
                  Mon-Fri: 10AM - 07 PM
                </p>
                <p className="  text-center text-content">
                  Saturday-Sunday: Closed
                </p>
              </div>
            </div>
            <div className=" space-y-3">
              <div className=" flex justify-center">
                <img src="images/map.svg" alt="map" />
              </div>
              <h1 className=" text-center  font-semibold text-2xl">Address</h1>
              <div>
                <p className="  text-center text-content">H.N. 99, 1st Floor</p>
                <p className="  text-center text-content">Semaur, Gazipur,</p>
                <p className="  text-center text-content">
                  Uttar Pradesh - 233222, India
                </p>
              </div>
            </div>
            <div className=" space-y-3">
              <div className=" flex justify-center">
                <img src="images/telephone.svg" alt="telephone" />
              </div>
              <h1 className=" text-center  font-semibold text-2xl">
                Get In Touch
              </h1>
              <div>
                <p className="  text-center text-content">
                  Telephone: +91 7726929080
                </p>
                <p className="  text-center text-content">
                  Email: connect@vantena.com
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-2 max-w-[80rem] ">
            <div className=" space-y-3 ">
              <p className=" text-md">CONTACT US</p>
              <h1 className=" font-semibold text-3xl">
                Have Questions? Get in Touch!
              </h1>
              <p className=" text-content">
                At Vantena, we are relentlessly focused on delivering innovation
                powered by our state-of-the-art technology.
              </p>
              <form className=" space-y-5" action="">
                <div className=" grid grid-cols-2">
                  <div className=" flex items-center">
                    <User />
                    <input
                      required={true}
                      className=" h-12 p-2 bg-transparent border-b border border-b-slate-400 outline-none w-full"
                      placeholder="Name"
                      type="text"
                    />
                  </div>
                  <div className=" flex items-center">
                    <Mail />
                    <input
                      required={true}
                      className=" h-12 p-2 bg-transparent border-b border border-b-slate-400 outline-none w-full"
                      placeholder="Email Address"
                      type="email"
                    />
                  </div>
                </div>
                <div className=" grid grid-cols-2">
                  <div className=" flex items-center">
                    <Phone />
                    <input
                      required={true}
                      className=" h-12 p-2 bg-transparent border-b border border-b-slate-400 outline-none w-full"
                      placeholder="Phone"
                      type="text"
                    />
                  </div>
                  <div className=" flex items-center">
                    <Info />
                    <input
                      required={true}
                      className=" h-12 p-2 bg-transparent border-b border border-b-slate-400 outline-none w-full"
                      placeholder="Subject"
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <label className=" flex items-center gap-3" htmlFor="">
                    <Pencil /> How can we help you? Feel free to get in touch!
                  </label>
                  <input
                    required={true}
                    className=" h-12 p-2 bg-transparent border-b border border-b-slate-400 outline-none w-full"
                    type="text"
                  />
                </div>
                <button className=" flex bg-primary hover:bg-[#F51843] gap-2 py-3 px-6 text-white rounded-full">
                  <Send /> Get In Touch
                </button>
              </form>
            </div>
            <div>
              <img src="images/contact.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* google maps */}
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d898.8362383633755!2d83.74370507687242!3d25.740616244438726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e6!4m0!4m3!3m2!1d25.740019298381906!2d83.74353013456191!5e1!3m2!1sen!2sin!4v1704878843340!5m2!1sen!2sin"
        width="600"
        height="450"
        className="w-full my-24"
        style={{border:0}}
        allowfullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  );
}

export default Contact;
