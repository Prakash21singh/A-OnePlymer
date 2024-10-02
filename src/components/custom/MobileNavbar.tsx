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
        <SheetContent className="bg-white shadow-lg text-black-1" side={"left"}>
          <SheetHeader>
            <SheetTitle className="text-inherit font-semibold my-5 text-center">
              A-OnePly
            </SheetTitle>{" "}
            <SheetDescription>{""}</SheetDescription>
            {/* Visible title for the sheet */}
          </SheetHeader>
          <div className="flex flex-col items-start justify-evenly gap-8 text-base  uppercase text-black-1 font-[600] tracking-widest font-lato">
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
                      <p className="hover:text-black-2 uppercase text-black-1 font-[600] tracking-widest transition-all flex items-start justify-center gap-3">
                        {link.label} <IconChevronDown />
                      </p>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-60 bg-white p-2">
                      {link.children.map((child) => (
                        <SheetClose
                          asChild
                          key={child.label}
                          className="px-6 py-3 hover:bg-black-1/20 text-base font-normal tracking-widest flex">
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
