import {
  IconAt,
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-full h-16 z-10 border relative  hidden md:flex text-black-1">
      <div className="w-[300px] lg:w-[900px] h-[100px] rounded-full blur-[100px] bg-primary/70 absolute left-1/2 -translate-x-1/2"></div>
      <div className="w-[80%] mx-auto h-full flex items-center justify-between">
        <div className="flex items-center justify-center gap-4">
          <span className="flex items-center justify-center gap-3">
            <IconPhone /> <p>+91-8522555648</p>
          </span>
          <span className="flex items-center justify-center gap-3">
            <IconAt /> <p>random@gmail.com</p>
          </span>
        </div>
        <span className="flex items-center justify-center gap-4">
          <Link to={"/"}>
            <IconBrandInstagram />
          </Link>
          <Link to={"/"}>
            <IconBrandFacebook />
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
