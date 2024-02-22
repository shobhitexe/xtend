import HeroIcons from "./HeroIcons";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <div className="bg-heroBgColor/10 sm:pt-20 pt-14 md:pb-[500px] sm:pb-[400px] ss:pb-[300px] pb-[200px] relative">
      <div className="flex flex-col items-center x:gap-5 gap-3 bg-heroBg">
        <div className="nav-button-bg-gradient-silver-text md:text-[70px] sm:text-[60px] ss:text-[50px] xs:text-[40px] text-[30px] font-instrumentSans px-1 text-center font-semibold sm:leading-[70px] ss:leading-[60px] xs:leading-[50px] leading-[40px]">
          Design that{" "}
          <span className="nav-button-bg-gradient-blue-text">resonates</span>
          <br />
          with your audience.
        </div>

        <div className="text-center text-grey sm:w-[45%] w-[60%] md:text-[16px] sm:text-[15px] ss:text-[14px] xs:text-[13px] text-[10px]">
          Try an award-winning full-service web growth agency, specializing in
          strategy, design and development, content marketing and more, to find
          and engage customers and drive revenue across all your channels.
        </div>

        <div className="nav-button-bg-gradient-blue text-white md:text-[16px] sm:text-[15px] ss:text-[14px] xs:text-[13px] text-[11px] px-14 cursor-pointer border py-3 rounded-xl mt-5 z-20">
          {"Let's Talk"}
        </div>
        <div className="text-grey text-[13px]">
          {"Let's Skyrocket your Business!"}
        </div>

        <HeroIcons />

        <HeroImages />
      </div>
    </div>
  );
}
