import FaqCard from "@/components/main/FaqCard";

const faqs = [
  {
    img: "https://cdn-icons-png.flaticon.com/128/562/562678.png",
    imgTitle: "food",
    title: "Getting Started",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/2224/2224150.png",
    imgTitle: "food",
    title: "Nutrition & Ingredients",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/9582/9582476.png",
    imgTitle: "user icon",
    title: "Managing My Subscription",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/679/679720.png",
    imgTitle: "packing box",
    title: "Receiving My Meals",
  },
  {
    img: "https://cdn-icons-png.flaticon.com/128/2771/2771460.png",
    imgTitle: "food",
    title: "Enjoying My Meals",
  },
];

const page = () => {
  return (
    <div className="flex flex-col gap-6 w-full h-full max-h-screen overflow-auto scrollbar-hide bg-[#F4F3EF]">
      {/* heading */}
      <h1 className="pt-8 text-5xl font-bold text-center text-black font-Arial Black">
        Frequently Asked Questions
      </h1>
      {/* searchbar */}
      <div className="w-full px-12 py-2">
        <input
          type="text"
          name="faq"
          className="w-full p-3 text-black bg-white border border-gray-200"
          placeholder="What can we help you with?"
        />
      </div>
      {/* questions */}
      <div className="flex items-center justify-center w-full h-full px-12 py-2 ">
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
      <div className="flex flex-col items-center w-full h-full gap-4 p-6">
        <h2 className="text-3xl font-bold text-black font-arial">
          Can&apos;t find your answer?
        </h2>
        <button
          type="submit"
          className="px-6 py-3 text-white border rounded-lg bg-fit-red"
        >
          Contact Us
        </button>
      </div>
      {/* bg-img section */}
      <div className="w-full relative my-12  min-h-[600px] bg-[url('/images/food-main.avif')] bg-cover bg-center flex justify-center mt-40">
        <div className="flex flex-col items-center mx-12 px-12 absolute top-[-80px] bg-white gap-6 py-10 border-gray-200 rounded-sm">
          <h1 className="text-[#000] font-Arial Black text-4xl font-bold  text-center pt-8">
            Get Up to 25% Off Our Ready-Made Meals
          </h1>
          <span className="text-[#4b4d4c] text-center">
            Get fully-prepared, gourmet meals delivered to your doorstep. No
            commitment necessary—skip or cancel at any time.
          </span>
          <button
            type="submit"
            className="px-6 py-3 text-white border rounded-lg bg-fit-red"
          >
            Get Offer
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;