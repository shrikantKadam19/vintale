"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerStyle from "@/styles/banner.module.scss";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function SectionOne({ bottleRef }) {
  const imageRef = useRef(null);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(bottleRef.current, {
        x: 0,
        y: 520,
        scale: 1.4,
        rotation: -10,
        opacity: 1,
      });

      gsap.to(bottleRef.current, {
        y: 900,
        scale: 1.2,
        rotation: 0,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.fromTo(
        imageRef.current,
        { scale: 0.6 },
        {
          scale: 3,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );

      gsap.from(titleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(paragraphRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.2,
        ease: "power2.out",
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.4,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [bottleRef]);

  return (
    <section ref={sectionRef} className="mx-auto flex max-w-7xl px-4">
      <div className={bannerStyle.mainSection}>
        <h1 ref={titleRef}>Taste Heritage</h1>

        <div className={bannerStyle.textWrap}>
          <p ref={paragraphRef}>
            Discover artisanal wines curated from <br />
            vineyards around the world. Every <br />
            bottle tells a story that is smooth, <br />
            bold and timeless.
          </p>

          <div className={bannerStyle.offer}>
            <h3>
              25% <span>OFF</span>
            </h3>
          </div>
        </div>

        <div className="button-wrap" ref={buttonRef}>
          <Link href="/" className="shop-now">
            Shop Now <span></span>
          </Link>
        </div>

        <div className="bg-wrapper" ref={imageRef}>
          <Image src="/images/bg-img.svg" alt="Background" width={940} height={470} priority />
        </div>

        <div className="product-mob">
          <Image src="/images/main-img.png" alt="Bottle" width={396} height={619} priority />
        </div>
      </div>
    </section>
  );
}
