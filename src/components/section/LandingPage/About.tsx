import { IconCircleCheckFilled } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="w-full h-auto lg:h-screen p-10">
      <div className="w-full h-full flex flex-col lg:flex-row items-center justify-center">
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-full relative">
          <div className="w-full relative h-full">
            <img
              src="/cutter.jpg"
              alt="cutter.png"
              className="min-w-[150px] w-[200px] md:w-[300px] lg:w-[400px] absolute left-1/2 top-[70%] -translate-y-1/2  -translate-x-1/2  rounded-lg shadow-xl z-10"
            />
            <img
              src="/wood.jpg"
              alt="wood"
              className="min-w-[150px] h-[250px] lg:h-[400px] absolute right-0 md:right-[15%] top-[20%]  rounded-xl  shadow-lg shadow-slate-400 "
            />
            <img
              src="/worker.jpg"
              alt="worker"
              className="min-w-[150px] h-[250px] lg:h-[400px] absolute left-[20%] md:left-[30%] top-[40%] -translate-y-1/2  -translate-x-1/2  rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-full flex items-start justify-center flex-col">
          <h3 className="text-xl lg:text-3xl font-medium text-yellow-1 mb-5">
            About us ____
          </h3>
          <h1 className="text-2xl lg:text-4xl font-extrabold font-roboto tracking-wider  my-4 ">
            We Are Specialists
            <p>
              {" "}
              <b className="text-yellow-1">in Plywood</b> Solutions
            </p>
          </h1>
          <p className="font-medium text-[18px] tracking-wider mx-2 my-4 flex gap-3">
            With over 15+ years of expertise, Atoot Ply is committed to
            providing exceptional plywood products for all your building
            requirements. Our steadfast dedication to excellence and creativity
            ensures that you receive the finest in the sector.
          </p>
          <ul className="flex flex-col items-start gap-5">
            <li className="flex items-center">
              <IconCircleCheckFilled
                width={49}
                className="text-blue-500  hidden md:inline-block"
              />
              <p className="font-rubik text-[19px] tracking-wide">
                <b className=" font-semibold">Unparalleled Quality:</b> We
                utilize only the highest-grade materials to manufacture our
                plywood, assuring durability and robustness.
              </p>
            </li>
            <li className="flex items-center">
              <IconCircleCheckFilled
                width={49}
                className="text-blue-500 hidden md:inline-block"
              />
              <p className="font-rubik text-[19px] tracking-wide">
                <b className=" font-semibold">Cutting-edge Designs:</b> Stay in
                front with our contemporary and eco-friendly designs that meet
                various construction demands.
              </p>
            </li>
            <li className="flex items-center ">
              <IconCircleCheckFilled
                width={49}
                className="text-blue-500 hidden md:inline-block"
              />
              <p className="font-rubik text-[19px] tracking-wide">
                <b className=" font-semibold">Market Leader:</b> Valued by
                industry experts, we establish the standard for quality and
                dependability in plywood production.
              </p>
            </li>
          </ul>
          <Link
            to={""}
            className="bg-blue-600 my-4 lg:mx-2 text-white border-none rounded-sm hover:bg-blue-800 px-4 py-2">
            Connect Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
