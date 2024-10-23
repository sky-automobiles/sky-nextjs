import EnqHome from "@/components/home/EnqHome";
import HeroSection from "@/components/home/HeroSection";
import HomeOutlets from "@/components/home/HomeOutlets";
import OurChannels from "@/components/home/OurChannels";
import QuickActions from "@/components/home/QuickActions";
import ReviewsAndRecom from "@/components/home/ReviewsAndRecom";
import VehcileRange from "@/components/home/VehcileRange";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import Footer from "@/components/others/Footer";
import Header from "@/components/others/Header";

export default function Home() {
  return (
    <main className="">
      <Header />
      <HeroSection />
      <EnqHome />
      <VehcileRange />
      <QuickActions isHeading={true} />
      <WhyChooseUs />
      <OurChannels />
      <HomeOutlets />
      <ReviewsAndRecom />
      <Footer />
    </main>
  );
}
