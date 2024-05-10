import React from 'react'
import { GrStatusGood } from "react-icons/gr";

function Manage() {
  return (
    <div>
        <div  className='bg-white w-full h-auto text-black pb-20 flex justify-around'>
              <div>
                    <h1 className="text-2xl font-bold tracking-wider cursor-text">Let us Manage your Projects end-to-end</h1>
                    <h1 className="text-lg pt-6 font-bold tracking-wider cursor-text">We can build your project end-to-end.</h1>
                      <div className=" gap-4 mt-10">
                          <div className='flex gap-2'>
                            <GrStatusGood className="text-4xl font-bold text-white bg-orange-700 p-1 rounded-full"/>
                            <p className="text-md font-semibold text-gray-600 tracking-wider -mt-4">Providing MVP workshops where we can present strategies and <br /> define the scope of your product by analyzing the market and target<br /> audience.</p>
                            </div>

                            <div className="flex gap-2 mt-8">
                            <GrStatusGood className="text-4xl font-bold text-white bg-orange-700 p-1 rounded-full"/>
                            <p className="text-md font-semibold text-gray-600 tracking-wider pt-1">Defining budget and time frame.</p>
                            </div>

                            <div className="flex gap-2 mt-8">
                            <GrStatusGood className="text-4xl font-bold text-white bg-orange-700 p-1 rounded-full"/>
                            <p className="text-md font-semibold text-gray-600 tracking-wider pt-1">Appointing expert vetted developers, designers, and quality<br /> assurance officers.</p>
                            </div>

                            <button className="mt-10 ml-10 text-lg font-bold text-white hover:text-black bg-orange-700 px-14 py-1 rounded-lg hover:bg-white border  hover:border-orange-700 hover:border-4xl transition delay-150 duration-500 ease-in-out">Start Your Project</button>
                      </div>
              </div>

              <div>
                    <h1 className="text-2xl font-bold tracking-wider cursor-text">Hire us as your dedicated team</h1>
                    <h1 className="text-lg pt-6 font-bold tracking-wider cursor-text">We'll put together a skilled team to build your product.
                    </h1>
                      <div className=" gap-4 mt-10">
                          <div className='flex gap-2'>
                            <GrStatusGood className="text-4xl font-bold text-white bg-orange-700 p-1 rounded-full"/>
                            <p className="text-md font-semibold text-gray-600 tracking-wider -mt-2">Onboard us to plan, design, develop, test, and deploy your product in <br /> complete transparency</p>
                            </div>

                            <div className="flex gap-2 mt-8">
                            <GrStatusGood className="text-4xl font-bold text-white bg-orange-700 p-1 rounded-full"/>
                            <p className="text-md font-semibold text-gray-600 tracking-wider pt-1">Pricing and strategies that are project centric.</p>
                            </div>

                            <div className="flex gap-2 mt-8">
                            <GrStatusGood className="text-4xl font-bold text-white bg-orange-700 p-1 rounded-full"/>
                            <p className="text-md font-semibold text-gray-600 tracking-wider pt-1">Works best for startups, small businesses, and large corporations.</p>
                            </div>

                            <button className="mt-10 ml-10 text-lg font-bold text-white hover:text-black bg-orange-700 px-14 py-1 rounded-lg hover:bg-white border  hover:border-orange-700 hover:border-4xl transition delay-150 duration-500 ease-in-out">Know More</button>
                      </div>
              </div>
        </div>
    </div>
  )
}

export default Manage