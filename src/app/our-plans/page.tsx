"use client";
import Carousel from "@/components/main/Carousel";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Stepper from "@/components/main/Stepper";

type Inputs = {
  preference: string[];
  yourPreference: string[];
  mealsPerWeek: string;
  promoCode?: string;
  totalPrice: number;
};

const Page = () => {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    // formState: { errors },
  } = useForm<Inputs>({
    defaultValues: { preference: ["Veg"], yourPreference: ['Ch'] ,mealsPerWeek: "10" },
  });

  const selectedMeals = watch("mealsPerWeek");
  const selectedPreference = watch("preference");

  useEffect(() => {
    const selected = selectedMeals ?? "10";
    const price = pricingData[selected] || pricingData["10"];
    setValue("totalPrice", price.total);
  }, [selectedMeals, setValue]);

  const onSubmit = async (data: Inputs) => {
    console.log(data);
    // try {
    //   const res = await axios.post("/api/v1/subscribe-plan", data);
    //   console.log(res);
    //   router.push("/register");
    // } catch (error) {
    //   console.log(error);
    // }
  };

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

  const pricingData: Record<
    string,
    { boxPrice: number; perServing: number; total: number }
  > = {
    "6": { boxPrice: 89.94, perServing: 14.99, total: 99.93 },
    "8": { boxPrice: 111.92, perServing: 13.99, total: 121.91 },
    "10": { boxPrice: 134.9, perServing: 13.49, total: 144.89 },
    "12": { boxPrice: 155.88, perServing: 12.99, total: 165.87 },
    "14": { boxPrice: 174.86, perServing: 12.49, total: 184.85 },
    "18": { boxPrice: 215.82, perServing: 11.99, total: 225.81 },
  };

  const price =
    pricingData[selectedMeals as keyof typeof pricingData] || pricingData["10"];

    const steps = [
      { title: 'Food Preference', description: 'Desc for step one' },
      { title: 'Step Two', description: 'Desc for step two' },
      { title: 'Step Three', description: 'Desc for step three' },
    ];

  return (
    <div className="flex flex-col w-full h-full bg-[#f1f1ea]">
      {/* create your first box */}
      <div className="flex flex-col w-full min-h- [868px] h-auto bg-[#f1f1ea] px-6 py-12 gap-6 items-center ">
        <h2 className="text-[#4b4d4c] font-Arial text-4xl font-bold text-center flex justify-center">
          Create Your First Box
        </h2>
        <h3 className="text-[#4b4d4c] font-Arial text-2xl font-bold text-center flex justify-center">
          No commitments, except to yourself. You can pause, cancel or change
          your plan at any time.
        </h3>

        <Stepper
        // steps={steps}
        currentStep={currentStep}
        onStepChange={(step) => setCurrentStep(step)}
      />
        {/* select plan container */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="max-w-[1054px] bg-transparent flex flex-col w-full gap-12 px-2 py-4 md:p-8 items-center rounded-lg"
        >
          <div className="flex flex-col w-full lg:flex-row justify-center">
            {/*  Step 1*/}
            {currentStep === 1 && <div className="flex flex-col gap-6 items-center p-6">
              <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                  Choose Food Preference 
              </h3>
              {/* <span className="text-[#656565] text-center">
                Your preferences help us show you the most relevant recipes
                first. You&apos;ll still have access to all recipes each week!
              </span> */}

              {/* Updated select buttons */}
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Veg */}
                <div className="relative">
                  <input
                    type="checkbox"
                    id="veg"
                    {...register("preference")}
                    value="Veg"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="veg"
                    className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <img
                      src="/images/brocolli.svg"
                      alt="veg"
                      className="w-10 h-10"
                    />
                    <span className="px-2 text-center text-black">Veg</span>
                  </label>
                </div>

                {/* Non-Veg */}
                <div className="relative">
                  <input
                    type="checkbox"
                    id="non-veg"
                    {...register("preference")}
                    value="Non-Veg"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="non-veg"
                    className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <img
                      src="/images/chicken.svg"
                      alt="non-veg"
                      className="w-10 h-10"
                    />
                    <span className="px-2 text-center text-black">Non-Veg</span>
                  </label>
                </div>

                {/* Mix */}
                <div className="relative">
                  <input
                    type="checkbox"
                    id="mix"
                    {...register("preference")}
                    value="Mix"
                    className="hidden peer"
                  />
                  <label
                    htmlFor="mix"
                    className="w-full h-[104px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <img
                      src="/images/mix.svg"
                      alt="mix"
                      className="w-10 h-10"
                    />
                    <span className="px-2 text-center text-black">Mix (Veg + Non-Veg)</span>
                  </label>
                </div>
              </div>

              <span className="text-center text-[#656565]">
                A variety of balanced, chef-prepared meals with clean
                ingredients to fit any lifestyle.
              </span>
            </div>}

            {/* // step 2 */}
            {currentStep === 2 && <div className="flex flex-col gap-6 items-center p-6">
              <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                  Choose your preferences
              </h3>
              {/* <span className="text-[#656565] text-center">
                Your preferences help us show you the most relevant recipes
                first. You&apos;ll still have access to all recipes each week!
              </span> */}

              {/* Updated select buttons */}
              <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                {/* Veg */}
                <div className="relative">
                  <input
                    type="checkbox"
                    id="veg"
                    {...register("yourPreference")}
                    value="Chef’s Choice"
                    className="hidden peer cursor-pointer"
                  />
                  <label
                    htmlFor="veg"
                    className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <div className="bg-[#EE9992] p-[6px] rounded-full">
                      <img
                        src="\icons\main\heart.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="px-2 text-center text-black">Chef’s <br/> Choice</span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="checkbox"
                    id="2"
                    {...register("yourPreference")}
                    value="Protein Plus"
                    className="hidden peer cursor-pointer "
                  />
                  <label
                    htmlFor="2"
                    className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <div className="bg-[#C37A47] p-[6px] rounded-full">
                      <img
                        src="\icons\main\arm.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="px-2 text-center text-black">
                      Protein <br/> Plus
                      </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="checkbox"
                    id="3"
                    {...register("yourPreference")}
                    value="Poultry,Fish & Veggie"
                    className="hidden peer cursor-pointer"
                  />
                  <label
                    htmlFor="3"
                    className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <div className="bg-[#6EBC66] p-[6px] rounded-full">
                      <img
                        src="\icons\main\veggie.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="px-2 text-center text-black">Poultry,Fish <br/>
                    & Veggie</span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="checkbox"
                    id="4"
                    {...register("yourPreference")}
                    value="Calorie Smart"
                    className="hidden peer cursor-pointer"
                  />
                  <label
                    htmlFor="4"
                    className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <div className="bg-[#61E1FC] p-[6px] rounded-full">
                      <img
                        src="\icons\main\calorie.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="px-2 text-center text-black">
                    Calorie <br/> Smart
                      </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="checkbox"
                    id="5"
                    {...register("yourPreference")}
                    value="Keto"
                    className="hidden peer cursor-pointer"
                  />
                  <label
                    htmlFor="5"
                    className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <div className="bg-[#F5C90A] p-[6px] rounded-full">
                      <img
                        src="\icons\main\keto.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="px-2 text-center text-black">
                    Keto
                    </span>
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="checkbox"
                    id="6"
                    {...register("yourPreference")}
                    value="GPL-1 Balance"
                    className="hidden peer cursor-pointer"
                  />
                  <label
                    htmlFor="6"
                    className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
        peer-checked:border-[#BF1C15] peer-checked:border-2"
                  >
                    <div className="bg-[#BC6CBC] p-[6px] rounded-full">
                      <img
                        src="\icons\main\gpl.svg"
                        alt="veg"
                        className="w-10 h-10"
                      />
                    </div>
                    <span className="px-2 text-center text-black">
                    GPL-1 <br/> Balance
                    </span>
                  </label>
                </div>

                
              </div>

              <span className="text-center text-[#656565]">
                A variety of balanced, chef-prepared meals with clean
                ingredients to fit any lifestyle.
              </span>
            </div>}

            {/* Step 3*/}
            {currentStep === 3 && <div className="flex w-full flex-col gap-6 items-center p-6">
              {/* select meals */}
              <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                Select meals per week
              </h3>
              {/* select option container */}
              <div className="flex flex-col items-center w-full max-w-xl">
                <span className="text-black">Meals per week</span>
                {/* option buttons */}
                <div className="grid w-full grid-cols-1 grid-rows-2 gap-3 p-6 sm:grid-cols-2 md:grid-cols-3">
                  <div className="relative">
                    <input
                      type="radio"
                      {...register("mealsPerWeek")}
                      id="option-1"
                      value="6"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="option-1"
                      className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                    >
                      6
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      {...register("mealsPerWeek")}
                      id="option-2"
                      value="8"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="option-2"
                      className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                    >
                      8
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      {...register("mealsPerWeek")}
                      id="option-3"
                      value="10"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="option-3"
                      className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                    >
                      10
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      {...register("mealsPerWeek")}
                      id="option-4"
                      value="12"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="option-4"
                      className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                    >
                      12
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      {...register("mealsPerWeek")}
                      id="option-5"
                      value="14"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="option-5"
                      className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                    >
                      14
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="radio"
                      {...register("mealsPerWeek")}
                      id="option-6"
                      value="18"
                      className="hidden peer"
                    />
                    <label
                      htmlFor="option-6"
                      className="max-w-[128px] bg-white w-full border border-[#FF0000] text-black text-center min-h-12 flex items-center justify-center text-lg font-semibold rounded-md cursor-pointer transition-all peer-checked:border-[5px]"
                    >
                      18
                    </label>
                  </div>
                </div>
              </div>
              {/* chef's choice container */}
              <div className="flex flex-col w-full gap-4 px-3 bg-white border border-gray-300 rounded-md">
                
                <div className="flex justify-between w-full px-3 py-6">
                  <div className="flex flex-col gap-3">
                    <h4 className="font-semibold text-black">
                      Chef&apos;s Choice
                    </h4>
                    <span className="text-black">{selectedMeals} meals per week</span>
                  </div>
                  {selectedMeals === "10" && (
                    <div className="flex items-center h-6 gap-2 p-3 bg-red-200 rounded-full">
                      <img
                        src="https://cdn-icons-png.flaticon.com/128/9484/9484251.png"
                        alt="heart"
                        className="w-4 h-4"
                      />
                      <span className="text-red-800">Most Popular</span>
                    </div>
                  )}
                </div>
                {/* border */}
                <div className="px-3 border border-gray-300"></div>
                
                <div className="flex flex-col items-center w-full ">
                  <div className="flex justify-between w-full px-3">
                    <span className="text-lg text-black">Box price</span>
                    <span className="text-black text-md">
                      ₹{price.boxPrice}
                    </span>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <span className="text-lg text-black">
                      Price per serving
                    </span>
                    <span className="text-black text-md">
                    ₹{price.perServing}
                    </span>
                  </div>
                  <div className="flex justify-between w-full px-3">
                    <span className="text-lg text-black">Shipping</span>
                    <span className="text-black text-md">+ $9.99</span>
                  </div>
                  <div className="flex justify-between bg-[#d7d7d2] py-3 -mx-3 w-[calc(100%+1.5rem)] px-6 ">
                    <span className="text-lg font-semibold text-black">
                      First box total
                    </span>
                    <span className="font-semibold text-black text-md">
                    ₹{price.total}
                    </span>
                    <input
                      type="hidden"
                      {...register("totalPrice")}
                      value={price.total}
                    />
                  </div>
                </div>
              </div>
            </div>}
          </div>

          {currentStep >= 3 && <button
            type="submit"
            className={`bg-[#BF1C15] font-medium text-[19px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md ${
              !selectedPreference ||
              (selectedPreference.length === 0 && "bg-gray-400")
            }`}
            disabled={!selectedPreference || selectedPreference.length === 0}
          >
            Place Order
          </button>}
          {currentStep < 3 && <button
            type="button"
            onClick={()=> setCurrentStep(()=> currentStep + 1)}
            className={`bg-[#BF1C15] font-medium text-[19px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md `}
            // disabled={!selectedPreference || selectedPreference.length === 0}
          >
            Next Step
          </button>}
        </form>
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
        <form className="flex gap-3 max-w-[582px] w-full bg-white py-6 px-10 items-center justify-center rounded-md">
          <input
            type="text"
            className="w-full max-w-[337px] border border-gray-300 p-3"
            placeholder="Enter Promo Code"
            required
          />
          <button
            type="submit"
            className="bg-[#1A5614] font-bold text-[16px] leading-[24px] w-full max-w-[150px] p-3 text-white rounded-md"
          >
            Apply
          </button>
        </form>
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

export default Page;
