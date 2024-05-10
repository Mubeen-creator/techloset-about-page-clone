import React from 'react'
import Image from 'next/image';
import { FaTools } from "react-icons/fa";
import { PiLaptopFill } from "react-icons/pi";
import { TfiWorld } from "react-icons/tfi";
import { BiNotepad } from "react-icons/bi";




function WhatWeDo() {
  return (
    <div>
    <div className='bg-white w-full h-auto pb-10 pt-10 around text-black flex justify-around'>
        <div>
            <h1 className="text-4xl font-bold tracking-wider inline-block relative cursor-text transition-all duration-700 before:content-[''] before:absolute before:-bottom-1 before:right-0 before:w-[74px] before:h-0.5 before:rounded-full before:opacity-100 before:transition-all before:duration-700 before:bg-orange-500 hover:before:w-[225px] hover:before:opacity-100">What we do</h1>
            <p className="pt-5 text-md font-normal text-gray-700 tracking-wider">
            Team TechloSet practice a De Facto approach when it comes to <br /> quality, that is one of the many reasons that clients keep coming<br /> back to us. We always try to give a little hint of creativity with<br /> our solutions. A balance is maintained in our products that<br /> satisfies the compulsion of boomers, causality of millennials and<br /> spark of Gen z. So, no matter what audience your solution is<br /> going to have, Team TechloSet has the supernatural powers to<br /> act and think like people from any era. We achieve our objectives<br /> by interacting with the brightest minds in modern digital<br /> paradigms and platforms on a continuous basis. TechloSet<br /> distinguishes itself by providing organizations with a single point<br /> of contact to address all an enterprise digital solution needs.<br /> TechloSet Solutions recognizes the importance of keeping abreast<br /> through frequent self-reinvention. We have over 7 years of work<br /> experience, and the revolution process has been constantly<br /> evolving during this time. Our focus is to build a digital<br /> experience around us, and our quest is to work tirelessly to that<br /> end. Having said that about us, our Clients second with what we<br /> say!
            </p>
        </div>

        <div>
            <div className='grid grid-cols-2 gap-2 pt-10 text-white'>
                <div className='w-[300px] h-[200px] bg-orange-700 rounded-lg'>
                    <FaTools className="text-6xl ml-[220px] mt-3"/>
                    <h1 className="text-sm font-semibold mt-[75px] leading-tight pl-5">PRODUCT<br /> ENGINEERING</h1>
                </div>
                <div className='w-[300px] h-[200px] bg-orange-700 rounded-lg'>
                    <PiLaptopFill className="text-7xl ml-[220px] mt-1"/>
                    <h1 className="text-sm font-semibold mt-[75px] leading-tight pl-5">ENTERPRISE<br /> SERVICES</h1>
                </div>
                <div className='w-[300px] h-[200px] bg-orange-700 rounded-lg'>
                    <TfiWorld className="text-6xl ml-[220px] mt-3"/>
                    <h1 className="text-sm font-semibold mt-[60px] leading-tight pl-5">DIGITAL<br />TRANSFORMATION <br />SERVICES</h1>
                </div>
                <div className='w-[300px] h-[200px] bg-orange-700 rounded-lg'>
                    <BiNotepad className="text-6xl ml-[220px] mt-3"/>
                    <h1 className="text-sm font-semibold mt-[60px] leading-tight pl-5">STARTUP SOFTWARE<br />SERVICES<br />& SOLUTIONS</h1>
                </div>
            </div>
        </div>
    </div>
    <Image src="/mission.png" alt="image" width={1300} height={1000} className="pt-1 pb-10 bg-white w-full h-auto"/>
  </div>
  )
}

export default WhatWeDo