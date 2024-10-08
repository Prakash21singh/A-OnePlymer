import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { trustData } from "@/constants";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const Trust = () => {
  return (
    <div className="w-full lg:min-h-screen relative flex flex-col  lg:flex-row lg:justify-end text-white">
      {/* Image Section */}
      <img
        src="/cutting.jpg"
        alt="TrustWorker"
        className="w-full h-full absolute -z-10 left-0 object-cover "
      />

      {/* Content Section */}
      <div className="w-full h-full lg:w-1/2 flex flex-col py-4 px-6 lg:px-12 bg-gray-800">
        <h1 className="text-xl lg:text-2xl uppercase text-red-2">
          Why Choose Us
        </h1>

        <TextGenerateEffect
          start={1}
          end={4}
          words="We build Trust with Quality."
          className="px-0 mx-0 text-white text-wrap text-4xl md:text-4xl lg:text-5xl"
          textColor="text-red-1"
        />

        <p className="text-[16px] tracking-wider lg:text-[18px]  leading-6 lg:leading-9 my-1 md:my-2 lg:w-[85%]">
          At Atoot Ply, we believe in building lasting relationships with our
          customers through superior craftsmanship and unwavering dedication.
          Here’s why you should choose us:
        </p>

        <div className="lg:w-[70%] px-8 lg:px-0">
          {trustData.map((data, index) => (
            <div
              key={index}
              className="flex justify-start items-start gap-2 mb-4">
              <IconCircleCheckFilled
                className="text-red-2 "
                width={34}
                height={34}
              />
              <span className="flex flex-col">
                <h2 className="text-md md:text-lg font-semibold tracking-wider mb-1">
                  {data.heading}
                </h2>
                <p className="text-gray-500 text-sm font-extralight">
                  {data.para}
                </p>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trust;
