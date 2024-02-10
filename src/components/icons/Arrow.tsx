import { SVGProps } from "react";

export default function Arrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 32 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 3L16 15L29 3"
        stroke="#566CB6"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
