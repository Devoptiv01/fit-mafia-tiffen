"use client";
import Carousel from "@/components/main/Carousel";
import { useForm } from "react-hook-form";
// import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import axios from "axios";
import Stepper from "@/components/main/Stepper";
import { ChevronDownIcon } from "lucide-react";

type Inputs = {
  preference: string;
  yourPreference: string;
  mealsPerWeek: string;
  promoCode?: string;
  totalPrice: number;
  address: {
    firstName: string;
    lastName: string;
    street: string;
    addressLine2: string;
    city: string;
    province: string;
    postalCode: string;
    phoneNumber: number;
    deliveryInstructions: string;
  };
};

const Page = () => {
  // const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [currentFaq, setCurrentFaq] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<Inputs>({
    defaultValues: {
      preference: "Veg",
      yourPreference: "Alpha",
      mealsPerWeek: "10",
    },
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

  const handleFaq = (e: number) => {
    setCurrentFaq((prev) => (prev === e ? 0 : e));
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

  const preferences = [
    {
      label: "Alpha",
      price: 350,
    },
    {
      label: "Avengers",
      price: 320,
    },
    {
      label: "Gladiator",
      price: 320,
    },
    {
      label: "Hustler",
      price: 250,
    },
    {
      label: "Spartans",
      price: 375,
    },
    {
      label: "Warrior",
      price: 300,
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

  // const steps = [
  //   { title: 'Food Preference', description: 'Desc for step one' },
  //   { title: 'Step Two', description: 'Desc for step two' },
  //   { title: 'Step Three', description: 'Desc for step three' },
  // ];

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
            {currentStep === 1 && (
              <div className="flex flex-col gap-6 items-center p-6">
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
                      type="radio"
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
                      type="radio"
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
                      <span className="px-2 text-center text-black">
                        Non-Veg
                      </span>
                    </label>
                  </div>

                  {/* Mix */}
                  <div className="relative">
                    <input
                      type="radio"
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
                      <span className="px-2 text-center text-black">
                        Mix (Veg + Non-Veg)
                      </span>
                    </label>
                  </div>
                </div>

                <span className="text-center text-[#656565]">
                  A variety of balanced, chef-prepared meals with clean
                  ingredients to fit any lifestyle.
                </span>
              </div>
            )}

            {/* // step 2 */}
            {currentStep === 2 && (
              <div className="flex flex-col gap-6 items-center p-6">
                <h3 className="flex justify-center text-2xl font-bold text-center text-black font-Arial">
                  Choose your preferences
                </h3>
                {/* <span className="text-[#656565] text-center">
                Your preferences help us show you the most relevant recipes
                first. You&apos;ll still have access to all recipes each week!
              </span> */}

                {/* Updated select buttons */}
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-3">
                  {preferences.map((pref) => (
                    <div key={pref.label} className="relative">
                      <input
                        type="radio"
                        id={pref.label}
                        {...register("yourPreference")}
                        value={pref.label}
                        className="hidden peer cursor-pointer"
                      />
                      <label
                        htmlFor={pref.label}
                        className="w-full h-[154px] bg-white border border-gray-300 rounded-md flex flex-col items-center justify-center px-3 gap-3 cursor-pointer transition-all 
                  peer-checked:border-[#BF1C15] peer-checked:border-2"
                      >
                        {/* <div
                          className="p-[6px] rounded-full"
                          style={{ backgroundColor: pref.bgColor }}
                        >
                          <img
                            src={pref.icon}
                            alt={pref.value}
                            className="w-10 h-10"
                          />
                        </div> */}
                        <div className="">
                          <h4 className="px- 2 text-center text-black font-medium tracking-wider text-2xl">
                            {pref.label}
                          </h4>
                          <h4 className="px-2 text-center text-black font-semibold">
                            ${pref.price || 350}
                          </h4>
                        </div>
                      </label>
                    </div>
                  ))}
                </div>

                <span className="text-center text-[#656565]">
                  A variety of balanced, chef-prepared meals with clean
                  ingredients to fit any lifestyle.
                </span>
              </div>
            )}

            {/* Step 3*/}
            {currentStep === 3 && (
              <div className="flex w-full flex-col gap-6 items-center p-6">
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
                      <span className="text-black">
                        {selectedMeals} meals per week
                      </span>
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
              </div>
            )}

            {/* // step 4 */}
            {currentStep === 4 && ( <div  className="w-full max-w-[682px] p-6 mb-6 h-auto bg-white rounded-lg shadow-md lg:w-2/3 lg:mb-0"
        >
          <h2 className="mb-4 text-2xl font-bold text-black">
            Delivery Address
          </h2>
          <div className="flex flex-col gap-6">
            {/* name section */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="first-name"
                  type="text"
                  placeholder=" First name *"
                  {...register("address.firstName", {
                    required: "First Name is required",
                  })}
                />
                {errors.address?.firstName && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.address.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="last-name"
                  type="text"
                  placeholder="Last name *"
                  {...register("address.lastName", {
                    required: "Last Name is required",
                  })}
                />
                {errors.address?.lastName && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.address.lastName.message}
                  </p>
                )}
              </div>
            </div>
            {/* address section 1 */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="street"
                  type="text"
                  placeholder=" Street *"
                  {...register("address.street", {
                    required: "Street is required",
                  })}
                />
                {errors.address?.street && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.address.street.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="address-line-2"
                  type="text"
                  placeholder=" Address line 2"
                  {...register("address.addressLine2")}
                />
              </div>
            </div>
            {/* address section 2 */}
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-3">
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="city"
                  type="text"
                  placeholder=" City *"
                  {...register("address.city", {
                    required: "City is required",
                  })}
                />
                {errors.address?.city && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.address.city.message}
                  </p>
                )}
              </div>
              <div>
                <select
                  className="block outline-none w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="province"
                  {...register("address.province", {
                    required: "Province is required",
                  })}
                >
                  <option value="province">Province *</option>
                </select>
                {errors.address?.province && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.address.province.message}
                  </p>
                )}
              </div>
              <div>
                <input
                  className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black"
                  id="postal-code"
                  type="text"
                  placeholder="Postal Code *"
                  {...register("address.postalCode", {
                    required: "Postal code is required",
                  })}
                />
                {errors.address?.postalCode && (
                  <p className="text-red-500 text-sm mb-2">
                    {errors.address.postalCode.message}
                  </p>
                )}
              </div>
            </div>
            {/* phone number */}
            <div className="mb-4">
              <input
                className="block w-full p-2 mt-1 border border-gray-300 rounded-md shadow-sm text-black "
                id="phone-number"
                type="text"
                placeholder="Phone Number *"
                {...register("address.phoneNumber", {
                  required: "Phone Number is required",
                })}
              />
              {errors.address?.phoneNumber && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.address.phoneNumber.message}
                </p>
              )}
            </div>
            {/* delivery instructions */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Enter Delivery Instruction
              </label>
              <select
                className="w-full max-w-screen outline-none p-3 mt-1  border border-gray-300 rounded-md shadow-sm text-black"
                id="province"
                {...register("address.deliveryInstructions", {
                  required: "Delivery Instructions are required",
                })}
              >
                <div className="w-32">
                <option className="w-20" value="Leave at front door">Leave at front door</option>
                <option className="w-20" value="Leave at back door">Leave at back door</option>
                <option className="w-20" value="Others">Others</option>
                </div>
              </select>
              {errors.address?.deliveryInstructions && (
                <p className="text-red-500 text-sm mb-2">
                  {errors.address.deliveryInstructions.message}
                </p>
              )}
            </div>
            {/* <button
              className="w-full px-4 py-2 font-bold text-white rounded-md bg-fit-red/50"
              type="submit"
            >
              Next
            </button> */}
          </div>
        </div>)}
          </div>

          {currentStep >= 4 && (
            <button
              type="submit"
              className={`bg-[#BF1C15] font-medium text-[19px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md ${
                !selectedPreference ||
                (selectedPreference.length === 0 && "bg-gray-400")
              }`}
              disabled={!selectedPreference || selectedPreference.length === 0}
            >
              Place Order
            </button>
          )}
          {currentStep < 4 && (
            <button
              type="button"
              onClick={() => setCurrentStep(() => currentStep + 1)}
              className={`bg-[#BF1C15] font-medium text-[19px] leading-[24px] w-full max-w-[307px] p-3 text-white rounded-md `}
              // disabled={!selectedPreference || selectedPreference.length === 0}
            >
              Next Step
            </button>
          )}
        </form>
      </div>

      {/* flexible menu */}
      <div className="flex flex-col gap-12 w-full p-5 sm:p-12 min-h-[563px] bg-[#f1f1ea] items-center">
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
        <form className="flex  flex-wrap gap-3 max-w-[582px] w-full bg-white py-6 px-10 items-center justify-center rounded-md">
          <input
            type="text"
            className="w-full max-w-[337px] outline-none rounded-md border border-gray-300 p-3"
            placeholder="Enter Promo Code"
            required
          />
          <button
            type="submit"
            className="bg-fit-red/80 font-bold text-[16px] leading-[24px] w-full max-w-[150px] p-3 text-white rounded-md"
          >
            Apply
          </button>
        </form>
      </div>

      {/* common questions */}
      <div className="flex flex-col items-center w-full gap-6 p-5 sm:p-12 bg-white">
        <h2 className="flex justify-center text-4xl font-bold text-center text-black font-Arial">
          Common Questions
        </h2>
        <div className="flex flex-col max-w-[1144px] gap-6 w-full font-medium text-black text-base tracking-wide">
          <button
            onClick={() => handleFaq(1)}
            className={`flex justify-between w-full rounded-lg duration-300 hover:text-white hover:bg-red-700/90 group p-3     ${
              currentFaq === 1 && " bg-red-700/90 text-white"
            }`}
          >
            <span className="group-hover:text-white">
              What are the benefits of Fit Mafia?
            </span>
            {/* <img
              src="https://cdn-icons-png.flaticon.com/128/14035/14035521.png"
              alt="downArrow"
              className="w-6 h-6"
            /> */}
            <ChevronDownIcon />
          </button>
          {currentFaq === 1 && (
            <div className="w-full h-fit p-3 border-red-700 border rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              facere odit natus doloribus. Nostrum qui optio architecto? Ipsa
              est natus molestiae pariatur reprehenderit soluta porro vel. Optio
              consequuntur enim ipsum, maiores repudiandae commodi. Neque fugit
              molestiae modi aspernatur similique?
            </div>
          )}

          <button
            onClick={() => handleFaq(2)}
            className={`flex justify-between w-full rounded-lg duration-300 hover:text-white hover:bg-red-700/90 group p-3    ${
              currentFaq === 2 && " bg-red-700/90 text-white"
            }`}
          >
            <span className="group-hover:text-white">
              How long do meals last?
            </span>
            <ChevronDownIcon />
          </button>
          {currentFaq === 2 && (
            <div className="w-full h-fit p-3 border-red-700 border rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              facere odit natus doloribus. Nostrum qui optio architecto? Ipsa
              est natus molestiae pariatur reprehenderit soluta porro vel. Optio
              consequuntur enim ipsum, maiores repudiandae commodi. Neque fugit
              molestiae modi aspernatur similique?
            </div>
          )}

          <button
            onClick={() => handleFaq(3)}
            className={`flex justify-between w-full rounded-lg duration-300 hover:text-white hover:bg-red-700/90 group p-3    ${
              currentFaq === 3 && " bg-red-700/90 text-white"
            }`}
          >
            <span className="group-hover:text-white">
              Which delivery carriers do you use?
            </span>
            <ChevronDownIcon />
          </button>
          {currentFaq === 3 && (
            <div className="w-full h-fit p-3 border-red-700 border rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              facere odit natus doloribus. Nostrum qui optio architecto? Ipsa
              est natus molestiae pariatur reprehenderit soluta porro vel. Optio
              consequuntur enim ipsum, maiores repudiandae commodi. Neque fugit
              molestiae modi aspernatur similique?
            </div>
          )}

          <button
            onClick={() => handleFaq(4)}
            className={`flex justify-between w-full rounded-lg duration-300 hover:text-white hover:bg-red-700/90 group p-3    ${
              currentFaq === 4 && " bg-red-700/90 text-white"
            }`}
          >
            <span className="group-hover:text-white ">
              Do you offer ketogenic meals?
            </span>
            <ChevronDownIcon />
          </button>
          {currentFaq === 4 && (
            <div className="w-full h-fit p-3 border-red-700 border rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              facere odit natus doloribus. Nostrum qui optio architecto? Ipsa
              est natus molestiae pariatur reprehenderit soluta porro vel. Optio
              consequuntur enim ipsum, maiores repudiandae commodi. Neque fugit
              molestiae modi aspernatur similique?
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
