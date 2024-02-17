import DiagonalArrow from "../icons/DiagonalArrow";

export default function Growth() {
  return (
    <div className="sm:mt-40 mt-20 w-[90%] mx-auto">
      <div className="flex sm:flex-row flex-col sm:items-center md:gap-10 gap-5">
        <h1 className="text-white sm:text-[40px] text-[30px] font-semibold sm:w-[60%]">
          All things considered for the{" "}
          <span className="nav-button-bg-gradient-blue-text">
            Ultimate business
          </span>{" "}
          <span className="nav-button-bg-gradient-silver-text">growth</span>
        </h1>
        <div className="flex flex-col gap-5 md:w-auto sm:w-[40%]">
          <p className="text-grey">
            We pride ourselves on executing every aspect of a project with care
            and precision. From strategy to creative to implementation and
            ongoing testing, we ensure your website is fast, secure and
            optimized at every level for sustained growth.
          </p>
          <div className="text-white px-7 py-3 rounded-3xl flex items-center gap-1 w-fit border border-grey/50 cursor-pointer drop-shadow-sm">
            <div>Book a Call</div> <DiagonalArrow className="w-7 h-7" />
          </div>
        </div>
      </div>
    </div>
  );
}
