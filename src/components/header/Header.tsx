import { AlignJustify, ChevronDown, HammerIcon, Search, ShoppingCart, User } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => (
    <div className='flex justify-between items-center px-5 w-full h-[56px] shadow-lg border-b border-[#0000001c] bg-[#fff] font-medium'>

        <div className="w-full hidden md:block">
            <div className="w-full flex justify-between items-center">
                {/* // first part of the header */}
                <div className="flex items-center gap-4 w-full ">
                    <div className="relative h-10 w-16 rounded-lg overflow-hidden">
                        <Image
                            src={'/icons/header/logo.png'}
                            alt='logo'
                            fill
                            style={{ objectFit: 'cover' }} />
                    </div>
                    <div className="w-fit">
                        <ul className='flex gap-3 lg:gap-4 items-center w-full '>
                            <li className='w-full min-w-24 flex items-center gap-1 text-black group hover:text-red-700 duration-300 cursor-pointer'>
                                <Link href={'/weekly-menu'}>Weekly Menu</Link>
                            </li>
                            <li className='w-full min-w-[70px] flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>
                                <Link href={'/our-plans'}>Our Plans</Link>
                            </li>
                            <li className='w-full min-w-[90px] flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>About Us
                                <ChevronDown className="w-4 h-4 group-hover:-rotate-180 transition-transform duration-[400] ease-linear" />
                            </li>
                            <li className='w-full min-w-20 flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>
                                <Link href={'/contact-us'}>Contact Us</Link>
                            </li>
                            <li className='w-full  flex items-center gap-1 group hover:text-red-700 duration-300 cursor-pointer'>
                                <Link href={'/faqs'}>FAQs</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* // Second part of the header */}
                <div className="flex justify-end items-center gap-4 w-full  ">
                    <button className='hover:text-red-700 duration-300'> <Search /> </button>
                    <div className="hover:text-red-700 duration-300"> <User />  </div>
                    <div className="h-9 w-24 bg-black text-white hover:scale-105 duration-300 cursor-pointer rounded-lg flex justify-center items-center">
                        {'$0.00 '} <ShoppingCart />
                    </div>
                    <Link href={'/sign-in'} className='px-3 py-1 border border-fit-red rounded-md '>
                    Login
                    </Link>
                </div>
            </div>
        </div>

        {/* // Mobile Header */}
        <div className="w-full hidden max-md:block ">
            <div className="w-full flex justify-between items-center gap-4 ">
                <button><AlignJustify /></button>
                <div className="relative h-10 w-16 rounded-lg overflow-hidden">
                    <Image
                        src={'/icons/header/logo.png'}
                        alt='logo'
                        fill
                        style={{ objectFit: 'cover' }} />
                </div>
                <div className="h-8 w-24 bg-black text-[12px] text-white hover:scale-105 duration-300 cursor-pointer rounded-lg flex justify-center items-center">
                    {'$0.00 '} <ShoppingCart />
                </div>
            </div>
        </div>
    </div>
)

export default Header
