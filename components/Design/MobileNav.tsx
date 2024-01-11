import React from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetDescription,
  SheetHeader,
} from "../ui/sheet";
import { MobileIcon } from "@radix-ui/react-icons";
import { Button } from "../ui/button";
import Link from "next/link";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetDescription>
                <div className="flex text-balance mt-10 text-lg flex-col space-y-4 items-start">
                  <Link href={""}>Home</Link>
                  <Link href={""}>About</Link>
                  <Link href={""}>Documentation</Link>
                  <Link href={""}>Templates</Link>
                  <Link href={""}>Contact</Link>
                </div>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
      <div className="hidden md:flex space-x-4">
        <Button className="" variant={"ghost"}>
          Sign Up
        </Button>
        <Button className="bg-blue-500">Sign In</Button>
      </div>
    </>
  );
};

export default MobileNav;
