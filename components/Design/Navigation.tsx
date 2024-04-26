"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "../ui/navigation-menu";
import { cn } from "@/lib/utils";
import Logo from "./Logo";

const Navigation = () => {
  return (
    <NavigationMenu className="w-full">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-72 grid gap-3 grid-cols-2 p-3 h-60 divide-x-2">
              <div className="bg-slate-200 p-2 flex justify-center items-center rounded-lg ">
                <Logo />
              </div>
              <div>
                <ul className="flex flex-col gap-2 pl-3">
                  <li>React</li>
                  <li>NextJs</li>
                  <li>Mongo DB</li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid gap-3 grid-cols-2 h-60 p-3 w-72 divide-x-2">
              <div className="bg-slate-200 p-2 flex justify-center items-center rounded-lg">
                <Logo />
              </div>
              <div>
                <ul className="flex flex-col pl-3">
                  <li className=" hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
                    React
                  </li>
                  <li className=" hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
                    TypeScript
                  </li>
                  <li className=" hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
                    NextJs
                  </li>
                  <li className=" hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
                    Mongo DB
                  </li>
                  <li className=" hover:bg-slate-100 p-2 rounded-lg cursor-pointer">
                    Prisma
                  </li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Get Started</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid grid-cols-2 h-60 p-3 gap-3 w-72">
              <div>
                <ul className="w-full flex flex-col gap-2">
                  <li>
                    <h1>Docs</h1>
                    <p className="text-xs ">
                      consectetur adipisicing elit. Unde, nisi!
                    </p>{" "}
                  </li>
                  <li>
                    <h1>Support</h1>
                    <p className="text-xs ">
                      consectetur adipisicing elit. Unde, nisi!
                    </p>{" "}
                  </li>
                  <li>
                    <h1>Help</h1>
                    <p className="text-xs ">
                      consectetur adipisicing elit. Unde, nisi!
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <ul>
                  <li>React</li>
                  <li>NextJs</li>
                  <li>Mongo DB</li>
                </ul>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navigation;
