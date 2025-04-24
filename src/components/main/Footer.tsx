const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-white px-12 pt-12 items-center">
      <div className=" w-full flex flex-col lg:flex-row md:px-12 px-6 items-center justify-center gap-12">
        {/* links section */}
        <div className="max-w-[805px] min-h-[316px] w-full h-full flex gap-3 justify-center lg:justify-start">
          {/* Factor */}
          <div className="max-w-[200px] w-full h-full flex flex-col gap-6">
            <span className="font-bold text-[16px] leading-[24px] text-black">
              Factor
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Weekly menu
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Our Plans
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                How It Works
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Nutrition Guidance
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Partnership Opportunities
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Factor for Teams
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Careers
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Student & Seniors Discount
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Essential Workers Discount
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Student Beans
              </a>
            </div>
          </div>
          {/* help */}
          <div className="max-w-[200px] w-full h-full flex flex-col gap-6">
            <span className="font-bold text-[16px] leading-[24px] text-black">
              Help
            </span>
            <div className="flex flex-col gap-3">
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Help & FAQ
              </a>
              <a
                href="#"
                className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline"
              >
                Sample of 7 day menu
              </a>
            </div>
          </div>
        </div>
        {/* image section */}
        <div className="w-full max-w-[345px] h-full flex flex-col gap-10 items-center">
          <div className="flex flex-col w-full gap-4">
            <span className="font-bold text-[16px] leading-[24px] text-[#206b19]">
              Download Our App
            </span>
            <span className="font-normal text-[16px] leading-[24px] text-black">
              Manage your deliveries from anywhere, anytime.
            </span>
            <div className="w-full gap-3 flex sm:flex-row flex-col">
              <img
                src="/temp/appstore-badge-en.png"
                alt="appstore"
                className="max-w-30 h-10"
              />
              <img
                src="/temp/playstore-badge-en.png"
                alt="playstore"
                className="max-w-30 h-10"
              />
            </div>
          </div>
          <div className="w-full bg-[#f1f1ea] flex p-4 rounded-md gap-3">
            <div className="max-w-[50px] max-h-[60px] rounded-full overflow-hidden">
              <img
                src="/temp/temp.webp"
                alt="temp"
                className="w-full h-full bg-cover"
              />
            </div>
            <span className="font-normal text-[14px] leading-[24px] text-black">
              *Made in Canada from domestic and imported ingredients.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center p-12 gap-12  min-h-20">
        <div className="w-full max-w-[184px]">
          <span className="font-bold text-[14px] leading-[20px] text-black whitespace-nowrap">
            &copy; 2025 Your Company
          </span>
        </div>
        <div className="w-full max-w-[736px] flex gap-6 md:justify-start justify-center">
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline font-Helvetica"
          >
            Accessibility
          </a>
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline font-Helvetica"
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            className="font-normal text-[14px] leading-[20px] text-[#1a5614] underline font-Helvetica"
          >
            Privacy Policy
          </a>
        </div>
        <div className="w-full max-w-[161px] flex gap-6 items-center ">
          <a href="#">
            <img
              src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png"
              alt="fb"
              className="h-6 w-6"
            />
          </a>
          <a href="">
            <img
              src="https://cdn-icons-png.flaticon.com/128/15707/15707749.png"
              alt="instagram"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
