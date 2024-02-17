import Image from "next/image";

export default function Footer() {
  return (
    <div className="sm:py-20 py-10 sm:px-20 px-10 flex flex-col sm:gap-20 gap-10">
      <div>
        <div className="nav-button-bg-gradient-silver-text">Talk to us</div>
        <div className="nav-button-bg-gradient-silver-text sm:text-[40px] ss:text-[30px] text-[24px] font-semibold">
          hello@xtend.agency
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Image
          src={"/images/navbar/logo.png"}
          alt="navlogo"
          height={40}
          width={40}
        />
        <Image
          src={"/images/navbar/xtend.png"}
          alt="navlogo2"
          height={100}
          width={100}
        />
      </div>
    </div>
  );
}
