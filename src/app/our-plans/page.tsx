import GetBtn from "@/components/buttons/GetBtn";
import Carousel from "@/components/main/Carousel";

const page = () => {
  const menuData = [
    {
      title: "Chef's Choice",
      description: "Widest variety of clean and chef created meals",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
    {
      title: "Protein Plus",
      description: "30 grams of protein or more per serving",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
    {
      title: "Calorie Smart",
      description: "Meals containing ~550 calories or less",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
    {
      title: "GLP-1 Balance",
      description: "Protein-forward, calorie-friendly meals",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full bg-[#f1f1ea]">
      {/* create your first box */}
      <div className="flex flex-col w-full min-h-[868px] h-auto bg-[#f1f1ea] p-12 gap-6 items-center ">
        <h2 className="text-[#4b4d4c] font-Arial text-4xl font-bold text-center flex justify-center">
          Create Your First Box
        </h2>
        <h3 className="text-[#4b4d4c] font-Arial text-2xl font-bold text-center flex justify-center">
          No commitments, except to yourself. You can pause, cancel or change
          your plan at any time.
        </h3>
        {/* select plan container */}
        <div className="max-w-[1054px] bg-white shadow-lg flex flex-col w-full gap-12 p-8 items-center rounded-lg">
          <div className="flex flex-col w-full lg:flex-row">
            {/* left section */}
            <div className="flex flex-[0.5] flex-col gap-6 items-center border-r border-dotted border-gray-300 p-6">
              <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                1. Choose your preferences
              </h3>
              <span className="text-[#656565] text-center">
                Your preferences help us show you the most relevant recipes
                first. You'll still have access to all recipes each week!
              </span>
              {/* select buttons */}
              <div className="grid w-full grid-cols-1 grid-rows-3 gap-3 sm:grid-cols-2">
                <div className="max-w-[225px] w-full h-[104px] border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3">
                  <img
                    src="/icons/main/weight-machine.png"
                    alt="weight"
                    className="w-8 h-8"
                  />
                  <span className="text-black">Chef's Choice</span>
                </div>
                <div className="max-w-[225px] w-full h-[104px] border border-gray-300 rounded-md flex flex-col items-center justify-center px-3">
                  <img
                    src="/icons/main/weight-machine.png"
                    alt="weight"
                    className="w-8 h-8"
                  />
                  <span className="text-black">Protein Plus</span>
                </div>
                <div className="max-w-[225px] w-full h-[104px] border border-gray-300 rounded-md flex flex-col items-center justify-center px-3">
                  <img
                    src="/icons/main/weight-machine.png"
                    alt="weight"
                    className="w-8 h-8"
                  />
                  <span className="text-black">Poultry, Fish, & Veggie</span>
                </div>
                <div className="max-w-[225px] w-full h-[104px] border border-gray-300 rounded-md flex flex-col items-center justify-center px-3">
                  <img
                    src="/icons/main/weight-machine.png"
                    alt="weight"
                    className="w-8 h-8"
                  />
                  <span className="text-black">Calorie Smart</span>
                </div>
                <div className="max-w-[225px] w-full h-[104px] border border-gray-300 rounded-md flex flex-col items-center justify-center px-3">
                  <img
                    src="/icons/main/weight-machine.png"
                    alt="weight"
                    className="w-8 h-8"
                  />
                  <span className="text-black">Keto</span>
                </div>
                <div className="max-w-[225px] w-full h-[104px] border border-gray-300 rounded-md flex flex-col items-center justify-center px-3">
                  <img
                    src="/icons/main/weight-machine.png"
                    alt="weight"
                    className="w-8 h-8"
                  />
                  <span className="text-black">GLP-1 Balance</span>
                </div>
              </div>
              <span className="text-center text-[#656565]">
                A variety of balanced, chef-prepared meals with clean
                ingredients to fit any lifestyle.
              </span>
            </div>
            {/* right section */}
            <div className="flex flex-[0.5] flex-col gap-6 items-center p-6">
              {/* select meals */}
              <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                2. Select meals per week
              </h3>
              {/* select option container */}
              <div className="flex flex-col items-center w-full">
                <span className="text-black">Meals per week</span>
                {/* option buttons */}
                <div className="grid w-full grid-cols-1 grid-rows-2 gap-3 p-6 sm:grid-cols-2 md:grid-cols-3">
                  <div className="max-w-[128px] w-full border border-[#206b19] text-[#206b19] text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md">
                    6
                  </div>
                  <div className="max-w-[128px] w-full border border-[#206b19] text-[#206b19] text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md">
                    8
                  </div>
                  <div className="max-w-[128px] w-full border border-[#206b19] text-[#206b19] text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md">
                    10
                  </div>
                  <div className="max-w-[128px] w-full border border-[#206b19] text-[#206b19] text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md">
                    12
                  </div>
                  <div className="max-w-[128px] w-full border border-[#206b19] text-[#206b19] text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md">
                    14
                  </div>
                  <div className="max-w-[128px] w-full border border-[#206b19] text-[#206b19] text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md">
                    18
                  </div>
                </div>
              </div>
              {/* chef's choice container */}
              <div className="flex flex-col w-full gap-4 px-3 border border-gray-300 rounded-md">
                {/* upper section */}
                <div className="flex justify-between w-full px-3 py-6">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-black">Chef's Choice</h4>
                    <span className="text-black">10 meals per week</span>
                  </div>
                  <div className="flex items-center h-6 gap-2 p-3 bg-red-200 rounded-full">
                    <img
                      src="https://cdn-icons-png.flaticon.com/128/9484/9484251.png"
                      alt="heart"
                      className="w-4 h-4"
                    />
                    <span className="text-red-800">Most Popular</span>
                  </div>
                </div>
                {/* border */}
                <div className="px-3 border border-gray-300"></div>
                {/* lower section */}
                <div className="flex flex-col items-center w-full ">
                  <div className="flex justify-between w-full px-3">
                    <span className="text-lg text-black">Box price</span>
                    <span className="text-black text-md">$134.90</span>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <span className="text-lg text-black">
                      Price per serving
                    </span>
                    <span className="text-black text-md">$13.49</span>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <span className="text-lg text-black">Shipping</span>
                    <span className="text-black text-md">+ $9.99</span>
                  </div>
                  <div className="flex justify-between bg-[#d7d7d2] py-3 -mx-3 w-[calc(100%+1.5rem)] px-6 ">
                    <span className="text-lg font-bold text-black">
                      First box total
                    </span>
                    <span className="font-bold text-black text-md">
                      $144.89
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GetBtn content="Select this plan" />
        </div>
      </div>

      {/* flexible menu */}
      <div className="flex flex-col gap-12 w-full p-12 min-h-[563px] bg-[#f1f1ea] items-center">
        {/* heading */}
        <div className="flex flex-col gap-3">
          <h2 className="flex justify-center text-4xl font-bold text-center text-black font-Arial">
            A flexible menu every week
          </h2>
          <span className="text-center text-black">
            Simply select meals after checkout or{" "}
            <a
              href="#"
              className="text-gray-600 underline hover:text-[#1a5614]"
            >
              view our complete weekly menus
            </a>
          </span>
        </div>

        {/* carousel */}
        <Carousel items={menuData} />

        {/* promo code */}
        <div className="flex gap-3 max-w-[582px] w-full bg-white py-6 px-10 items-center justify-center rounded-md">
          <input
            type="text"
            className="w-full max-w-[337px] border border-gray-300 p-3"
            placeholder="Enter Promo Code"
          />
          <GetBtn content="Apply" />
        </div>
      </div>

      {/* common questions */}
      <div className="flex flex-col items-center w-full gap-6 p-12 bg-white">
        <h2 className="flex justify-center text-4xl font-bold text-center text-black font-Arial">
          Common Questions
        </h2>
        <div className="flex flex-col max-w-[1144px] gap-6 w-full">
          <div className="flex justify-between w-full hover:bg-[#9fe89a] p-3">
            <span className="font-bold text-black">
              What are the benefits of Factor?
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14035/14035521.png"
              alt="downArrow"
              className="w-6 h-6"
            />
          </div>
          <div className="flex justify-between w-full hover:bg-[#9fe89a] p-3">
            <span className="font-bold text-black">
              How long do meals last?
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14035/14035521.png"
              alt="downArrow"
              className="w-6 h-6"
            />
          </div>
          <div className="flex justify-between w-full hover:bg-[#9fe89a] p-3">
            <span className="font-bold text-black">
              Which delivery carriers do you use?
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14035/14035521.png"
              alt="downArrow"
              className="w-6 h-6"
            />
          </div>
          <div className="flex justify-between w-full hover:bg-[#9fe89a] p-3">
            <span className="font-bold text-black">
              Do you offer ketogenic meals?
            </span>
            <img
              src="https://cdn-icons-png.flaticon.com/128/14035/14035521.png"
              alt="downArrow"
              className="w-6 h-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
