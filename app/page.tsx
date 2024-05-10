import Link from "next/link";import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { RiTwitterXFill } from "react-icons/ri";
import About from "./components/about/About";
import WhatWeDo from "./components/whatWeDo/WhatWeDo";
import Manage from "./components/manage/Manage";
import Footer from "./components/footer/Footer";





export default function Home() {
  return (
    <div >
        <div className="bg-blue-950 flex justify-between py-6 px-8">
          <h1 className="text-xl font-bold text-green-400 uppercase tracking-widest cursor-pointer">Techloset </h1>
            <div className="flex gap-4">
              <Link href="/">Cases</Link>
              <Link href="/">Services</Link>
              <Link href="/">About</Link>
              <Link href="/">Carrer</Link>
              <Link href="/">Blogs</Link>
              <Link href="/">Contacts</Link>
              <button className="bg-white text-black hover:text-white -mt-2 hover:bg-orange-600 px-10 py-2 rounded-lg transition delay-150 duration-500 ease-in-out">Hire Us </button>
            </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 via-teal-400 to-slate-950  w-full h-[430px] flex justify-between">
            <div className="pl-16">
                <h1 className="text-white font-bold text-4xl pt-[250px] inline-block relative cursor-text duration-700  before:absolute before:-bottom-2 before:right-0 before:w-[70px] before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[165px] hover:before:opacity-100">About Us</h1>
                <p className="text-white  max-w-[9000px] font-normal text-md tracking-wider pt-3" >Your very own technology closet - We believe in delivering you with the complete experience of entering a <br /> closet brimming with cutting-edge technology that you will never want to depart.</p>
            </div>

            <div className="pt-[280px]">
              <div>
              <h1 className="text-white font-semibold tracking-widest text-lg pl-9">Get Connected</h1>
              </div>
              <div className="pt-4 flex gap-4 mr-20 ">
              <FaGithub className="cursor-pointer text-4xl bg-white rounded-full p-2 text-orange-600 hover:bg-black hover:text-white transition delay-150 duration-500 ease-in-out" />
              <FaInstagram className="cursor-pointer text-4xl bg-white rounded-full p-2 text-orange-600 transition delay-150 duration-500 ease-in-out hover:text-white hover:bg-pink-500" />
              <FaFacebookF className="cursor-pointer text-4xl bg-white rounded-full p-2 text-orange-600 transition delay-150 duration-500 ease-in-out hover:bg-blue-600 hover:text-white" />
              <GrLinkedinOption className="cursor-pointer text-4xl bg-white rounded-full p-2 text-orange-600 transition delay-150 duration-500 ease-in-out hover:bg-blue-600 hover:text-white " />
              <RiTwitterXFill className="cursor-pointer text-4xl bg-white rounded-full p-2 text-orange-600 transition delay-150 duration-500 ease-in-out hover:bg-blue-600 hover:text-white" />
              </div>
            </div>
        </div>

        <About />

        <WhatWeDo />

        <Manage />

        <Footer />
    </div>
  );
}
