"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerStyle from "@/styles/banner.module.scss";
import Image from "next/image";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFive({ bottleRef }) {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const buttonRef = useRef(null);
  const offerRef = useRef(null);
  const endProductRef = useRef(null);

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
        y: 900,
        x: 2000,
        scale: 3,
        width: 30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      };

      if (isMobile) {
        bottleAnimation.y = 1500;
        bottleAnimation.x = 800;
        bottleAnimation.scale = 5;
      }

      gsap.to(bottleRef.current, bottleAnimation);

      gsap.from(headingRef.current, {
        opacity: 0,
        y: 80,
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 3,
        },
      });

      gsap.from(buttonRef.current, {
        y: 10,
        scrollTrigger: {
          trigger: buttonRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: 3,
        },
      });

      gsap.from(offerRef.current, {
        y: 50,
        scrollTrigger: {
          trigger: offerRef.current,
          start: "top 80%",
          end: "top 60%",
          scrub: true,
        },
      });

      gsap.set(endProductRef.current, {
        autoAlpha: 0,
        y: 0,
      });

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",

        onEnter: () => {
          gsap.to(endProductRef.current, {
            autoAlpha: 1,
            y: 0,
            ease: "power2.out",
          });
        },

        onLeaveBack: () => {
          gsap.to(endProductRef.current, {
            autoAlpha: 0,
            y: 0,
            ease: "power2.in",
          });
        },
      });

    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, bottleRef]);

  return (
    <section ref={sectionRef} className={bannerStyle.shopNowWrap}>
      <div className="mx-auto max-w-7xl px-4">
        <div className={bannerStyle.logoWrap}>
          <Link href="/">
            <Image src="/images/main-logo.svg" alt="Vintale" width={171} height={32} priority />
          </Link>
        </div>

        <ul>
          <li><Link href="/">Collections</Link></li>
          <li><Link href="/">Our Story</Link></li>
          <li><Link href="/">Journal</Link></li>
          <li><Link href="/">Contact</Link></li>
        </ul>

        <h2 ref={headingRef}>
          Let the <br /><span>Moments</span> <br />Pour.
        </h2>

        <div className={bannerStyle.ctaWrap}>
          <Link href="/" className="shop-now m-0" ref={buttonRef}>
            Shop Now <span></span>
          </Link>

          <div className={bannerStyle.offer} ref={offerRef}>
            <h3>
              25% <span>OFF</span>
            </h3>
          </div>
        </div>
      </div>

      <div className={bannerStyle.endProduct} ref={endProductRef}>
        <Image src={"/images/end-fream.png"} width={597} height={1024} alt="" className={bannerStyle.forDesktop} />
      </div>
      <div className={bannerStyle.endProduct}>
        <Image src={"/images/rose-img-mob.png"} width={555} height={594} alt="" className={bannerStyle.forMobile} />
      </div>
    </section>
  );
}
