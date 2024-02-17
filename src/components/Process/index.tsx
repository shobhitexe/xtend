import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import { ProcessArray } from "./ProcessConstants";

export default function Process() {
  return (
    <div className="relative">
      <div className="absolute bg-heroBgColor/70 w-[90%] mx-auto left-[50%] -translate-x-[50%] h-[200px] -bottom-10 rounded-full blur-3xl opacity-40">
        <div></div>
      </div>

      <div className="flex flex-col max-md:gap-10 w-[90%] mx-auto sm:mt-40 mt-20 relative px-2 bg-bgViolet rounded-2xl">
        <div className="absolute border-x border-b border-heroBgColor/30 w-full h-[200px] bottom-0 left-0 rounded-b-2xl">
          <div></div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center nav-button-bg-gradient-silver-text ss:text-[50px] xs:text-[40px] text-[30px] font-semibold">
            <span className="process-section-heading-gradient">Trust</span> the
            process
          </h1>
          <p className="text-grey text-center sm:w-[60%] w-[90%] ss:text-[14px] xs:text-[13px] text-[12px] mx-auto">
            Our core services are highly clean-cut and focused on the things we
            do best: helping businesses succeed through masterful marketing
            strategy, search engine optimization (SEO), data-backed UI/UX
            design, cutting-edge technology, and lasting support.
          </p>
        </div>
        <div className="flex sm:flex-row flex-col-reverse items-center">
          <Image
            src={"/images/process/code.png"}
            alt={"code"}
            width={480}
            height={400}
            className="sm:w-[40%] w-auto"
          />

          <Accordion
            className="w-full flex flex-col gap-5"
            type="single"
            collapsible
            defaultValue={"01. Strategy"}
          >
            {ProcessArray.map((process) => (
              <AccordionItem
                className="bg-lightViolet px-5 rounded-2xl"
                value={process.title}
                key={process.title}
              >
                <AccordionTrigger className="nav-button-bg-gradient-silver-text ss:text-[28px] xs:text-[20px] text-[18px] font-semibold">
                  {process.title}
                </AccordionTrigger>
                <AccordionContent className="text-grey ss:text-[15px] xs:text-[14px] text-[12px]">
                  {process.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}