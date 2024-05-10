import React from 'react'
import Image from 'next/image'

function About() {
  return (
    <div className="flex justify-between">
        <div className="bg-white w-full h-auto text-black pt-[100px]">
            <h1 className="text-4xl font-bold tracking-widest pl-20 inline-block relative cursor-text duration-700  before:absolute before:-bottom-2 before:right-0 before:w-[120px] before:h-0.5 before:rounded-full before:opacity-100 before:duration-700 before:bg-orange-500 hover:before:w-[330px] hover:before:opacity-100">About Company</h1>
            <p className="pt-10 text-md font-normal text-gray-700 tracking-wider-20 pl-20">Founded in 2018, Techloset is a dynamic and innovative technology <br /> company that specializes in providing a wide range of IT services to <br /> businesses and organizations worldwide. With a passion for cutting- <br /> edge technologies, we have established ourselves as a leading <br /> provider of mobile app development and DevOps solutions. At <br /> Techloset, we understand the ever-evolving nature of the digital <br />   landscape and strive to stay ahead of the curve.</p>

            <p className="pt-5 text-md font-normal text-gray-700 tracking-wider pl-20 " >With a dedicated team of experienced professionals, we deliver <br /> tailored solutions that cater to the unique needs of our clients. Our <br /> expertise extends to cloud computing, cybersecurity, and software <br /> development, enabling us to provide comprehensive IT solutions. At <br /> Techloset, we prioritize client satisfaction and strive to exceed <br /> expectations through our innovative approach and exceptional <br /> customer service.</p>
            <div className="pl-20 flex gap-4 pb-20 pt-10">
                <button className="text-lg font-bold text-white hover:text-black bg-orange-600 px-4 py-1 rounded-lg hover:bg-white border  hover:border-orange-600 hover:border-4xl transition delay-150 duration-500 ease-in-out">Learn More</button>
                <button className="bg-white border border-orange-600 border-4xl px-4 py-1 rounded-lg hover:bg-orange-600 hover:text-white font-semibold ransition delay-150 duration-500 ease-in-out">Contact Us</button>
            </div>
        </div>

        <div className='bg-white flex pr-10'>
            <Image src="/about1.png" alt='image' width={1000} height={380} className='pt-10' />
        </div>
    </div>
  )
}

export default About