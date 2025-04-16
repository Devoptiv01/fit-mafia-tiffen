import GetBtn from "@/components/buttons/GetBtn";
import Image from "next/image";
import Carousel from "@/components/main/Carousel";

const page = () => {

  const mealsData = [
    {
      title: "Calorie Smart",
      description: "Perfectly portioned meals with 550 calories or less per serving",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
    {
      title: "Keto",
      description: "Keto-friendly meals with 15 grams of net carbs or less",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
    {
      title: "Vegan + Veggie",
      description: "Wholesome, meat-free meals that make veggies the hero",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
    {
      title: "Protein Plus",
      description: "Meals with 30 grams of protein or more for active lifestyles",
      imageUrl: "/temp/Calorie-Smart.avif",
    },
  ];

  const addonItems = [
    {
      title: "Juices",
      description: "Cold-pressed and refreshing.",
      imageUrl: "/temp/addons.avif",
    },
    {
      title: "Bite Sized Treats",
      description: "Tasty, anytime snacks.",
      imageUrl: "/temp/addons.avif",
    },
    {
      title: "Sweet Treats",
      description: "Decadent chocolate bars.",
      imageUrl: "/temp/addons.avif",
    },
    {
      title: "Wellness Shots",
      description: "Ready-to-drink wellness shots.",
      imageUrl: "/temp/addons.avif",
    },
  ];
  
  return (
    <div className="flex flex-col w-full h-full gap-6 bg-white">
      {/* how factor works */}
      <div className="w-full flex flex-col gap-8 h-auto min-h-[450px] bg-[url('/temp/Homepage_footerTablet.avif')] bg-cover bg-center justify-center items-center px-12">
        <h1 className="text-5xl font-bold text-center text-black font-Arial">
          How Factor Works
        </h1>
        <span className="font-normal text-black text-[20px] leading-[32px] font-Helvetica lg:w-[40%] text-center">
          Skip the prep and cooking with dietitian-approved meals made by our
          chefs, delivered right to your door.
        </span>
        <div className="flex flex-col items-center gap-6">
          <GetBtn content="Get $75 Off Your Next 4 Boxes" />
          <span className="font-normal text-black text-[16px] leading-[20px] font-Helvetica text-center">
            Pause or cancel anytime
          </span>
        </div>
      </div>

      {/* factor meals in 3 steps */}
      <div className="flex flex-col min-h-[632px] h-auto items-center gap-12">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center">
          Factor Meals in 3 Steps
        </h2>
        <div className="flex md:flex-row flex-col max-w-[1140px] w-full gap-6">
          <div className="flex flex-[0.5] justify-center h-auto items-center">
            <Image
              src="/temp/NutritionIngredient.avif"
              alt="foodImage"
              width={342}
              height={342}
            />
          </div>
          <div className="flex-[0.5] flex flex-col gap-3 px-12">
            {/* step 1 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  1.Select Your Preference
                </span>
                <span className="font-normal text-black text-[20px] leading-[32px]">
                  Choose from 4 delicious meal plans tailored to your needs,
                  ensuring there's something for every taste and dietary
                  lifestyle.
                </span>
              </div>
            </div>
            {/* step 2 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  2.Pick Your Ready-made Meals
                </span>
                <span className="font-normal text-black text-[20px] leading-[32px]">
                  Choose from a weekly menu of 30+ dietitian-designed meals and
                  add-on options like juices, wellness shots and snacks.
                </span>
              </div>
            </div>
            {/* step 3 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  3.Get Your Delivery
                </span>
                <span className="font-normal text-black text-[20px] leading-[32px]">
                  No prep, no mess. Our expert chefs use premium ingredients to
                  prepare every meal, and we deliver them fully cooked right to
                  your doorstep—ready to heat and enjoy in just 2 minutes.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* clean eating made easy */}
      <div className="flex flex-col min-h-[875px] h-auto bg-[#f1f1ea] gap-12 items-center">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
          Clean Eating, Made Easy
        </h2>
        <div className="grid grid-cols-1 gap-12 px-12 sm:grid-cols-2 md:grid-cols-3 xl:gap-16">
          {/* card 1 */}
          <div className="max-w-[348px] w-auto flex flex-col items-center gap-6">
            <div className="">
              <img
                src="/temp/Weekly-meals.png"
                alt="temp"
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-center text-black font-Arial">
                Meals That Fit Your Lifestyle
              </h4>
              <span className="text-center text-black">
                We make eating well enjoyable with chef-crafted,
                dietitian-approved meals. Meal options include choices like
                Keto, Calorie Smart, Protein Plus, and Vegan + Veggie.
              </span>
            </div>
          </div>
          {/* card 2 */}
          <div className="max-w-[348px] w-auto flex flex-col items-center gap-6">
            <div className="">
              <img
                src="/temp/Weekly-meals.png"
                alt="temp"
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-center text-black font-Arial">
                Heat & Eat in 2 Minutes
              </h4>
              <span className="text-center text-black">
                Forget the hassle of meal prep. We handle everything—from
                shopping to cooking—so you can focus on eating better with no
                extra work involved.
              </span>
            </div>
          </div>
          {/* card 3 */}
          <div className="max-w-[348px] w-auto flex flex-col items-center gap-6">
            <div className="">
              <img
                src="/temp/Weekly-meals.png"
                alt="temp"
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-center text-black font-Arial">
                Chef-Prepared, Dietitian Approved
              </h4>
              <span className="text-center text-black">
                Your meals are made using fresh, natural ingredients,
                prioritising seasonal produce where possible to ensure maximum
                nutrition, taste and flavour.
              </span>
            </div>
          </div>
          {/* card 4 */}
          <div className="max-w-[348px] w-auto flex flex-col items-center gap-6">
            <div className="">
              <img
                src="/temp/Weekly-meals.png"
                alt="temp"
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-center text-black font-Arial">
                Fresh, Never Frozen Meals
              </h4>
              <span className="text-center text-black">
                All Factor meals are prepared fresh using the best ingredients
                and delivered straight to you. Easiest way to eat healthy:
                complete nutritionally approved meals delivered
              </span>
            </div>
          </div>
          {/* card 5 */}
          <div className="max-w-[348px] w-auto flex flex-col items-center gap-6">
            <div className="">
              <img
                src="/temp/Weekly-meals.png"
                alt="temp"
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-center text-black font-Arial">
                No Prep, No Mess
              </h4>
              <span className="text-center text-black">
                Fresh, Ready-Made meals delivered to your doorstep. No need to
                shop, chop, cook or clean, our meals provide nutrition and
                convenience
              </span>
            </div>
          </div>
          {/* card 6 */}
          <div className="max-w-[348px] w-auto flex flex-col items-center gap-6">
            <div className="">
              <img
                src="/temp/Weekly-meals.png"
                alt="temp"
                className="h-14 w-14"
              />
            </div>
            <div className="flex flex-col items-center">
              <h4 className="font-bold text-center text-black font-Arial">
                Add-ons and More
              </h4>
              <span className="text-center text-black">
                Discover tasty extras beyond meals to supplement your diet with
                add-ons like cold-pressed juices, wellness shots, snacks, and
                more.
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 ">
          <GetBtn content="Get $75 Off Your Next 4 Boxes" />
          <span className="font-normal text-black text-[16px] leading-[20px] font-Helvetica text-center">
            Pause or cancel anytime
          </span>
        </div>
      </div>

      {/* check out our meals */}
      <div className="flex flex-col min-h-[520px] h-auto gap-6 items-center px-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
            Check Out Our Meals
          </h2>
          <span className="text-black text-center max-w-[817px] w-auto">
            Choose from a new menu of 30+ chef-prepared, dietitian-approved
            meals every week that include keto, Calorie-Smart, vegan + veggie,
            high protein, and more. And don't forget to treat yourself to our
            wide variety of add-ons such as cold pressed juices and high protein
            snacks!
          </span>
        </div>
        <Carousel items={mealsData}/>
      </div>

      {/* add ones */}
      <div className="flex flex-col min-h-[580px] h-auto gap-6 items-center bg-[#f1f1ea] pt-6 pb-12 px-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
            Add-ons For An Extra Boost
          </h2>
          <span className="text-black text-center max-w-[817px] w-auto">
            Stay fueled with add-on items like our refreshing cold-pressed
            juices and protein-packed snacks. Explore all options in the Add-Ons
            section of our menu.
          </span>
        </div>
        <Carousel items={addonItems}/>
      </div>

      {/* learn more */}
      <div className="flex flex-col min-h-[1475px] h-auto items-center px-12">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
          Learn More About Factor Meals
        </h2>
        <div className="flex flex-col max-w-[960px] gap-12">
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                Is there a commitment required?
              </h4>
              <span className="font-normal text-black">
                Not at all! You can skip your weekly delivery, pause, or cancel
                at any time. Just make sure to do so by your weekly cutoff to
                avoid any charges for that week.
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                How do I choose my weekly meals?
              </h4>
              <span className="font-normal text-black">
                Select the meals and add-ons you want from our menu. We'll
                deliver everything directly to your door, hassle-free.
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                Do I need to cook anything?
              </h4>
              <span className="font-normal text-black">
                No cooking needed—our meals are ready for you to heat and enjoy.
                Simply warm them up and dig in!
              </span>
            </div>
          </div>

          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                Can I customize my meal plan?
              </h4>
              <span className="font-normal text-black">
                Absolutely! You can select your Factor meals each week to match
                your preferences. Plus, our plans are flexible, allowing you to
                change your meals based on your current lifestyle.
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                What happens if I’m not home for delivery?
              </h4>
              <span className="font-normal text-black">
                You do not need to be home to receive your meals! We deliver our
                meals in insulated boxes with ice packs that maintain a safe,
                refrigerated temperature for an extended period, ensuring
                freshness. We rigorously test our packaging in all weather
                conditions across Canada.
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                How is my food kept fresh during delivery?
              </h4>
              <span className="font-normal text-black">
                Our meals are shipped in insulated boxes with ice packs that
                maintain a refrigerated temperature to keep your food fresh for
                a long time. We have thoroughly tested our packaging to
                withstand all seasons and climates in Canada. Please note that
                it is normal for the ice packs to be partially melted upon
                arrival, as they release cold air into the box while melting. Be
                sure to transfer the meals to the fridge as soon as you receive
                them to maintain their freshness.
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                How does Factor handle allergies or dietary restrictions?
              </h4>
              <span className="font-normal text-black">
                Food safety is a top priority for us. All Factor meals come with
                clear allergen declarations on their packaging. We advise
                carefully reviewing the individual product packaging for the
                most accurate and up-to-date information regarding ingredients
                and allergens. Additionally, please check the ingredient list on
                our website before selecting meals to ensure they meet your
                dietary needs. Please be aware that our meals are prepared in a
                facility that also processes wheat, milk, soy, eggs, tree nuts,
                peanuts, fish, and shellfish.
              </span>
            </div>
          </div>
          <div className="flex gap-6">
            <img
              src="https://cdn-icons-png.flaticon.com/128/271/271228.png"
              alt="rightArrow"
              className="h-6 "
            />

            <div className="flex flex-col max-h-[148px] gap-3">
              <h4 className="font-semibold text-black">
                Can I skip a week of meals?
              </h4>
              <span className="font-normal text-black">
                No problem! You can easily skip a week (or more) whenever
                necessary. Just make sure to do so by your cutoff: 11:59 pm
                Pacific Time (PT) 5 days prior to your next scheduled delivery.
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* get off */}
      <div className="w-full flex flex-col gap-8 h-auto min-h-[450px] bg-[url('/temp/Homepage_footerTablet.avif')] bg-cover bg-center justify-center items-center px-12">
        <span className="font-normal text-black text-[20px] leading-[32px] font-Helvetica lg:w-[40%] text-center">
          Enjoy fully prepared, dietitian-approved meals delivered straight to
          your home with no long-term commitment. Skip or cancel anytime!
        </span>
        <div className="flex flex-col items-center gap-6">
          <GetBtn content="Get $75 Off Your Next 4 Boxes" />
          <span className="font-normal text-black text-[16px] leading-[20px] font-Helvetica text-center">
            Pause or cancel anytime
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
