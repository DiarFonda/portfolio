"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import MobileNav from "./ui/MobileNav";
import Nav from "./Links";
import ToggleTheme from "./ui/ToggleTheme";

export const Navbar = () => {
  return (
    <nav className="container mx-auto flex justify-between mt-4 ">
      <div className="md:hidden">
        <MobileNav />
      </div>
      <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
        <ul className="flex flex-col items-center font-medium p-4 md:p-0 mt-4S md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
          <Nav />
          <li>
            <Link href="resume">
              <Button className="rounded-md bg-accent p-2 hover:bg-lime-800 shadow-md">
                Hire Me
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      {/* <Button className="rounded-md p-2">
        <MoonIcon />
      </Button> */}
      <ToggleTheme />
    </nav>
  );
};

export default Navbar;
