import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { navbarLinks } from "../../constants";
import { Link } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { MobileNavbar } from "..";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Set the threshold where the navbar becomes sticky
      if (window.scrollY > 60) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    // Attach the event listener to window scroll
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={isSticky ? "h-[80px]" : ""}></div>

      <div
        className={`${
          isSticky
            ? "fixed top-0 left-0 w-full bg-white shadow-lg z-50"
            : "relative"
        } flex items-center justify-between lg:justify-evenly px-10 py-7 transition-all duration-300`}>
        <h1 className="text-black font-semibold text-xl ">A-OnePly</h1>

        <div className="hidden  lg:flex items-center justify-evenly gap-8 text-base font-medium text-black-2/90">
          {navbarLinks.map((link) => {
            if (!link.children) {
              return (
                <motion.a
                  key={link.label}
                  whileHover={{
                    scale: "1.09",
                    transition: {
                      delay: 0.05,
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                  href={link.link}
                  className="hover:text-black-2 uppercase font-[500]">
                  {link.label}
                </motion.a>
              );
            } else {
              return (
                <DropdownMenu key={link.label}>
                  <DropdownMenuTrigger className="outline-none focus:outline-none focus:border-none">
                    <motion.p
                      whileHover={{
                        scale: "1.09",
                        transition: {
                          delay: 0,
                        },
                      }}
                      whileTap={{ scale: 0.9 }}
                      className="hover:text-black-2 font-[500] uppercase transition-all flex items-start justify-center gap-3">
                      {link.label} <IconChevronDown />
                    </motion.p>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-60 bg-white">
                    {link.children.map((child) => (
                      <DropdownMenuItem
                        key={child.label}
                        className="hover:bg-black-2/5 p-2 uppercase font-[450]">
                        <motion.a
                          whileHover={{
                            translateX: "5px",
                          }}
                          href={child.link}>
                          {child.label}
                        </motion.a>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            }
          })}
        </div>

        <Link
          to={""}
          className="bg-blue-600 text-white border-none hidden lg:block rounded-sm hover:bg-blue-800 px-4 py-2">
          Connect Now
        </Link>

        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;
