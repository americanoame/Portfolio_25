import { EllipsisVertical } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";

import ModeToggle from "./mode-toggle";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      <div className="flex justify-end gap-3">
        
        <nav className="md:hidden">
          <Sheet>
            <SheetTrigger className="align-middle">
              <EllipsisVertical />
            </SheetTrigger>
            <SheetContent className="flex flex-col items-start">
              <SheetTitle></SheetTitle>

              <nav className="flex flex-col gap-10 p-4 text-[16px]">

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

              <SheetDescription></SheetDescription>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </>
  );
};

export default Menu;
