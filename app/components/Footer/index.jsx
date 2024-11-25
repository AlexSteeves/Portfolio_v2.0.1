"use client";
/*eslint-disable react/no-unescaped-entities*/
import { useRef, useEffect } from "react";
import { useScroll } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.scss";
export default function Index() {
  const container = useRef();
  const paths = useRef([]);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  });

  useEffect(() => {
    scrollYProgress.on("change", (e) => {
      paths.current.forEach((path, i) => {
        path.setAttribute("startOffset", -20 + i * 40 + e * 20 + "%");
      });
    });
  }, [scrollYProgress]);

  return (
    <div ref={container}>
      <svg className="w-full mb-28" viewBox="0 0 250 90">
        <path
          id="curve"
          fill="none"
          stroke="none"
          d="m0,88.5c61.37,0,61.5-68,126.5-68,58,0,51,68,123,68"
        />
        <text className="text-[7px] uppercase " style={{ fill: "#F5F5F5" }}>
          {[...Array(3)].map((_, i) => {
            return (
              <textPath
                key={i}
                ref={(ref) => (paths.current[i] = ref)}
                href="#curve"
              >
                Don't Hesitate to Reach Out
              </textPath>
            );
          })}
        </text>
      </svg>
      <StickyBottom />
    </div>
  );
}

const StickyBottom = () => {
  return (
    <div
      className="bg-black h-[200px] relative"
      style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
    >
      <div className="relative h-[calc(100vh+200px)] -top-[100vh]">
        <div className="h-[200px] sticky top-[calc(100vh-200px)] flex justify-center flex-row gap-4 md:gap-8 xl:gap-16 items-center text-white">
          <a target="_blank" href="https://github.com/AlexSteeves">
            <FaGithub className="h-10 w-10 hover:text-accent duration-300  " />
          </a>

          <a
            target="_blank"
            href="https://www.linkedin.com/in/alexander-steeves/"
          >
            <FaLinkedin className="h-10 w-10 hover:text-accent duration-300" />
          </a>

          <a
            target="_blank"
            href="/Resume/Resume.pdf"
            className=" duration-300 uppercase text-xl tracking-[0.1em] relative"
          >
            <p className="footer-text">Resume</p>
          </a>
          <a
            target="_blank"
            href="mailto:alqusteeves@gmail.com"
            className="hover:text-accent duration-300"
          >
            <FaEnvelope className="w-8 h-8 hover:text-accent duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};
