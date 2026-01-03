"use client";
import { forwardRef } from "react";
import Image from "next/image";
import bannerStyle from "@/styles/banner.module.scss";

const Bottle = forwardRef(function Bottle(props, ref) {
  return (
    <div ref={ref} className="bottle">
      <Image
        src="/images/rose-main.svg"
        width={821}
        height={1003}
        alt="Rose"
        priority
      />
    </div>
  );
});

export default Bottle;
