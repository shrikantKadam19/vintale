"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Header from "../common/header";
import bannerStyle from "@/styles/banner.module.scss";

import SectionOne from "./sectionOne";
import SectionTwo from "./sectionTwo";
import SectionThree from "./sectionThree";
import SectionFour from "./sectionFour";
import SectionFive from "./sectionFive";
import Bottle from "./bottle";

gsap.registerPlugin(ScrollTrigger);

export default function HomeWrapper() {
  const headerRef = useRef(null);
  const bottleRef = useRef(null);

  useEffect(() => {
    if (!headerRef.current) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        start: 0,
        end: "max",
        onUpdate: (self) => {
          if (self.scroll() > 50) {
            gsap.to(headerRef.current, {
              yPercent: -100,
              duration: 0.3,
              ease: "power1.out",
            });
          } else {
            gsap.to(headerRef.current, {
              yPercent: 0,
              duration: 0.3,
              ease: "power1.inOut",
            });
          }
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <>
      <Header ref={headerRef} />
      <Bottle ref={bottleRef} />

      <main className={bannerStyle.commonSection}>
        <SectionOne bottleRef={bottleRef} />
        <SectionTwo bottleRef={bottleRef} />
        <SectionThree bottleRef={bottleRef} />
        <SectionFour bottleRef={bottleRef} />
        <SectionFive bottleRef={bottleRef} />
      </main>
    </>
  );
}
