import Features from "@/components/main/Features";
import HeroSection from "@/components/main/HeroSection";
import PreparedSection from "@/components/main/PreparedSection";
import Slider from "@/components/main/Slider";
import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full h-full min-h-screen bg-white text-black pb-10">
    <HeroSection/>
    <Slider/>
    <PreparedSection/>
    <Features/>
   </div>
  );
}
