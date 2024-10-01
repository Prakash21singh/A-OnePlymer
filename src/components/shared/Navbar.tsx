import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { navbarLinks } from "../../constants";
import { Link } from "react-router-dom";
import { IconChevronDown } from "@tabler/icons-react";
import { MobileNavbar } from "..";
const Navbar = () => {
  return (
    <div className="w-full flex items-center justify-between lg:justify-evenly px-10 relative z-10 py-10">
      <h1 className="text-black font-semibold text-xl">A-OnePly</h1>
      <div className="hidden lg:flex items-center justify-evenly gap-8 text-base font-medium text-black-2/70">
        {navbarLinks.map((link) => {
          if (!link.children) {
            return (
              <Link
                to={link.link}
                key={link.label}
                className="hover:text-black-2 transition-all">
                {link.label}
              </Link>
            );
          } else {
            return (
              <DropdownMenu key={link.label}>
                <DropdownMenuTrigger className="outline-none focus:outline-none focus:border-none">
                  <p className="hover:text-black-2  transition-all flex items-start justify-center gap-3">
                    {link.label} <IconChevronDown />
                  </p>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-60">
                  {link.children.map((child) => (
                    <DropdownMenuItem
                      key={child.label}
                      className="hover:bg-black-2/5 p-2">
                      <Link to={child.link}>{child.label}</Link>
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
  );
};

export default Navbar;
