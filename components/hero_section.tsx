// import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight, CirclePlay } from "lucide-react";

const HeroSection = () => {
  return (
    <div className=" flex px-6  overflow-hidden ">
      <div className="relative z-10 text-center max-w-2xl ">
        <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-bold !leading-[1.2] tracking-tight">
          Smart Agent For your Routines and Hygiene
        </h1>
        <p className="mt-6 text-[17px] md:text-lg">
          Explore our collection of products and services that brings confidence and rejuvenate your
          body. If you do not remember all your hygienes, Our AI does!
        </p>
        {/* <div className="mt-12 flex items-center justify-center gap-4">
          <Button size="lg" className="rounded-full text-base">
            Get Started <ArrowUpRight className="!h-5 !w-5" />
          </Button>
          <Button variant="outline" size="lg" className="rounded-full text-base shadow-none">
            <CirclePlay className="!h-5 !w-5" /> Watch Demo
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
