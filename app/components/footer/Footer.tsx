import React from 'react'
import { IoLogoGithub } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";




function Footer() {
  return (
    <div>
        <div className='bg-gray-700 w-full h-auto text-white pb-10 pl-20 flex justify-around'>
            {/* first */}
            <div className="pt-10">
                <h1 className="text-4xl font-bold tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1 before:right-0 before:w-[70px] before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[180px] hover:before:opacity-100">Address</h1>
                <h1 className="font-normal text-2xl mt-5">Head Office:</h1>
                <p className="mt-3 text-sm">717 K Street, STE 207 Sacramento, CA 95814, United State</p>
                <p className='mt-6 text-md hover:text-orange-600 transition delay-75 duration-200 ease-in-out cursor-pointer'>Phone: +1 (916) 822 7374</p>
                <h1 className="font-normal text-2xl mt-10">Corporate Office:</h1>
                <p className="mt-3 text-sm">P681 W Canal Rd, Amin Town, Faisalabad, Pakistan</p>
                <p className='mt-10 text-md hover:text-orange-600 transition delay-75 duration-200 ease-in-out cursor-pointer'>Landline: +92 (41) 87 50005</p>
                <p className='mt-4 text-md hover:text-orange-600 transition delay-75 duration-200 ease-in-out cursor-pointer'>Whatsapp: +92 (327) 87 50005</p>

                <h1 className="mt-10 text-3xl font-semibold tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[170px] hover:before:opacity-100">Follow us</h1>

                <div className="flex gap-4">
                    <IoLogoGithub className="cursor-pointer bg-white p-1 text-4xl rounded-full text-black mt-10 hover:bg-gray-900 hover:text-white transition delay-150 duration-500 ease-in-out"/>
                    <IoLogoInstagram  className="cursor-pointer bg-white p-1 text-4xl rounded-full text-black mt-10 hover:bg-gradient-to-tr from-orange-500 to-yellow-300-500 via-blue-500  hover:text-white transition delay-150 duration-500 ease-in-out "/>
                    <FaFacebookF  className="cursor-pointer bg-white p-1 text-4xl rounded-full text-black mt-10 hover:bg-blue-700 hover:text-white transition delay-150 duration-500 ease-in-out "/>
                    <FaLinkedinIn   className="cursor-pointer bg-white p-1 text-4xl rounded-full text-black mt-10 hover:bg-blue-600 hover:text-white transition delay-150 duration-500 ease-in-out "/>
                    <FaTwitter   className="cursor-pointer bg-white p-1 text-4xl rounded-full text-black mt-10 hover:bg-sky-600 hover:text-white transition delay-150 duration-500 ease-in-out "/>
                    <AiOutlineYoutube   className="cursor-pointer bg-white p-1 text-4xl rounded-full text-black mt-10 hover:bg-red-600 hover:text-white transition delay-150 duration-500 ease-in-out "/>
                </div>
            </div>

            {/* second */}
            <div>
              <h1 className="mt-20 text-2xl font-semibold tracking-widest">Who we are</h1>
              <p className="text-sm font-normal mt-10 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[70px] hover:before:opacity-100">About us</p> <br />
              <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[132px] hover:before:opacity-100">Client & Partners</p><br />
              <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[128px] hover:before:opacity-100">Team TechloSet</p> <br />
              <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[132px] hover:before:opacity-100">Life at TechloSet</p> <br />
              <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[60px] hover:before:opacity-100">Hire us</p> <br />
              <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[90px] hover:before:opacity-100">Contact us</p> <br />
              <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[55px] hover:before:opacity-100">Events</p> <br />

              <h1 className="text-lg tracking-wider font-normal mt-[145px] uppercase">Review us on</h1>
              <h1 className="text-2xl tracking-wider font-bold pl-4">Clut<span className='text-orange-500'>c</span>h</h1>
            </div>

            {/* third */}
            <div>
              <h1 className="mt-20 text-2xl font-semibold tracking-widest">Insight</h1>
                <p className="text-sm font-normal mt-10 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[90px] hover:before:opacity-100">Our Cases</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[60px] hover:before:opacity-100">Careers</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[170px] hover:before:opacity-100">Awards & Achivements</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[92px] hover:before:opacity-100">Testimonials</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[42px] hover:before:opacity-100">News</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[35px] hover:before:opacity-100">Blog</p> <br />
            </div>

            {/* fourth */}
            <div>
            <h1 className="mt-20 text-2xl font-semibold tracking-widest">Services</h1>
                <p className="text-sm font-normal mt-10 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[185px] hover:before:opacity-100">Mobile App Development</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[170px] hover:before:opacity-100">Web App Development</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[73px] hover:before:opacity-100">AI Service</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[160px] hover:before:opacity-100">Blockchain Solutions</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[110px] hover:before:opacity-100">SaaS Products</p> <br />
                <p className="text-sm font-normal mt-3 tracking-widest inline-block relative cursor-text duration-700  before:absolute before:-bottom-1  before:w-0 before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[120px] hover:before:opacity-100">DevOps Service</p> <br />

                <h1 className="text-2xl font-bold tracking-wider mt-[175px] inline-block relative cursor-text duration-700  before:absolute before:-bottom-2 before:right-0 before:w-[60px] before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[137px] hover:before:opacity-100">Newsletter</h1>
            </div>
        </div>
    </div>
  )
}

export default Footer