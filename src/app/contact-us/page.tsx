const Page = () => {
  return (
    <div className="w-full h-full flex flex-col bg-[#f1f1ea]">
      {/* section 1 */}
      <div className="w-full h-full min-h-[300px] bg-[url('/temp/Homepage_footerTablet.avif')] bg-cover bg-center flex justify-center items-center px-3">
        <div className="max-w-[1100px] h-full w-full flex items-center justify-end">
          <div className="max-w-[450px] min-h-[140px] h-full w-full bg-white flex flex-col rounded-2xl px-6 py-4 items-center justify-center gap-3">
            <span className="font-Arial font-bold text-[24px] leading-[28px] text-black">
              Get in Touch
            </span>
            <span className="text-black text-[16px] leading-[24px] text-center">
              Our customer experience team is always on-hand to provide
              solutions and answer questions.
            </span>
          </div>
        </div>
      </div>
      {/* section 2  */}
      <div className="w-full h-full min-h-[426px] md:flex-row flex-col p-6 flex bg-[#f1f1ea] items-center justify-center gap-6">
        <div className="min-h-[314px] max-w-[565px] w-full h-full black flex flex-col px-4 gap-4">
          <h2 className="font-Arial font-bold text-[32px] leading-[38px] text-[#4b4d4c]">
            Have questions?
          </h2>
          <span className="font-Arial font-normal text-[16px] leading-[24px] text-[#4b4d4c]">
            Head to our FAQs page for answers to our most commonly asked
            questions. If you can&apos;t find your answer, connect directly with our
            Customer Care Team!
          </span>
          <span className="font-Arial font-normal text-[16px] leading-[24px] text-[#4b4d4c]">
            Our Team is available by chat or phone (+1 807 790 2770) 24 hours a
            day, 7 days a week.
          </span>
          <div className="w-full p-4 min-h-[81px] bg-white flex items-center gap-3 shadow-md rounded-md">
            <img src="/temp/chat-now.svg" alt="png" />
            <span className="font-Helvetica font-bold text-[16px] leading-[24px] text-black">Ask any question</span>
          </div>
        </div>
        <div className="min-h-[314px] max-w-[471px] w-full h-full overflow-hidden">
            <img src="/temp/ca-contact-us-body-image.jpg" alt="" className="h-full w-full"/>
        </div>
      </div>
      {/* section 3 */}
      <div className="w-full relative min-h-[600px] bg-[url('/temp/ca-footer-banner-lg.jpg')] bg-cover bg-center flex justify-center mt-40 ">
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

export default Page;
