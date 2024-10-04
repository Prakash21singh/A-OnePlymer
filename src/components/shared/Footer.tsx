import {
  IconAt,
  IconBrandFacebook,
  IconBrandInstagram,
  IconChevronsRight,
  IconMapPin,
  IconPhone,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { footerProductsLinks } from "../../constants";

const Footer = () => {
  return (
    <section className="w-full min-h-96 bg-gray-800 relative text-secondary grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      <div className="p-5">
        <h1 className="text-2xl lg:text-5xl font-semibold mb  -8">A-OnePly</h1>
        <p className="text-base font-normal my-4">
          With over 15+ years of excellence, Atoot Ply is dedicated to
          delivering top-notch plywood products for all your construction needs.
          Our unwavering commitment to quality and innovation ensures that you
          receive the best in the industry.
        </p>
        <div className="flex my-4 items-center gap-4">
          <IconBrandFacebook />
          <IconBrandInstagram />
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 p-5">
        <h1 className="text-xl lg:text-2xl font-semibold relative">
          Our Products
          <span className="absolute left-0 -bottom-2 w-[40px] h-[5px] bg-red-2 rounded-md"></span>
          <span className="absolute left-12 -bottom-2 w-[20px] h-[5px] bg-primary rounded-md"></span>
        </h1>
        {footerProductsLinks.map((link) => (
          <Link
            key={link.label}
            to={link.link}
            className="flex items-center justify-center gap-3 hover:translate-x-3 transition hover:text-red-2">
            <IconChevronsRight className="text-red-1" /> {link.label}
          </Link>
        ))}
      </div>
      <div className="flex flex-col items-start gap-4 p-5">
        <h1 className="text-xl lg:text-2xl font-semibold relative">
          Contact Us
          <span className="absolute left-0 -bottom-2 w-[40px] h-[5px] bg-primary rounded-sm"></span>
          <span className="absolute left-12 -bottom-2 w-[20px] h-[5px] bg-red-1 rounded-sm"></span>
        </h1>

        <Link to={"/"} className="flex items-center gap-3">
          <IconMapPin className="text-three" /> Some random Adress Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsam, totam.
        </Link>
        <Link to={"/"} className="flex items-center gap-3">
          <IconMapPin className="text-three" /> Some random Adress Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Ipsam, totam.
        </Link>
        <Link to={"/"} className="flex items-center gap-3">
          <IconPhone className="text-three" /> +91-3423423434
        </Link>
        <Link to={"/"} className="flex items-center gap-3">
          <IconAt className="text-three" /> demo@gmail.com
        </Link>
        <Link to={"/"} className="flex items-center gap-3">
          <IconAt className="text-three" /> john@gmail.com
        </Link>
        <Link to={"/"} className="flex items-center gap-3">
          <IconAt className="text-three" /> peter@gmail.com
        </Link>
      </div>
    </section>
  );
};

export default Footer;
