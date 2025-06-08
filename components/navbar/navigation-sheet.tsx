import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { collections, travelMenuItems } from "./config";

export const NavigationSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className=" ">
        <SheetTitle className="p-3 font-extrabold text-2xl">BeautyBrand.ae</SheetTitle>

        <div className="overflow-y-auto scrollbar-hide pl-4 border-y-1 text-base space-y-4 relative">
          <div className="my-3">
            <Link href="/" className="font-bold">
              Take me Home
            </Link>
          </div>

          <div>
            <div className="font-bold">Collections</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {collections.map((foodItem) => (
                <li key={foodItem.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <foodItem.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {foodItem.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="font-bold">For Women</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {travelMenuItems.map((item) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold">For Men</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {travelMenuItems.map((item) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-bold">About Us</div>
            <ul className="mt-2 space-y-3 ml-1 pl-4 border-l">
              {travelMenuItems.map((item) => (
                <li key={item.title}>
                  <Link href="#" className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 mr-2 text-muted-foreground" />
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="py-3 w-full flex justify-center gap-4">
          <Button variant="outline">Sign In</Button>
          <Button>Sign Up</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
};
