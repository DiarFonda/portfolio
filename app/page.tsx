import HeroSection from "@/components/HeroSection";
// import ProfilePhoto from "@/components/ProfilePhoto";

const Home = () => {
  return (
    <div className="container flex flex-col lg:flex-row items-center justify-between mt-16 lg:pt-8 lg:pb-24">
      <div className="order-2 lg:order-none">
        <HeroSection />
      </div>
      {/* <div className="order-1 lg:order-none mb-8 lg:mb-8 ">
      </div> */}
    </div>
  );
};

export default Home;
