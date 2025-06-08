import { Button } from "@/components/ui/button";
import Link from "next";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog-updated";

import { Calculator, Calendar, CreditCard, Settings, Smile } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { User, Search } from "lucide-react";
import CartSideBar from "@/components/navbar-03/cart-sidebar";
import SwitchTheme from "./switch-theme";
import { DialogTitle } from "@radix-ui/react-dialog";

const Navbar03Page = () => {
  return (
    <div className=" bg-muted">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-8">
            <h1 className="text-3xl sm:text-5xl md:text-4xl font-bold !leading-[1.2] tracking-tight ">
              BB.AE
            </h1>

            {/* Desktop Menu */}
            <NavMenu className="hidden md:block" />
          </div>

          <div className="flex items-center gap-3">
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="hidden rounded-full sm:inline-flex cursor-pointer">
                  <Search />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px] bg-transparent ">
                <DialogTitle className="sr-only">dfads</DialogTitle>
                <Command className="rounded-lg border shadow-md md:min-w-[450px]">
                  <CommandInput placeholder="Type a command or search..." />
                  <CommandList>
                    <CommandEmpty>
                      <span className="text-xl"> No results found</span>.
                    </CommandEmpty>
                    <CommandGroup heading="Suggestions">
                      <CommandItem>
                        <Calendar />
                        <span>Calendar</span>
                      </CommandItem>
                      <CommandItem>
                        <Smile />
                        <span>Search Emoji</span>
                      </CommandItem>
                      <CommandItem>
                        <a href="/" className="flex gap-2">
                          <Calculator />
                          <span>Calculator</span>
                        </a>
                      </CommandItem>
                    </CommandGroup>
                    <CommandSeparator />
                    <CommandGroup heading="Settings">
                      <CommandItem>
                        <User />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <CreditCard />
                        <span>Pricing</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                      </CommandItem>
                      <CommandItem>
                        <Settings />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DialogContent>
            </Dialog>

            <Button variant="outline" className=" rounded-full sm:inline-flex cursor-pointer">
              <User />
            </Button>
            <CartSideBar />
            <SwitchTheme />

            {/* Mobile Menu */}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar03Page;
