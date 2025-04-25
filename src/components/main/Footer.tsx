import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const linkAccount = [
    { url: "", text: "Weekly menu" },
    { url: "", text: "Our Plans" },
    { url: "", text: "How It Works" },
    { url: "", text: "Terms & Conditions" },
    { url: "", text: "Privacy Policy" },
    { url: "", text: "FAQs" },
  ];

  const linkShop = [
    { url: "", text: "Search" },
    { url: "", text: "Meal Plans" },
    { url: "", text: "All Tiffins" },
  ];
  return (
    <div className="w-full flex flex-col bg-white px-4 md:px-12 pt-12 items-center">
      <div className=" w-full flex flex-col lg:flex-row max-lg:items-center justify-center gap-4">
        {/* links section */}
        <div className="max-w-[805px] pb-5 w-full h-full flex gap-3 justify-center lg:justify-start">
          {/* Factor */}
          <div className="max-w-[200px] w-full h-full flex flex-col gap-6">
            <span className="font-bold text-[16px] leading-[24px] text-black">
              Fit Mafia
            </span>
            <div className="flex flex-col gap-3">
              {linkAccount.map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.url}
                    className="font-normal text-[14px] leading-[20px] text-black hover:text-fit-red"
                  >
                    {e.text}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Shop */}
          <div className="max-w-[200px] w-full h-full flex flex-col gap-6">
            <span className="font-bold text-[16px] leading-[24px] text-black">
              Shop
            </span>
            <div className="flex flex-col gap-3">
              {linkShop.map((e, i) => {
                return (
                  <Link
                    key={i}
                    href={e.url}
                    className="font-normal text-[14px] leading-[20px] text-black hover:text-fit-red"
                  >
                    {e.text}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        {/* image section */}
        <div className="w-full max-w-[450px] h-full flex flex-col gap-5 ">
          <h3 className="text-2xl font-bold">Subscribe to Our Newsletter and Get 20% Off</h3>
          <p>
            Carefully prepared homemade meals using fresh, high-quality
            ingredients and traditional recipes to deliver comforting flavors
            and satisfying daily tiffins.
          </p>
          <div className="w-full h-10 border border-black rounded-lg overflow-hidden shadow-none flex text-white">
            <input
              type="text"
              placeholder="Enter email address..."
              className="outline-none w-full sm:w-2/3 px-2 py-1 m-1 shadow-none text-black"
            />
            <button className="bg-black text-sm sm:text-base flex justify-center items-center gap-1 max-h-10 rounded-r-lg h-full w-1/3 px-1">Subscription<ArrowUpRight/></button>
          </div>
        </div>
      </div>

      <div className="w-full flex items-center justify-center p-3">
        <span className="font-semibold text-sm text-black whitespace-nowrap">
          &copy; {new Date().getFullYear()} Fit Mafia
        </span>
      </div>
    </div>
  );
};

export default Footer;
