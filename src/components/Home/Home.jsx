import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "remixicon/fonts/remixicon.css";

gsap.registerPlugin(ScrollTrigger);

function Home({ videoRef }) {
  const name = useRef(null);
  const globe = useRef(null);
  const text = useRef(null);
  const location = useRef(null);
  const containerRef = useRef(null);

  useGSAP(
    () => {

      const video=videoRef.current;
      videoRef.current.play();
      gsap
      .to(globe.current, {
        rotation: 360,
        duration: 2,

        repeat: -1,
        ease: "none",
      });


      const master = gsap.timeline();

      master
        .from(name.current, {
          delay: 0.5,
          yPercent: -500,
          opacity: 0,
          duration: 2,
          ease: "none",
        });

      master
        .from(location.current, {
          xPercent: -100,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        })
        .from(
          text.current,
          {
            xPercent: 100,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
          },
          "<",
        );

      master
        .from(text.current.querySelectorAll("h2"), {
          xPercent: 100,
          opacity: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out",
        })
        .from(
          location.current.querySelectorAll("p"),
          {
            xPercent: -100,
            opacity: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          },
          "<",
        );


        
      
    },
    {
      scope: containerRef ,
    },
  );
  return (
    <div
      className="relative h-[100vh]  w-screen flex justify-center items-end bg-[#DDDDE1]"
      id="profile"
      ref={containerRef}
    >
      <video
        src="./video/HeroSectionVideo.mp4"
        className="fixed  top-40 left-1/2 -translate-x-1/2
             z-10 max-h-[80vh] lg:h-[40rem] w-auto
             object-contain"
        muted
        playsInline
        preload="auto"
        ref={videoRef}
        id="hero-video"
      ></video>

      <div
        className="absolute  top-20 flex flex-col gap-0 z-50 will-change-transform"
        ref={name}
      >
        <h3 className="text-3xl font-bold text-[#14213d] ">Hello, I'm</h3>
        <h1
          className="text-[5rem] leading-none font-bold text-[#2563EB] text-shadow-black text-shadow-sm"
          id="Name"
        >
          Gourav Sharma
        </h1>
      </div>

      <div
        className="z-10 absolute translate-y-[-50%] rounded-r-full h-[7rem] w-[15rem] top-[50vh] left-0 flex items-center justify-around bg-[#14213d] text-[#DDDDE1]"
        ref={location}
      >
        <div className="text-2xl leading-tight">
          <p>Located</p>
          <p>in</p>
          <p>India</p>
        </div>

        {/* Right Circle */}
        <div
          className="w-20 h-20 
                  bg-[#DDDDE1] 
                  rounded-full 
                  flex items-center justify-center
                  text-6xl text-[#2563EB]
                  "
        >
          <i class="ri-global-line" ref={globe}></i>
        </div>
      </div>

      <div
        className="absolute top-[50vh] translate-y-[-50%] right-0
        w-[25rem]
        flex flex-col gap-3
        items-end
        px-6 py-4 z-10
        bg-[#14213d]
        backdrop-blur-md
        rounded-l-full
        shadow-xl"
        ref={text}
      >
        {/* Text */}
        <div className="flex flex flex-col items-end flex-col leading-tight text-3xl font-bold text-[#DDDDE1]">
          <h2>Software</h2>
          <h2>Engineer & Web Developer</h2>
        </div>
      </div>
    </div>
  );
}

export default Home;
