import Footer from "@/components/home/Footer";
import Navbar from "@/components/home/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="mt-16 sm:mt-28 lg:mt-40 lg:flex  w-full gap-14 2xl:gap-20 relative z-20 px-5 sm:px-7 md:px-[40px] xl:px-[72px] pt-10 sm:pt-[20px] pb-[60px]">
        <div className="lg:w-[50%] xl:w-[55%] 2xl:w-[50%]">
          <h3 className="font-semibold text-black text-[18px] sm:text-[22px] lg:text-[20px] xl:text-[24px] ">FEEDBACK</h3>
          <h1 className="text-[#43483F] text-[30px] sm:text-[40px] md:text-[42px] lg:text-[38px] xl:text-[50px] lg:leading-loose mt-[30px] xl:mt-[40px] font-bold">
            “Help us grow better — one feedback at a time.”
          </h1>
          <div className="flex justify-end mt-[30px] sm:mt-[50px]">
            <span className="border rounded-[10px] border-[#406836] text-[#406836] py-[10px] md:py-[12px] px-[20px] md:px-[30px] lg:px-[20px]  2xl:px-[35px] text-[18px] sm:text-[20px] lg:text-[15px] xl:text-[20px]">
              "Your experience matters — let us know.”
            </span>
          </div>
          <div className="flex justify-start mt-[30px] sm:mt-[50px]">
            <span className="border rounded-[10px] border-[#406836] text-[#406836] py-[10px] md:py-[12px] px-[20px] md:px-[30px] lg:px-[20px]  2xl:px-[35px] text-[18px] sm:text-[20px] lg:text-[15px] xl:text-[20px]">
              “Your thoughts shape our journey forward.”
            </span>
          </div>
          <div className="flex justify-end mt-[30px] sm:mt-[50px]">
            <span className="border rounded-[10px] border-[#406836] text-[#406836] py-[10px] md:py-[12px] px-[20px] md:px-[30px] lg:px-[20px]  2xl:px-[35px] text-[18px] sm:text-[20px] lg:text-[15px] xl:text-[20px]">
              “We’re listening — tell us what you think.”
            </span>
          </div>
        </div>
        <div className="lg:w-[50%] xl:w-[45%] 2xl:w-[50%] border-[#a0a09f]  shadow-2xl py-[50px] xl:py-[80px] rounded-xl mt-[30px] lg:mt-0 px-[20px] sm:px-[45px] lg:px-[30px] 2xl:px-[50px]">
          <form>
            <div className="border border-[#C3C8BC] px-3 py-3 rounded-lg">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full outline-none placeholder-black text-black text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[20px]"
              />
            </div>
            <div className="border border-[#C3C8BC] px-4 py-3 rounded-lg mt-[30px]">
              <input
                type="text"
                placeholder="Phone Number(optional)"
                className="w-full outline-none placeholder-black text-black text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[20px]"
              />
            </div>            
            <div className="border border-[#C3C8BC] px-4 py-3 rounded-lg mt-[30px]">
              <input
                type="email"
                placeholder="Email"
                className="w-full outline-none placeholder-black text-black text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[20px]"
              />
            </div>
            <div className="border border-[#C3C8BC] px-4 py-3 rounded-lg mt-[25px] ">
              <textarea
                type="text"
                placeholder="Message"
                className="w-full outline-none placeholder-black text-black text-[16px] sm:text-[18px] lg:text-[16px] xl:text-[20px] h-[150px] xl:h-[200px]"
              />
            </div>
<button className="w-full border bg-[#1E4D50] text-white px-4 py-4 rounded-lg mt-[50px] xl:mt-[70px] text-[14px] font-medium">SEND</button>

          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
