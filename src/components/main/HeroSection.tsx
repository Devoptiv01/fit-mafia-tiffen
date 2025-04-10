import { MapPin, MoveRight, Star } from 'lucide-react'
import React from 'react'
import Slider from './Slider'

const HeroSection = () => {
    return (
        <div className='w-full max-w-[1600px] mx-auto h-full min-h-[550px] bg-img-hero-section text-black flex flex-col gap-4 justify-center pl-5'>

            <div className="w-fit bg-fit-red text-white font-medium px-5 py-3 rounded-full text-sm">
                🔥 Get 10% Off for first order
            </div>
            <div className="w-fit flex flex-col -space-y-4">
                <h2 className='text-[51px] text-fit-red font-bold'>Many</h2>
                <h2 className='text-[51px] text-fit-red font-bold'>Restaurants</h2>
                <h5 className='text-[35px] text-black font-semibold'>and offers in one place</h5>
            </div>
            <p className='w-1/2 text-[16px]'>Indulge in a culinary journey with our exquisite catering services, where every bite is a celebration of flavors and artistry.Elevate your event with our impeccable catering, where passion for food meets seamless service, creating unforgettable moments.
            </p>
            <div className="w-fit max-w-1/2 flex gap-3 text-sm">
                <div className="w-fit bg-black h-10 px-4 flex gap-2 items-center rounded-lg text-white cursor-pionter">
                    <MapPin className='w-4 h-4' />
                    Find nearby restaurants
                    <MoveRight className='w-4 h-4' />
                </div>
                <div className="w-fit h-10 px-4 flex gap-2 items-center rounded-lg border border-black text-grey-300 cursor-pionter">
                    <Star className='w-4 h-4' />
                    Select your food preferencies
                </div>
            </div>
            <div className="w-fit flex gap-4">
                <div className="w-fit text-3xl font-bold">+145</div>
                <div className="w-fit text-base -space-y-2 flex flex-col justify-center text-fit-red">
                    <h4>Restaurants and bars</h4>
                    <h4>nearby you</h4>
                </div>
            </div>
            {/* <Slider/> */}
        </div>
    )
}

export default HeroSection
