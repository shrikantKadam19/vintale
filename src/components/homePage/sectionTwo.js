"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerStyle from "@/styles/banner.module.scss";
import Link from "next/link";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SectionTwo({ bottleRef }) {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const buttonRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const bottleAnimation = {
        y: -700,
        x: 0,
        scale: 1.2,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      };

      if (isMobile) {
        bottleAnimation.y = 400;
        bottleAnimation.scale = 1.2;
      }

      gsap.to(bottleRef.current, bottleAnimation);

      gsap.from(leftColRef.current, {
        opacity: 0,
        x: -70,
        duration: 1,
        scrollTrigger: {
          trigger: leftColRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(rightColRef.current, {
        opacity: 0,
        x: 70,
        duration: 1,
        scrollTrigger: {
          trigger: rightColRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 2,
        },
      });

      gsap.from(buttonRef.current, {
        opacity: 0,
        y: 30,
        duration: 1,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, bottleRef]);

  return (
    <section ref={sectionRef} className={bannerStyle.productDetail}>
      <div className="mx-auto flex max-w-7xl px-4">
        <div className={bannerStyle.prodInfo}>
          <div className={bannerStyle.leftCol} ref={leftColRef}>
            <h2>Timeless Craft</h2>
            <p>
              From sun-soaked vineyards to your table, our journey begins with a deep-rooted passion for craftsmanship and authenticity. We collaborate with small-batch winemakers who carry generations of wisdom, honoring time-tested traditions passed down through families and regions. Their process is slow, intentional, and guided by the rhythms of the land — from hand-picking grapes at peak ripeness to aging in seasoned oak barrels that add depth and complexity.
            </p>
          </div>

          <div className={bannerStyle.rightCol} ref={rightColRef}>
            <h2>About Vintale</h2>
            <p>
              Vintale began with a belief that wine should offer more than taste. Founded by friends with a passion for tradition and storytelling, we curate wines that reflect the craft and care of the people who make them. From small family-run vineyards to quiet cellars, our selections are rooted in heritage and chosen for their character. It's not just wine, it's what brings people together. Every bottle invites a story. Every sip celebrates a moment.
            </p>

            <div className="button-wrap" ref={buttonRef}>
              <Link href="/" className="shop-now">
                Shop Now <span></span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}
