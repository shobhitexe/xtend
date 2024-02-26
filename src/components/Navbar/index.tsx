import Image from "next/image";

export default function Navbar() {
  return (
    <div className="bg-black md:px-10 px-5 ss:py-5 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src={"/images/navbar/logo.webp"}
          alt="navlogo"
          height={35}
          width={35}
        />
        <Image
          src={"/images/navbar/xtend.webp"}
          alt="navlogo2"
          className="xs:flex hidden"
          height={90}
          width={90}
        />
      </div>

      <div className="flex items-center gap-5 font-instrumentSans">
        {/* <div className="sm:flex hidden items-center md:gap-5 gap-3 text-grey">
          {NavbarConstants.map((item) => (
            <div key={item.title}>{item.title}</div>
          ))}
        </div> */}
        <div className="flex items-center gap-3 ss:text-[15px] text-[12px]">
          <div className="nav-button-bg-gradient-blue px-5 ss:py-2 py-1 rounded-lg cursor-pointer shadow-xl text-white">
            Portfolio
          </div>
          <div className="nav-button-bg-gradient-silver px-5 ss:py-2 py-1 rounded-lg cursor-pointer text-white">
            Questions
          </div>
        </div>
      </div>
    </div>
  );
}
