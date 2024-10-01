import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { navbarLinks } from "@/constants";
import { IconChevronDown, IconMenu } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const MobileNavbar = () => {
  return (
    <div className="inline-block lg:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <IconMenu />
        </SheetTrigger>
        <SheetContent className="bg-blue-600" side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-[#ffffff] font-semibold my-5 text-center">
              Navigation Link
            </SheetTitle>{" "}
            <SheetDescription>{""}</SheetDescription>
            {/* Visible title for the sheet */}
          </SheetHeader>
          <div className="flex flex-col items-start justify-evenly gap-8 text-base font-medium uppercase text-[#ffffff] tracking-wider font-lato">
            {navbarLinks.map((link) => {
              if (!link.children) {
                return (
                  <SheetClose asChild key={link.label}>
                    <Link
                      to={link.link}
                      className="hover:text-black-2 transition-all">
                      {link.label}
                    </Link>
                  </SheetClose>
                );
              } else {
                return (
                  <DropdownMenu key={link.label}>
                    <DropdownMenuTrigger className="outline-none focus:outline-none focus:border-none">
                      <p className="hover:text-black-2 uppercase text-[#ffffff] transition-all flex items-start justify-center gap-3">
                        {link.label} <IconChevronDown />
                      </p>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-60 bg-white">
                      {link.children.map((child) => (
                        <SheetClose asChild key={child.label}>
                          <Link to={child.link}>{child.label}</Link>
                        </SheetClose>
                      ))}
                    </DropdownMenuContent>
                  </DropdownMenu>
                );
              }
            })}
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNavbar;
