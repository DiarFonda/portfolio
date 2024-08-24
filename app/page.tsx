import { Social } from "@/components/Social";
import dynamic from "next/dynamic";
const DynamicHero = dynamic(() => import("@/components/HeroSection"), {
  ssr: false,
});

const Home = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between mt-16 lg:pt-8 lg:pb-24 mb-3">
      <div className="order-2 lg:order-none">
        <DynamicHero />
      </div>
      <div className="order-1 lg:order-none mb-14 lg:min-w-[420px] ">
        <Social />
      </div>
    </div>
  );
};

export default Home;
