import { ChevronDown, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <div className='flex justify-between items-center px-5 w-full h-[56px] shadow-lg border-b border-[#0000001c] bg-[#fff] font-medium'>

            {/* // first part of the header */}
            <div className="flex items-center gap-4 w-full">
                <div className="relative h-10 w-16 rounded-lg overflow-hidden">
                    <Image
                        src={'/icons/header/logo.png'}
                        alt='logo'
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
                <div className="w-fit">
                    <ul className='flex gap-5 items-center w-full '>
                        <li className='w-full min-w-24 flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>Weekly Menu
                            {/* <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-300 ease-in-out" /> */}
                        </li>
                        <li className='w-full min-w-[80px] flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>Our Plans
                            {/* <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-300 ease-in-out" /> */}
                        </li>
                        <li className='w-full min-w-24 flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>About Us
                            <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-300 ease-in-out" />
                        </li>
                        <li className='w-full  flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>Contact Us
                            {/* <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-300 ease-in-out" /> */}
                        </li>
                    </ul>
                </div>
            </div>

            {/* // Second part of the header */}
            <div className="flex justify-end items-center gap-4 w-full">
                <button className='hover:text-red-700 duration-300'> <Search /> </button>
                <div className="hover:text-red-700 duration-300"> <User />  </div>
                <div className="h-9 w-24 bg-black text-white hover:scale-105 duration-300 cursor-pointer rounded-lg flex justify-center items-center">
                    {'$0.00 '} <ShoppingCart /></div>
            </div>
        </div>
    )
}

export default Header
