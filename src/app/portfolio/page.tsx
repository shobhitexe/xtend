"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Portfolio() {
  const router = useRouter();

  useEffect(() => {
    router.push(
      "https://docs.google.com/document/d/1Dnq-hLCtbIV3llOQl_ycoW3OJKG1_011FipFnlksWYY/edit?usp=sharing"
    );
  }, []);

  return <></>;
}
