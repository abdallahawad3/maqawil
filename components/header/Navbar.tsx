"use client";

import { Routes } from "@/data";
// import Link from "../link";
import { Link } from "react-scroll";

import { Button } from "../ui/button";
import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "../ModeToggle";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <Button variant="secondary" size="sm" className="lg:hidden" onClick={() => setOpenMenu(true)}>
        <Menu className="!w-6 !h-6" />
      </Button>
      <ul
        className={`fixed lg:static ${
          openMenu ? "left-0 z-50" : "-left-full"
        } top-0 px-10 py-20 lg:p-0 bg-black lg:bg-transparent transition-all duration-200 h-full lg:h-auto flex-col lg:flex-row w-full lg:w-auto flex items-start lg:items-center gap-10`}>
        <Button
          variant="secondary"
          size="sm"
          className="absolute top-8 right-10 lg:hidden"
          onClick={() => setOpenMenu(false)}>
          <XIcon className="!w-6 !h-6" />
        </Button>
        {Routes.map((ele) => (
          <li key={ele.name} className="">
            <Link
              onClick={() => setOpenMenu(false)}
              className="font-bold cursor-pointer text-lg font-mono text-gray-600 dark:text-gray-300 transition duration-100 hover:text-white"
              to={ele.link}>
              {ele.name}
            </Link>
          </li>
        ))}
        <ModeToggle />
      </ul>
    </nav>
  );
};

export default Navbar;
