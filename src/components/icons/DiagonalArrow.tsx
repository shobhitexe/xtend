import { SVGProps } from "react";

export default function DiagonalArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 22 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_2945_3847)">
        <path
          d="M4.58154 18.5455L17.6725 5.45459M17.6725 5.45459H7.85427M17.6725 5.45459V15.2728"
          stroke="url(#paint0_linear_2945_3847)"
          strokeOpacity="0.65"
          strokeWidth="1.74545"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_2945_3847"
          x1="11.127"
          y1="5.45459"
          x2="11.127"
          y2="18.5455"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A1AEE5" />
          <stop offset="1" stopColor="#A1AEE5" stopOpacity="0" />
        </linearGradient>
        <clipPath id="clip0_2945_3847">
          <rect
            width="20.9455"
            height="22.1091"
            fill="white"
            transform="translate(0.654297 0.945312)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
