import Image from 'next/image'
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

      <div className="w-full h-screen bg-[#F1F1EA] ">

        <div className="w-full flex flex-col justify-center items-center gap-1 h-[138px]">
          <h2 className='text-4xl font-semibold text-[#4b4d4c] '>Explore our Flexible Weekly Menu</h2>
          <h4 className='text-base text-[#4b4d4c]'>Browse the 30+ gourmet meals featured on this week's menu</h4>
        </div>

        {/* // Ready Meals  */}
        <div className="w-full px-4 ">
          <h2 className='text-2xl font-semibold '>Ready-made meals</h2>
          <h4>Fresh meals that arrive ready to heat, eat and enjoy in minutes.</h4>

          <div className="w-full">
            {/* // Cards  */}
            <div className="w-[364px] h-full bg-white rounded-lg shadow-md flex flex-col justify-center items-center gap-2">
              <div className="relative w-full h-[240px] rounded-t-lg overflow-hidden">
                <Image
                  src={'/temp/temp.webp'}
                  alt='meals'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>

              <div className="w-full p-3 pt-0">
                <h3 className='font-bold text-lg '>🍕Shredded Jerk Chicken & Rice</h3>
                <h4 className='text-base '>with Sweet Potatoes & Mango Jam</h4>
              </div>

              <div className="w-full p-3 pt-0">
                <h5 className='w-fit px-2 py-[1px] bg-[#3D454B] text-white rounded-sm'>Calorie Smart</h5>
                <h5 className='w-fit px-2 py-[1px] bg-[#3D454B] text-white rounded-sm'>Protein Plus</h5>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Page
