import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";
// import Slider from './Slider'

const HeroSection = () => {
  return (
    <div className="w-full max-w-[1600px] mx-auto h-full min-h-[550px] bg-img-hero-section text-black flex flex-col gap-4 justify-center pl-5">
      <div className="w-fit bg-fit-red text-white font-medium px-2 py-1 md:px-5 md:py-3 rounded-full text-sm">
        🔥 Get 10% Off on Your First Tiffin Order
      </div>
      <div className="w-fit flex flex-col gap-1 md:gap-">
        <h2 className="text-3xl md:text-[51px] max-lg:pb-2 text-fit-red font-bold">
          Fuel Your Hustle.{" "}
        </h2>
        <h2 className="text-3xl md:text-[51px] text-fit-red font-bold md:mt-3">
          Eat Clean with Fit Mafia.
        </h2>
        <h5 className="text-2xl md:text-[35px] text-black font-semibold mt-2">
          Delivered Daily To Your Doorstep
        </h5>
      </div>
      <p className="w-full sm:w-1/2 text-[16px]">
        Indulge in the taste of home with our wholesome and hygienic tiffin
        service. Every meal is prepared with love and packed with
        nutrition—perfect for students, professionals, and families.
        {/* <br/> Elevate your everyday meals with our curated menu that changes daily. From North Indian classics to light and healthy options, we’ve got something for everyone. */}
      </p>
      <div className="w-fit max-w-1/2 flex flex-wrap gap-3 text-sm">
        <div className="w-fit bg-black h-10 px-4 flex gap-2 items-center rounded-lg text-white cursor-pionter">
          {/* <MapPin className='w-4 h-4' /> */}
          <img src="/images/food.png" alt="food" className="h-5 w-fit" />
          View Weekly Menu
          <MoveRight className="w-4 h-4" />
        </div>
        <Link href={'/our-plans'} className="w-fit h-10 px-4 flex gap-2 items-center rounded-lg border border-black text-grey-300 cursor-pionter">
          {/* <Star className='w-4 h-4' /> */}Create Order Now
        </Link >
      </div>
      <div className="w-fit flex gap-4">
        <div className="w-fit text-3xl font-bold">+145</div>
        <div className="w-fit text-base -space-y-2 flex flex-col justify-center text-fit-red">
          <h4>Happy Customers Enjoying Fresh</h4>
          <h4>Meals Every Day</h4>
        </div>
      </div>
      {/* <Slider/> */}
    </div>
  );
};

export default HeroSection;
