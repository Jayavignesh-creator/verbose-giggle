import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import AboutUs from "./AboutUs";
import WhoWeAre from "./WhoWeAre";

// Reusable Typewriter Component
const Typewriter = ({ text, delay = 0.2, className = "", onComplete }) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      transition: {
        staggerChildren: delay,
      },
    },
  };

  const child = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  useEffect(() => {
    const totalDuration = letters.length * delay * 1000;
    const timer = setTimeout(() => {
      onComplete?.();
    }, totalDuration);
    return () => clearTimeout(timer);
  }, [letters.length, delay, onComplete]);

  return (
    <motion.div
      className={`inline-block ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((char, index) => (
        <motion.span key={index} variants={child}>
          {char}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Home() {
  const [startTypewriter, setStartTypewriter] = useState(false);
  const [writer1Done, setWriter1Done] = useState(false);
  const [writer2Done, setWriter2Done] = useState(false);
  const [readyToShrink, setReadyToShrink] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  const aboutUsRef = useRef(null);
  const whoWeAreRef = useRef(null);

  // Delay typewriter start until large scale animation completes
  useEffect(() => {
    const delay = setTimeout(() => {
      setStartTypewriter(true);
    }, 500); // scale up delay before typewriter starts
    return () => clearTimeout(delay);
  }, []);

  // When both typewriters are done, trigger shrink and then paragraph fade-in
  useEffect(() => {
    if (writer1Done && writer2Done) {
      setReadyToShrink(true);
      setTimeout(() => {
        setShowParagraph(true);
      }, 1000);
    }
  }, [writer1Done, writer2Done]);

  const scrollToNext = () => {
    aboutUsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header />

      <section className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-white relative overflow-hidden">
        <div className="z-10 max-w-2xl w-full text-center flex flex-col items-center justify-center gap-6">
          <motion.div
            layout
            animate={{
              scale: readyToShrink ? 1.2 : 1.8,
              y: readyToShrink ? -50 : -150,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
          >
            {startTypewriter && (
              <>
                <Typewriter
                  text="Data that drives,"
                  onComplete={() => setWriter1Done(true)}
                />
                <br />
                <Typewriter
                  text="Decisions that win"
                  className="text-red-500"
                  onComplete={() => setWriter2Done(true)}
                />
              </>
            )}
          </motion.div>

          {showParagraph && (
            <motion.p
              className="text-base md:text-3xl text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Where <span className="text-primary-light text-bold">AI</span>{" "}
              meets action and insights lead to{" "}
              <span className="text-primary-light text-bold">Impact</span>
            </motion.p>
          )}
        </div>

        {/* Downward Arrow */}
        {showParagraph && (
          <motion.div
            className="mt-16 flex justify-center z-10 cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            onClick={scrollToNext}
          >
            <FiChevronDown className="text-red-600 text-4xl animate-bounce" />
          </motion.div>
        )}
      </section>

      <AboutUs ref={aboutUsRef} />
      <WhoWeAre ref={whoWeAreRef} />
    </>
  );
}
