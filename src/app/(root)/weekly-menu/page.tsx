import GetBtn from "@/components/buttons/GetBtn";
import MealCard from "@/components/main/MealCard";
import WeekSelector from "@/components/main/WeekSlector";
// import Image from 'next/image'
import React from "react";

const meals = [
  {
    image: "/plan-images/avengers/1.jpg",
    title: "🍛 Indian Thali",
    desc: "with Dal, Rice, Roti & Mixed Veggies",
  },
  {
    image: "/plan-images/avengers/2.jpg",
    title: "🍗 Chicken Skewers",
    desc: "with Mint Chutney & Salad",
  },
  {
    image: "/plan-images/avengers/3.jpg",
    title: "🍲 Rajma Chawal",
    desc: "Kidney Beans Curry with Steamed Rice",
  },
  {
    image: "/plan-images/avengers/4.jpg",
    title: "🧀 Paneer Butter Masala",
    desc: "with Jeera Rice & Naan",
  },
  {
    image: "/plan-images/avengers/5.jpg",
    title: "🥘Chicken Biryani",
    desc: "Served with Raita",
  },
  {
    image: "/plan-images/alpha/1.jpg",
    title: "🌯 Aloo Paratha",
    desc: "with Pickle & Curd",
  },
];

const addOnes = [
  {
    image: "/plan-images/single/1.jpg",
    title: "Item 1",
    desc: "Description for item 1",
  },
  {
    image: "/plan-images/single/2.jpg",
    title: "Item 2",
    desc: "Description for item 2",
  },
  {
    image: "/plan-images/single/3.jpg",
    title: "Item 3",
    desc: "Description for item 3",
  },
  {
    image: "/plan-images/single/4.jpg",
    title: "Item 4",
    desc: "Description for item 4",
  },
  {
    image: "/plan-images/single/5.jpg",
    title: "Item 5",
    desc: "Description for item 5",
  },
  {
    image: "/plan-images/single/6.jpg",
    title: "Item 6",
    desc: "Description for item 6",
  },
  {
    image: "/plan-images/single/7.jpg",
    title: "Item 7",
    desc: "Description for item 7",
  },
  {
    image: "/plan-images/single/8.jpg",
    title: "Item 8",
    desc: "Description for item 8",
  },
  {
    image: "/plan-images/single/9.jpg",
    title: "Item 9",
    desc: "Description for item 9",
  },
  {
    image: "/plan-images/single/10.jpg",
    title: "Item 10",
    desc: "Description for item 10",
  },
  {
    image: "/plan-images/single/11.jpg",
    title: "Item 11",
    desc: "Description for item 11",
  },
  {
    image: "/plan-images/single/12.jpg",
    title: "Item 12",
    desc: "Description for item 12",
  },
  {
    image: "/plan-images/single/13.jpg",
    title: "Item 13",
    desc: "Description for item 13",
  },
  {
    image: "/plan-images/single/14.jpg",
    title: "Item 14",
    desc: "Description for item 14",
  },
  {
    image: "/plan-images/single/15.jpg",
    title: "Item 15",
    desc: "Description for item 15",
  },
];


const Page = () => {
  return (
    <div>
      {/* <div className="flex items-center justify-center w-full gap-2">
        <button className="p-2 rounded-lg cursor-pointer w-fit hover:bg-fit-red hover:text-white">
          <h5 className="capitalize">apr</h5>
          <h5>19-25</h5>
        </button>

        <button className="p-2 rounded-lg cursor-pointer w-fit hover:bg-fit-red hover:text-white">
          <h5 className="capitalize">apr</h5>
          <h5>19-25</h5>
        </button>

        <button className="p-2 rounded-lg cursor-pointer w-fit hover:bg-fit-red hover:text-white">
          <h5 className="capitalize">apr</h5>
          <h5>19-25</h5>
        </button>
      </div> */}
      <WeekSelector/>

      <div className="w-full h-full pb-10 bg-[#F1F1EA] flex flex-col gap-4">
        <div className="flex flex-col w-full gap-4">
          <div className="w-full flex flex-col justify-center items-center gap-3 h-[138px] px-4 text-center">
            <h2 className="sm:text-4xl text-3xl font-medium sm:font-semibold text-[#4b4d4c] ">
              Explore our Flexible Weekly Menu
            </h2>
            <h4 className="sm:text-base text-sm text-[#4b4d4c]">
              Browse the 30+ gourmet meals featured on this week&apos;s menu
            </h4>
          </div>

          {/* // Ready Meals  */}
          <div className="flex flex-col w-full gap-4 px-4 ">
            <div className="flex flex-col gap-4 mx-3 w-fit md:mx-10">
              <h2 className="text-2xl font-semibold ">Ready-made meals</h2>
              <h4>
                Fresh meals that arrive ready to heat, eat and enjoy in minutes.
              </h4>
            </div>

            <div className="flex flex-wrap items-center justify-center w-full h-full gap-3 sm:gap-5 xl:gap-8">
              {/* // Cards  */}
              {meals.map((meal, i) => (
                <MealCard
                  key={i}
                  cover={false}
                  image={meal.image}
                  title={meal.title}
                  desc={meal.desc}
                />
              ))}
            </div>

            <button className="px-4 py-2 mx-auto text-base font-semibold border rounded-lg border-fit-red w-fit text-fit-red hover:bg-fit-red hover:text-white">
              Load more meals
            </button>
          </div>
        </div>

        <div className="flex flex-col w-full gap-4">
          <div className="w-fit flex flex-col gap-2 px-4 h-[70px] mx-3 md:mx-10 ">
            <h2 className="text-lg font-semibold sm:text-xl ">Add-ons</h2>
            <h4 className="text-sm sm:text-base ">
              You’re not limited to just the meals, you can add other goodies to
              your meals!
            </h4>
          </div>

          {/* // Ready Meals  */}
          <div className="flex flex-col w-full gap-4 px-4 ">
            <div className="flex flex-wrap items-center justify-center w-full h-full gap-3 sm:gap-5 xl:gap-8">
              {/* // Cards  */}
              {addOnes.map((item, i) => (
                <MealCard
                  key={i}
                  cover={true}
                  image={item.image}
                  title={item.title}
                  desc={item.desc}
                />
              ))}
            </div>

            <button className="px-4 py-2 mx-auto text-base font-semibold border rounded-lg border-fit-red w-fit text-fit-red hover:bg-fit-red hover:text-white">
              Load more meals
            </button>
          </div>
        </div>

        <div className="w-full h-full flex justify-center py-4 pt-5 sticky bottom-0 bg-[#F1F1EA]">
          <GetBtn link="/our-plans" content="Order Now" className="" />
        </div>

        <h4 className="px-4 text-base text-center ">
          Enjoy flavourful meals with no fuss. Pick your dishes, skip weeks,
          cancel anytime.
        </h4>
      </div>
    </div>
  );
};

export default Page;
