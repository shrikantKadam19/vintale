"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import bannerStyle from "@/styles/banner.module.scss";

gsap.registerPlugin(ScrollTrigger);

export default function SectionThree({ bottleRef }) {
  const sectionRef = useRef(null);
  const featuresListRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const items = featuresListRef.current.querySelectorAll("li");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { y: 0 },
          {
            y: -50,
            ease: "none",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom top",
              scrub: 2,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [bottleRef]);

  return (
    <>
      <section ref={sectionRef} className={bannerStyle.features}>
        <div className={bannerStyle.prodMobImage}>
          <Image src="/images/rose-main.svg" width={821} height={1003} alt="Rose" priority />
        </div>
      </section>

      <div
        ref={featuresListRef}
        className={`${bannerStyle.featuresList} mx-auto flex max-w-7xl px-4`}
      >
        <ul>
          <li>
            <span>
              <Image src="/images/icon-01.svg" width={80} height={80} alt="" />
            </span>
            <h3>
              Quick <br /> Delivery
            </h3>
          </li>

          <li>
            <span>
              <Image src="/images/icon-02.svg" width={80} height={80} alt="" />
            </span>
            <h3>
              Easy <br /> Returns
            </h3>
          </li>

          <li>
            <span>
              <Image src="/images/icon-03.svg" width={80} height={80} alt="" />
            </span>
            <h3>
              Quality <br /> Assured
            </h3>
          </li>

          <li>
            <span>
              <Image src="/images/icon-04.svg" width={80} height={80} alt="" />
            </span>
            <h3>
              Secure <br /> Payment
            </h3>
          </li>

          <li>
            <span>
              <Image src="/images/icon-05.svg" width={80} height={80} alt="" />
            </span>
            <h3>
              Eco <br /> Friendly
            </h3>
          </li>
        </ul>
      </div>
    </>
  );
}
