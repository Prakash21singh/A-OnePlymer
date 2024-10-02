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
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between lg:justify-evenly px-10 relative z-10 py-10">
      <h1 className="text-black font-semibold text-xl self-start">A-OnePly</h1>
      <div className="hidden self-end lg:flex items-center justify-evenly gap-8 text-base font-medium text-black-2/90">
        {navbarLinks.map((link) => {
          if (!link.children) {
            return (
              <motion.a
                whileHover={{
                  scale: "1.09",
                  transition: {
                    delay: 0.05,
                  },
                }}
                whileTap={{ scale: 0.9 }}>
                <Link
                  to={link.link}
                  key={link.label}
                  className="hover:text-black-2 uppercase font-[500] ">
                  {link.label}
                </Link>
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
                    className="hover:text-black-2 font-[500] uppercase  transition-all flex items-start justify-center gap-3">
                    {link.label} <IconChevronDown />
                  </motion.p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60 bg-white">
                  {link.children.map((child) => (
                    <DropdownMenuItem className="hover:bg-black-2/5 p-2 uppercase font-[450]">
                      <motion.a
                        whileHover={{
                          translateX: "5px",
                        }}
                        key={child.label}>
                        <Link to={child.link}>{child.label}</Link>
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
        className="bg-blue-600 selft-start text-white border-none hidden lg:block rounded-sm hover:bg-blue-800 px-4 py-2">
        Connect Now
      </Link>
      <MobileNavbar />
    </div>
  );
};

export default Navbar;
