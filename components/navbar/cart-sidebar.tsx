import { Button } from "@/components/ui/button";
import { Separator } from "@radix-ui/react-separator";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { ShoppingBag, Minus, Plus, Trash, Box, CreditCard } from "lucide-react";
import Image from "next/image";

export default function CartSideBar() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="rounded-full cursor-pointer flex items-center justify-center relative">
          <ShoppingBag />
          <Badge variant={"destructive"} className="rounded-full absolute -top-2 -right-2">
            5
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent className="gap-2">
        <SheetHeader className="border pb-0 mb-0 gap-0">
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription className="p-0 text-sm">
            you have added 4 items to your bisket so far.
          </SheetDescription>
          <Separator className="pt-2" />
        </SheetHeader>
        <div className="flex pl-3 gap-0">
          <Box className="size-5" />
          <span className="pl-2 text-sm"> You have unlocked free shipping!</span>
        </div>

        <div className="flex-1 gap-6 px-4 overflow-y-auto max-h-[85%] scrollbar-hide">
          {/* Cart Item */}
          {[1, 2, 3, 4, 5, 6, 7].map((item) => {
            return (
              <div key={item} className="flex items-center gap-2 border-b-1 pb-2 mb-2 ">
                {/* Image */}
                <div className="h-20 w-20 bg-gray-100 rounded-md flex items-center justify-center overflow-hidden">
                  <Image
                    width={"90"}
                    height={"90"}
                    src="/login-image.jpg"
                    alt="Product"
                    className="object-cover w-full h-full"
                  />
                </div>
                {/* Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <p className="font-medium text-base truncate max-w-40">
                    Product Name Here and the name
                  </p>
                  <span className="text-xs text-gray-500 truncate">Standard - Large</span>
                  <div className="flex items-center mt-1">
                    <div className="border flex rounded-xl">
                      <Button className="p-0 size-6 h-6 rounded-xl" size="sm" variant="ghost">
                        <Minus />
                      </Button>
                      <span className="w-12 text-center border-x-1">1</span>
                      <Button variant="ghost" size="sm" className="p-0 size-6 h-6">
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </div>
                {/* Actions */}
                <div className="flex flex-col items-end justify-between h-full ml-2">
                  <Button variant="outline" className="size-9 hover:bg-red-200 hover:text-red-500">
                    <Trash />
                  </Button>
                  <span className="text-sm font-semibold mt-3">$ 120.99</span>
                </div>
              </div>
            );
          })}
        </div>
        {/* pricing */}
        <div className="flex justify-between items-center px-6 ">
          <span className="text-base">Subtotal</span>
          <span className="text-base">$ 847.00</span>
        </div>
        <div className="flex justify-between items-center px-6 ">
          <span className="text-base font-medium">Shipping</span>
          <span className="text-base font-semibold">Free</span>
        </div>
        <Separator className="border" />
        <div className="flex justify-between items-center px-6 ">
          <span className="text-base font-semibold">Total</span>
          <span className="text-base font-semibold">$ 847.00</span>
        </div>

        <SheetFooter>
          <Button>
            <CreditCard className="size-6" /> Checkout
          </Button>
          <SheetClose asChild>
            <Button variant="outline">Continue Shopping</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
