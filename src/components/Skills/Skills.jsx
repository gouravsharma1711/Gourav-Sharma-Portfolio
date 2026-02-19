import React from "react";

function Skills() {
  const skills = [
    { name: "HTML", icon: "ri-html5-line" },
    { name: "CSS", icon: "ri-css3-line" },
    { name: "React", icon: "ri-reactjs-line" },
    { name: "JavaScript", icon: "ri-javascript-line" },
    { name: "Tailwind", icon: "ri-tailwind-css-line" },
    { name: "Node.js", icon: "ri-nodejs-line" },
    { name: "Express", icon: "ri-server-line" },
    { name: "GSAP", icon: "ri-magic-line" },
    { name: "Git", icon: "ri-git-branch-line" },
    { name: "GitHub", icon: "ri-github-line" },
    { name: "MongoDB", icon: "ri-database-2-line" },
    { name: "MySQL", icon: "ri-database-line" },
  ];

  return (
    <section className="relative h-screen w-screen bg-[#DDDDE1] overflow-hidden flex items-center px-10 md:px-24">

      
      <div className="relative z-10 w-full flex flex-col justify-between h-[85%]">

        {/* Heading */}
        <div>
          <h2 className="text-5xl md:text-7xl font-extrabold text-[#14213d] leading-tight">
            Technical <span className="text-[#2563EB]">Stack</span>
          </h2>

          <p className="mt-4 text-lg md:text-xl text-[#14213d]/70 max-w-2xl">
            A refined collection of technologies I use to design, build,
            and scale high-performance web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 place-items-center">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                group flex flex-col items-center justify-center
                w-24 h-24 md:w-28 md:h-28
                rounded-2xl
                bg-white/50 backdrop-blur-md
                border border-white/40
                shadow-[0_8px_30px_rgba(37,99,235,0.15)]
                transition-all duration-500
                hover:-translate-y-3
                hover:shadow-[0_15px_40px_rgba(37,99,235,0.3)]
              "
            >
              <i className={`${skill.icon} text-3xl md:text-4xl text-[#2563EB] transition-transform duration-500 group-hover:scale-110`} />
              <span className="mt-2 text-xs md:text-sm font-semibold text-[#14213d] text-center">
                {skill.name}
              </span>
            </div>
          ))}

        </div>

        {/* Bottom Accent Line */}
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[#2563EB] to-transparent"></div>

      </div>

    </section>
  );
}

export default Skills;
