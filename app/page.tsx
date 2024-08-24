import HeroSection from "@/components/HeroSection";
import { Social } from "@/components/Social";

const Home = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between mt-16 lg:pt-8 lg:pb-24 mb-3">
      <div className="order-2 lg:order-none">
        <HeroSection />
      </div>
      <div className="order-1 lg:order-none mb-14 lg:min-w-[420px] ">
        <Social />
      </div>
    </div>
  );
};

export default Home;
