import FaqCard from "@/components/main/FaqCard";

const faqs = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
    imgTitle: "food",
    title: "Getting Started",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
    imgTitle: "food",
    title: "Nutrition & Ingredients",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
    imgTitle: "user icon",
    title: "Managing My Subscription",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
    imgTitle: "packing box",
    title: "Receiving My Meals",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/857/857681.png",
    imgTitle: "food",
    title: "Enjoying My Meals",
  },
];

const page = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-full max-h-screen overflow-auto scrollbar-hide bg-[#F4F3EF]">
      {/* heading */}
      <h1 className="text-black font-Arial Black text-5xl font-bold  text-center pt-8">
        Frequently Asked Questions
      </h1>
      {/* searchbar */}
      <div className="w-full px-12 py-2">
        <input
          type="text"
          name="faq"
          className="border border-gray-200 w-full p-3 bg-white text-black"
          placeholder="What can we help you with?"
        />
      </div>
      {/* questions */}
      <div className=" flex w-full h-full px-12 justify-center items-center py-2">
        <div className="lg:w-[65%] h-auto flex flex-wrap gap-6 justify-start">
          {faqs.map((data) => {
            return (
              <FaqCard
                key={data.title}
                img={data.img}
                imgTitle={data.imgTitle}
                title={data.title}
              />
            );
          })}
        </div>
      </div>
      {/* contact us */}
      <div className="w-full flex flex-col p-6 h-full items-center gap-4">
        <h2 className="text-black text-3xl font-bold font-arial">
          Can&apos;t find your answer?
        </h2>
        <button
          type="submit"
          className="border px-6 py-3 bg-fit-red text-white rounded-lg"
        >
          Contact Us
        </button>
      </div>
      {/* bg-img section */}
      <div className="w-full relative my-12  min-h-[600px] bg-[url('/temp/temp.webp')] bg-cover bg-center flex justify-center mt-40">
        <div className="flex flex-col items-center mx-12 px-12 absolute top-[-80px] bg-white gap-6 py-10 border-gray-200 rounded-sm">
          <h1 className="text-[#000] font-Arial Black text-4xl font-bold  text-center pt-8">
            Get Up to $75 Off Our Ready-Made Meals
          </h1>
          <span className="text-[#4b4d4c] text-center">
            Get fully-prepared, gourmet meals delivered to your doorstep. No
            commitment necessary—skip or cancel at any time.
          </span>
          <button
            type="submit"
            className=" border px-6 py-3 bg-fit-red text-white rounded-lg"
          >
            Get Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;