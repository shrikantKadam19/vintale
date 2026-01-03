"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bannerStyle from "@/styles/banner.module.scss";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function SectionFour({ bottleRef }) {
  const sectionRef = useRef(null);
  
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
        y: -370,
        x: 0,
        scale: 0.4,
        width: 40,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      };

      if (isMobile) {
        bottleAnimation.y = 1200;
        bottleAnimation.scale = 0.4;
        bottleAnimation.width = 10;
      }

      gsap.to(bottleRef.current, bottleAnimation);
    }, sectionRef);

    return () => ctx.revert();
  }, [isMobile, bottleRef]);

  return (
    <section ref={sectionRef} className={bannerStyle.vintaleVault}>
      <div className="mx-auto max-w-7xl px-4">
        <h2>The Vintale Vault</h2>

        <div className={bannerStyle.variantsWrap}>
          <div className={bannerStyle.variant}>
            <div className={bannerStyle.imageWrap}>
              <Image src="/images/gold.png" width={363} height={588} alt="Gold" />
            </div>
            <h3>$129</h3>
            <h4>Golden Chard</h4>
          </div>

          <div className={bannerStyle.variant}>
            <div className={bannerStyle.imageWrap}>
              <Image src="/images/red.png" width={363} height={588} alt="Red" />
            </div>
            <h3>$149</h3>
            <h4>Scarlet Merlot</h4>
          </div>

          <div className={bannerStyle.variant}>
            <div className={bannerStyle.imageWrap}>
              <Image src="/images/rose.png" width={363} height={588} alt="Rose" className={bannerStyle.mobImage} />
            </div>
            <h3>$179</h3>
            <h4>Blossom Rosé</h4>
          </div>

          <div className={bannerStyle.variant}>
            <div className={bannerStyle.imageWrap}>
              <Image src="/images/green.png" width={363} height={588} alt="Green" />
            </div>
            <h3>$189</h3>
            <h4>Verdant Grove</h4>
          </div>

          <div className={bannerStyle.variant}>
            <div className={bannerStyle.imageWrap}>
              <Image src="/images/purple.png" width={363} height={588} alt="Purple" />
            </div>
            <h3>$149</h3>
            <h4>Purple Malbec</h4>
          </div>
        </div>

        <div className={bannerStyle.note}>
          <span>Each bottle contains 750ml of carefully crafted wine</span>
        </div>
      </div>
    </section>
  );
}
