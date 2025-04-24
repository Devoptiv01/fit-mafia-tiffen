import GetBtn from '@/components/buttons/GetBtn'
import MealCard from '@/components/main/MealCard'
// import Image from 'next/image'
import React from 'react'

const Page = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center gap-2">

        <button className=' w-fit cursor-pointer p-2 rounded-lg hover:bg-fit-red hover:text-white' >
          <h5 className='capitalize'>apr</h5>
          <h5>19-25</h5>
        </button>

        <button className=' w-fit cursor-pointer p-2 rounded-lg hover:bg-fit-red hover:text-white' >
          <h5 className='capitalize'>apr</h5>
          <h5>19-25</h5>
        </button>

        <button className=' w-fit cursor-pointer p-2 rounded-lg hover:bg-fit-red hover:text-white' >
          <h5 className='capitalize'>apr</h5>
          <h5>19-25</h5>
        </button>

      </div>

      <div className="w-full h-full pb-10 bg-[#F1F1EA] flex flex-col gap-4">

        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col justify-center items-center gap-3 h-[138px] px-4 text-center">
            <h2 className='sm:text-4xl text-3xl font-medium sm:font-semibold text-[#4b4d4c] '>Explore our Flexible Weekly Menu</h2>
            <h4 className='sm:text-base text-sm text-[#4b4d4c]'>Browse the 30+ gourmet meals featured on this week&apos;s menu</h4>
          </div>

          {/* // Ready Meals  */}
          <div className="w-full px-4 flex flex-col gap-4 ">

            <div className="w-fit flex flex-col gap-4 mx-3 md:mx-10">
              <h2 className='text-2xl font-semibold '>Ready-made meals</h2>
              <h4>Fresh meals that arrive ready to heat, eat and enjoy in minutes.</h4>
            </div>

            <div className="w-full h-full flex gap-3 sm:gap-5 xl:gap-8 flex-wrap justify-center items-center">
              {/* // Cards  */}
              {Array(6).fill(0).map((e, i) => {
                console.log(e)
                return (
                  <MealCard key={i} image='/temp/temp.webp' title='🍕Shredded Jerk Chicken & Rice' desc='with Sweet Potatoes & Mango Jam' />
                )
              })}
            </div>

            <button className='px-4 py-2 border border-fit-red w-fit  rounded-lg mx-auto font-semibold text-base text-fit-red hover:bg-fit-red hover:text-white'>Load more meals</button>

          </div>
        </div>

        <div className="w-full flex flex-col gap-4">
          <div className="w-fit flex flex-col gap-2 px-4 h-[70px] mx-3 md:mx-10 ">
            <h2 className='sm:text-xl text-lg font-semibold '>
            Add-ons
              </h2>
            <h4 className='sm:text-base text-sm '>
            You’re not limited to just the meals, you can add other goodies to your meals!
              </h4>
          </div>

          {/* // Ready Meals  */}
          <div className="w-full px-4 flex flex-col gap-4 ">

            <div className="w-full h-full flex gap-3 sm:gap-5 xl:gap-8 flex-wrap justify-center items-center">
              {/* // Cards  */}
              {Array(6).fill(0).map((e, i) => {
                console.log(e)
                return (
                  <MealCard key={i} image='/temp/temp.webp' title='🍕Shredded Jerk Chicken & Rice' desc='with Sweet Potatoes & Mango Jam' />
                )
              })}
            </div>

            <button className='px-4 py-2 border border-fit-red w-fit  rounded-lg mx-auto font-semibold text-base text-fit-red hover:bg-fit-red hover:text-white'>Load more meals</button>

          </div>
        </div>

        <div className="w-full h-full flex justify-center py-4 pt-5 sticky bottom-0 bg-[#F1F1EA]">
          <GetBtn  link='/our-plans' content='Get started'/>
        </div>

        <h4 className='text-center px-4 text-base '>Enjoy flavourful meals with no fuss. Pick your dishes, skip weeks, cancel anytime.</h4>
      </div>



    </div>
  )
}

export default Page
