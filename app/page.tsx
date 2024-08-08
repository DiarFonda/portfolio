import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const Home = () => {
  return (
    <div className="container flex flex-col md:flex-row items center justify-between mt-20 md:pt-8 md:pb-24">
      <div>
        <h4 className="text-center md:text-left">SOFTWARE DEVELOPER</h4>
        <h1 className="text-center md:text-left pt-5 font-semibold text-[48px] md:text-[80px] leading-[1.1]">
          Hi I Am <br />
          <span className="text-accent bold">Diar Fonda</span>
        </h1>
        <p className="max-w-[520px] pt-7 text-center md:text-left">
          I am a passionate software developer with expertise in JavaScript
          full-stack development, including various frontend and backend
          frameworks
        </p>
        <div className="flex flex-col md:flex-row mt-8">
          <Button
            variant="outline"
            size="md"
            className="uppercase items-center gap-3"
          >
            <span>Download Cv</span>
            <Download />
          </Button>
          {/* <div>icon1 icon2 icon3 icon4</div> */}
        </div>
      </div>
      {/* <div>Photo</div> */}
    </div>
  );
};

export default Home;
