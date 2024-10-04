import { IconAt, IconPhone } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16  hidden md:flex text-black-1 relative overflow-hidden">
      <span className="absolute w-[50%] h-full -z-10 bg-gray-800 -skew-x-[45deg] "></span>{" "}
      <span className="absolute w-[50%] h-full -z-10 bg-gray-800  skew-x-[45deg] to-yellow-1/40 "></span>
      <span className="absolute w-[30%] right-0 h-full -z-10 bg-red-1 skew-x-[45deg] "></span>{" "}
      <span className="absolute w-[30%] h-full right-0 -z-10 bg-red-2  -skew-x-[45deg] to-yellow-1/40 "></span>
      {/* <div className="w-[300px] lg:w-[900px] h-[100px] rounded-full blur-[100px] bg-primary/70 z-50 absolute left-1/2 -translate-x-1/2"></div> */}
      <div className="w-[80%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <span className="flex items-center justify-center gap-3">
            <IconPhone className="text-yellow-1" />{" "}
            <p className="text-md text-yellow-1">+91-8522555648</p>
          </span>
          <span className="flex items-center justify-center gap-3 ">
            <IconAt className="text-yellow-1" />{" "}
            <p className="text-md text-yellow-1">random@gmail.com</p>
          </span>
        </div>
        <span className="flex items-center justify-center gap-4 ">
          <Link to={"/"} className="bg-gray-800 p-2 rounded-full">
            <img src="/icons/instagram.svg" alt="icon" height={24} width={24} />
          </Link>
          <Link to={"/"} className="bg-gray-800 p-2 rounded-full">
            <img src="/icons/facebook.svg" alt="icon" height={24} width={24} />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
