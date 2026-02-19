import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Summary({ videoRef }) {
  const aboutSection = useRef(null);
  const aboutTextSection = useRef(null);

  useGSAP(() => {

  if (!videoRef.current) return;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: aboutSection.current,
      start: "top bottom",
      end: "+=1400",
      scrub: 2,
    }
  });

  tl.to(videoRef.current, {
    x: "30vw",
    y: "2vh",
    scale: 1.2,
    ease: "none"
  })
  .from(aboutTextSection.current, {
    xPercent: -50,
    opacity: 0,
    ease: "none"
  }, "<")  

  .to(videoRef.current, {
    x: "80vw",      
    scale: 0.9,
    ease: "none"
  })
  .to(aboutTextSection.current, {
    x: "-60vw",     
    ease: "none"
  }, "<");

}, { scope: aboutSection });

  return (
    <section
      ref={aboutSection}
      id="about"
      className="relative w-screen min-h-screen bg-[#DDDDE1] flex flex-col justify-center px-10 md:px-20 py-20"
    >
      <div
        ref={aboutTextSection}
        className="w-full py-7 md:w-1/2 flex flex-col gap-8 z-20"
      >
        <h2
          className="text-5xl md:text-7xl font-bold text-[#2563EB] uppercase leading-none"
          id="Name"
        >
          Behind <br /> <span className="text-[#14213d]">The Code</span>
        </h2>

        <div className="flex flex-col gap-2 text-[#14213d] text-xl md:text-2xl leading-relaxed max-w-xl">
          <p>
            I design and build digital experiences where performance meets
            aesthetics. From backend logic to polished interfaces, I focus on
            creating scalable systems that feel intuitive and impactful. Every
            project I craft is driven by clarity, precision, and a strong
            attention to detail.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Summary;
