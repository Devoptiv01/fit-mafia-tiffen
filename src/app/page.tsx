import Features from "@/components/main/Features";
import HeroSection from "@/components/main/HeroSection";
import PreparedSection from "@/components/main/PreparedSection";
import ProcessSection from "@/components/main/ProcessSection";
import Slider from "@/components/main/Slider";
import Testimonials from "@/components/main/Testimonials";
// import Image from "next/image";

export default function Home() {
  return (
   <div className="w-full h-full min-h-screen bg-white text-black">
    <HeroSection/>
    <ProcessSection/>
    <Slider/>
    <PreparedSection/>
    <Testimonials/>
    <Features/>
   </div>
  );
}
