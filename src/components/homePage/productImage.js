"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function ProductImage() {
  const bottleRef = useRef(null);

  useEffect(() => {
  gsap.fromTo(
    bottleRef.current,
    { y: -160, rotation: -13, scale: 1.5 },
    {
      rotation: 0,
      y: 450,
      scale: 0.8,
      scrollTrigger: {
        trigger: bottleRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      immediateRender: false,
    }
  );
}, []);


  return (
    <div className="product-wrap">
      <Image ref={bottleRef} src="/images/rose-img.png" alt="Rose" width={922} height={1004} className="product-image" />
    </div>
  );
}
