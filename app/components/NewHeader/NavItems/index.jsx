import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { links} from "./data";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from "next/link";


export default function index() {
  return (
    <div className=" z-10 h-[100%] text-black p-10">
      <div className="flex-grow">
        <NavText />
      </div>
      <div className="bottom-0 mt-4">
        <FooterText />
      </div>
    </div>
  );
}

export function NavText() {
  const body = useRef(null);

  //once: once in view, useview will stop observing
  //-75 margin, activates when it is 75% in view

  //overflow hidden. hids children.
  //y is initially set to 100% and will be set to 0 once it is in view
  //
  const animation = {
    initial: { y: "100%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.075 * i,
      },
    }),
  };

  return (
    <div ref={body} className="">
      {links.map((link, index) => {
        return (
          <div key={index} className="margin-0 text-3xl overflow-hidden mb-4">
            <Link href={link.href}>
              <motion.p
                custom={index}
                variants={animation}
                initial="initial"
                animate={"enter"}
              >
                {link.title}
              </motion.p>
            </Link>
          </div>
        );
      })}
    </div>
  );
}

export function FooterText() {
  const body = useRef(null);

  //once: once in view, useview will stop observing
  //-75 margin, activates when it is 75% in view

  //overflow hidden. hids children.
  //y is initially set to 100% and will be set to 0 once it is in view
  //
  const animation = {
    initial: { y: "150%" },
    enter: (i) => ({
      y: "0",
      transition: {
        duration: 0.75,
        ease: [0.33, 1, 0.68, 1],
        delay: 0.125 * i,
      },
    }),
  };

  return (
    <div ref={body} className="flex flex-row gap-4 ">
      <div className="margin-0 text-sm overflow-hidden mb-4">
        <Link target="_blank" href="https://github.com/AlexSteeves">
          <motion.p
            custom={1}
            variants={animation}
            initial="initial"
            animate={"enter"}
          >
            <FaGithub className="h-8 w-8 hover:text-accent duration-300" />
          </motion.p>
        </Link>
      </div>

      <div className="margin-0 text-sm overflow-hidden mb-4">
        <a
          target="_blank"
          href="https://www.linkedin.com/in/alexander-steeves/"
        >
          <motion.p
            custom={2}
            variants={animation}
            initial="initial"
            animate={"enter"}
          >
         
            <FaLinkedin className="h-8 w-8 hover:text-accent duration-300" />
          </motion.p>
        </a>
      </div>

      <div className="margin-0 text-sm overflow-hidden mb-4">
        <a
          target="_blank"
          href="/Resume/Resume.pdf" className = "hover:text-accent duration-300"
        >
          <motion.p
            custom={3}
            variants={animation}
            initial="initial"
            animate={"enter"}
            className="text-xl"
          >
            
            Resume
          </motion.p>
        </a>
      </div>

      <div className="margin-0 overflow-hidden mb-4">
        <a target="_blank" href="mailto:alqusteeves@gmail.com" className = "hover:text-accent duration-300">
        <motion.p
            custom={2}
            variants={animation}
            initial="initial"
            animate={"enter"}
          >
         
            <FaEnvelope className="h-8 w-8 hover:text-accent duration-300" />
          </motion.p>
        </a>
      </div>
    </div>
  );
}


