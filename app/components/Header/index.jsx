"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import NavItems from "./NavItems";

const menu = {
  open: {
    width: "350px",
    height: "fit-content",
    top: "-25px",
    right: "-25px",
    transition: { duration: 0.2, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "100px",
    height: "40px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.25,
      delay: 0.35,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

export default function Index() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <p
        className="fixed z-50 top-[35px] left-[20px] md:left-[35px] 
               uppercase text-lg lg:text-xl
               text-white mix-blend-difference
               "
      >
        Alex Steeves
      </p>

      <div className={styles.header}>
        <motion.div
          className={styles.menu}
          variants={menu}
          animate={isActive ? "open" : "closed"}
          initial="closed"
        >
          <AnimatePresence>{isActive && <NavItems />}</AnimatePresence>
        </motion.div>
        <Button
          isActive={isActive}
          toggleMenu={() => {
            setIsActive(!isActive);
          }}
        />
      </div>
    </>
  );
}
