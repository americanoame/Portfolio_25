import Link from "next/link";
import ModeToggle from "./mode-toggle";
import Menu from "./menu";

const Header = () => {
  return (
    <header className="w-full">
      <div className="wrapper flex flex-between">
        <div className="flex-start">
          <Link href="/" className="flex-start">
            <div className="text-[22px] lg:text-3xl text-gray-400 font-light">
              <span className="text-4xl lg:text-5xl">A</span>ndre{" "}
              <span className="font-thin text-gray-400">Silva</span>
            </div>
          </Link>
        </div>
        {/* <div className=" text-white rounded-md"></div> */}

        <div className="flex items-center ml-auto">
          <nav className="hidden md:flex gap-10 text-[16px]">
            <Link href="/" className="font-light hover:underline">
              Home
            </Link>

            <Link href="/about" className="font-light hover:underline">
              About
            </Link>

            <Link href="/service" className="font-light hover:underline">
              Service
            </Link>

            <Link href="/contact" className="font-light hover:underline">
              Contact
            </Link>

            <ModeToggle />
          </nav>
        </div>

        <Menu />
      </div>
    </header>
  );
};

export default Header;
