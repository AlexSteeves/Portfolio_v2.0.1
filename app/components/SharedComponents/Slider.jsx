"use client";
import {
  scrollYProgress,
  useScroll,
  motion,
  useTransform,
} from "framer-motion";
import { useRef } from "react";

export default function Slider({ text, direction }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [-150 * direction, 150 * direction]
  );

  return (
    <div className="h-fill overflow-hidden bg-[#0F413F]" ref={container}>
      <motion.div
        className="whitespace-nowrap flex relative"
        style={{ x, left: "-40%" }}
      >
        <p
          className="uppercase whitespace-nowrap mx-5 font-semibold text-[#F5F5F5]"
          style={{ fontSize: "calc(16px + 5vw)" }}
        >
          {text}
        </p>
        <p
          className="uppercase whitespace-nowrap mx-5 font-semibold text-[#F5F5F5]"
          style={{ fontSize: "calc(16px + 5vw)" }}
        >
          {text}
        </p>
        <p
          className="uppercase whitespace-nowrap mx-5 font-semibold text-[#F5F5F5]"
          style={{ fontSize: "calc(16px + 5vw)" }}
        >
          {text}
        </p>
        <p
          className="uppercase whitespace-nowrap mx-5 font-semibold text-[#F5F5F5]"
          style={{ fontSize: "calc(16px + 5vw)" }}
        >
          {text}
        </p>
        <p
          className="uppercase whitespace-nowrap mx-5 font-semibold text-[#0F413F]"
          style={{ fontSize: "calc(16px + 5vw)" }}
        >
          {text}
        </p>
      </motion.div>
    </div>
  );
}
