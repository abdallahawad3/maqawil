import Image from "next/image";
import Link from "../link";
import Navbar from "./Navbar";
import { logo } from "@/public/images";

const Header = () => {
  return (
    <header className="py-5 shadow-lg sticky top-0 z-50 bg-white dark:bg-black">
      <div className="container flex items-center justify-between">
        <Link className="font-bold text-2xl" href={"/"}>
          <Image src={logo} alt="logo image" className="!size-[50px]" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
