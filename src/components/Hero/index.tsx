import HeroIcons from "./HeroIcons";
import HeroImages from "./HeroImages";

export default function Hero() {
  return (
    <div className="bg-heroBgColor/10 pt-20 min-h-screen">
      <div className="flex flex-col items-center gap-5 bg-heroBg">
        <div className="nav-button-bg-gradient-silver-text text-[70px] font-instrumentSans text-center font-semibold leading-[70px]">
          Design that{" "}
          <span className="nav-button-bg-gradient-blue-text">resonates</span>
          <br />
          with your audience.
        </div>

        <div className="text-center text-grey w-[45%] text-[16px]">
          Try an award-winning full-service web growth agency, specializing in
          strategy, design and development, content marketing and more, to find
          and engage customers and drive revenue across all your channels.
        </div>

        <div className="nav-button-bg-gradient-blue text-white px-14 cursor-pointer border py-3 rounded-xl mt-5 z-20">
          Let's Talk
        </div>
        <div className="text-grey text-[13px]">
          Let's Skyrocket your Business!
        </div>

        <HeroIcons />

        <HeroImages />
      </div>
    </div>
  );
}
