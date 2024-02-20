import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <div className="">
      <div className="relative">
        <div className="bg-black rounded-2xl mr-[150px] my-[80px] flex h-[840px] items-center">
          <div className="grid grid-cols-12">
            <div className="col-span-5 flex items-center">
              {" "}
              <div className="absolute text-white left-[4%] mt-[20px] z-50">
                <h1 className="text-[46px] capitalize  font-herofont">
                  leaders & champions <br /> are made... not born!
                </h1>
                <p className="text-[#cfcfcf] my-[20px]">
                  Get started today with our EXCLUSIVE offer! <br /> Request
                  more information today to find out <br /> how you or your
                  child can start training!
                </p>
                <button className="py-[10px] px-[16px] bg-white text-[#4a4a4a] rounded-lg mt-[30px]">
                  Find out more
                </button>
              </div>
            </div>
            <div className="col-span-7 overflow-hidden rounded-e-2xl">
              <div className="overflow-hidden rounded-s-full">
                <Image
                  className="w-full h-[840px] object-cover object-[100%]"
                  src="/Assets/champiyanimg.jpg"
                  alt="image"
                  width={1000}
                  height={1000}
                />
              </div>
            </div>
          </div>

          <div className="absolute right-[25px]">
            <Image
              className="w-[1000px]"
              src="/Assets/circle.svg"
              alt="image"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
