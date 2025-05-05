import GetBtn from "@/components/buttons/GetBtn";
import Image from "next/image";
import Carousel from "@/components/main/Carousel";
import Link from "next/link";

const page = () => {
  const mealsData = [
    {
      title: "Indian Thali",
      description:
        "A wholesome platter featuring a variety of traditional Indian dishes, offering a balanced and flavorful meal.",
      imageUrl: "images/indian-thali.avif",
    },
    {
      title: "Chicken Skewers",
      description:
        "Succulent pieces of chicken marinated in spices and grilled to perfection, served on skewers.",
      imageUrl: "/images/chicken-skewers.avif",
    },
    {
      title: "Light Indian Bites",
      description:
        "Balanced and wholesome Indian meals under 550 calories — guilt-free yet satisfying.",
      imageUrl: "/images/pani-puri.avif",
    },
    {
      title: "Veggie Delights",
      description:
        "Pure veg Indian meals featuring seasonal veggies, lentils, and rich flavors.",
      imageUrl: "/images/salad.avif",
    },
    {
      title: "Indian Thali",
      description:
        "A wholesome platter featuring a variety of traditional Indian dishes, offering a balanced and flavorful meal.",
      imageUrl: "images/indian-thali.avif",
    },
    {
      title: "Light Indian Bites",
      description:
        "Balanced and wholesome Indian meals under 550 calories — guilt-free yet satisfying.",
      imageUrl: "/images/pani-puri.avif",
    },
  ];

  const addonItems = [
    {
      title: "Aam Panna",
      description:
        "A refreshing summer drink made from raw mangoes and spices to cool you down.",
      imageUrl: "/images/fresh-mango-mango-juice-glass.avif",
    },
    {
      title: "Masala Chaas",
      description:
        "Traditional buttermilk spiced with cumin, ginger, and coriander for digestion.",
      imageUrl: "/images/lassi.avif",
    },
    {
      title: "Thandai",
      description:
        "A festive North Indian drink made with milk, saffron, almonds, and spices.",
      imageUrl: "/images/glass-vanilla-milkshake.avif",
    },
    {
      title: "Kesar Badam Milk",
      description:
        "Sweet, creamy milk infused with saffron and almonds, served warm or cold.",
      imageUrl: "/images/turmeric-golden-milk.avif",
    },
    {
      title: "Aam Panna",
      description:
        "A refreshing summer drink made from raw mangoes and spices to cool you down.",
      imageUrl: "/images/fresh-mango-mango-juice-glass.avif",
    },
    {
      title: "Thandai",
      description:
        "A festive North Indian drink made with milk, saffron, almonds, and spices.",
      imageUrl: "/images/glass-vanilla-milkshake.avif",
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-6 bg-white">
      {/* how Fit Mafia works */}
      <div className="w-full flex flex-col gap-8 h-auto min-h-[450px] bg-[url('/temp/Homepage_footerTablet.avif')] bg-cover bg-center justify-center items-center px-6 md:px-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-black font-Arial">
          How Our Tiffin Service Works
        </h1>
        <span className="font-normal text-black text-base md:text-[20px] md:leading-[32px] font-Helvetica lg:w-[40%] text-center">
          Say goodbye to daily cooking stress! Enjoy freshly prepared, homely
          Indian meals delivered right to your doorstep—no prep needed.
        </span>
        <div className="flex flex-col items-center gap-6">
          {/* <GetBtn content="" /> */}
          <Link
            href={''}
            className="bg-fit-red px-3 py-2 md:px-6 md:py-3 rounded-lg font-semibold text-white cursor-pointer "
          >
            Get $75 Off Your Next 4 Boxes
          </Link>
          <span className="font-normal text-black text-[16px] leading-[20px] font-Helvetica text-center">
            Pause or cancel anytime
          </span>
        </div>
      </div>

      {/* Fit Mafia meals in 3 steps */}
      <div className="flex flex-col min-h-[632px] h-auto items-center gap-12">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center">
          Our Service in 3 Steps
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
          <div className="flex-[0.5] flex flex-col gap-3 px-6 md:px-12">
            {/* step 1 */}
            <div className="flex gap-4">
              <img
                src="/icons/main/fa_plated_meal-318x.png"
                alt="foodIcon"
                className="w-10 h-10"
              />
              <div className="flex flex-col gap-1">
                <span className="font-bold text-black text-[20px] leading-[32px]">
                  1.Select Your Meal Plan
                </span>
                <span className="font-normal text-black text-[20px] leading-[32px]">
                  Choose from a range of meal types—Veg, Jain, High-Protein, or
                  Balanced Thali—based on your daily needs.
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
                  2.Pick Your Weekly Meals
                </span>
                <span className="font-normal text-black text-[20px] leading-[32px]">
                  Browse our weekly changing menu filled with regional Indian
                  favourites and healthy twists.
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
                  3.We Deliver, You Enjoy
                </span>
                <span className="font-normal text-black text-[20px] leading-[32px]">
                  Our chefs cook fresh each morning and your meals arrive hot
                  and ready—just open and enjoy!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* clean eating made easy */}
      <div className="flex flex-col min-h-full h-auto pt-10 pb-16 bg-[#f1f1ea] gap-12 items-center">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
          Clean Eating, Made Easy
        </h2>
        <div className="grid grid-cols-1 gap-12 px-6 md:px-12 sm:grid-cols-2 md:grid-cols-3 xl:gap-16">
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
                Customised to Your Needs
              </h4>
              <span className="text-center text-black">
                Whether you&quot;re a student, working professional, or on a
                fitness journey, our meals suit your lifestyle.
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
                Heat & Eat in Minutes
              </h4>
              <span className="text-center text-black">
                Our neatly packed meals are ready to eat—no cooking, cleaning,
                or hassle involved.
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
                Authentic & Fresh
              </h4>
              <span className="text-center text-black">
                Handpicked seasonal ingredients, prepared fresh every morning by
                expert chefs.
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
                Never Frozen, Always Fresh
              </h4>
              <span className="text-center text-black">
                Meals are prepared daily and never stored. You receive your
                tiffin just like mom would make it.
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
                Zero Cooking Stress
              </h4>
              <span className="text-center text-black">
                Skip grocery runs and messy kitchens. Just open your tiffin and
                dig in.
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
                Healthy Extras Available
              </h4>
              <span className="text-center text-black">
                Add fresh juices, chaach, salads, or protein snacks to your meal
                plans.
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
      <div className="flex flex-col min-h-[520px] w-full h-auto gap-6 items-center px-6 md:px-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
            Explore Our Tiffin Options
          </h2>
          <span className="text-black text-center max-w-[817px] w-auto">
            Enjoy freshly cooked Indian meals prepared by expert home chefs.
            Choose from over 30 rotating options every week – including North
            Indian, South Indian, Jain, High-Protein, and Low-Calorie thalis.
            Each meal is crafted to bring the taste of home to your plate.
          </span>
        </div>
        <Carousel items={mealsData} />
      </div>

      {/* add ones */}
      <div className="flex flex-col min-h-[580px] h-auto gap-6 items-center bg-[#f1f1ea] pt-6 pb-12 px-12">
        <div className="flex flex-col items-center w-full">
          <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
            Add-ons To Complete Your Meal
          </h2>
          <span className="text-black text-center max-w-[817px] w-auto">
            Complement your tiffin with healthy extras – like fresh chaas,
            seasonal fruit bowls, roasted makhanas, laddoos, and protein-rich
            snacks. Find all these delicious add-ons in our Add-Ons section to
            keep your meals balanced and fulfilling.
          </span>
        </div>
        <Carousel items={addonItems} />
      </div>

      {/* learn more */}
      <div className="flex flex-col min-h-fit pb-5 md:pb-10 h-auto items-center px-12">
        <h2 className="text-black font-Arial text-4xl font-bold text-center h-[100px] flex justify-center items-center">
          Learn More About us
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
                Select the meals and add-ons you want from our menu. We&apos;ll
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
                Absolutely! You can select your Fit Mafia meals each week to
                match your preferences. Plus, our plans are flexible, allowing
                you to change your meals based on your current lifestyle.
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
                How does Fit Mafia handle allergies or dietary restrictions?
              </h4>
              <span className="font-normal text-black">
                Food safety is a top priority for us. All Fit Mafia meals come
                with clear allergen declarations on their packaging. We advise
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
