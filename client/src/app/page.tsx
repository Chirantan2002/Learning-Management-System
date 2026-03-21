"use client";
import Hero from "@/components/student/Hero";
import Navbar from "@/components/student/Navbar";
import TapeIcons from "@/components/student/TapeIcons";
import DiscoverPopular from "@/components/student/DiscoverPopular";
import LearningJourney from "@/components/student/LearningJourney";
import SuccessStories from "@/components/student/SuccessStories";
import Mentors from "@/components/student/Mentors";
import Pricing from "@/components/student/Pricing";
import FAQ from "@/components/student/FAQ";
import Footer from "@/components/student/Footer";
import { usePathname } from "next/navigation";

const Page = () => {
  const pathname = usePathname();
  const isEducatorRoute = pathname.includes("/educator/*");

  return (
    <div className="min-h-screen">
      {!isEducatorRoute && <Navbar />}
      <Hero />
      <TapeIcons />
      <LearningJourney />
      <DiscoverPopular />
      <SuccessStories />
      <Mentors />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Page;
