import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import AboutUs from "./AboutUs";
import WhoWeAre from "./WhoWeAre";
import Partners from "./Partners";
import Careers from "./Careers";
import ContactUs from "./ContactUs";

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
  const partnersRef = useRef(null);
  const careersRef = useState(null);
  const contactUsRef = useState(null);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartTypewriter(true);
    }, 500);
    return () => clearTimeout(delay);
  }, []);

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
            animate={{
              scale: readyToShrink ? 1.2 : 1.2,
              y: readyToShrink ? -150 : -150,
            }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight"
          >
            <div>
              {startTypewriter && (
                <>
                  <Typewriter
                    text="Data that drives,"
                    onComplete={() => setWriter1Done(true)}
                  />
                  {writer1Done && (
                    <div>
                      <Typewriter
                        text="Decisions that win"
                        className="text-red-500"
                        onComplete={() => setWriter2Done(true)}
                      />
                    </div>
                  )}
                </>
              )}
            </div>
          </motion.div>
          {showParagraph && (
            <motion.p
              className="text-base md:text-3xl text-gray-700"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              Where AI meets action and insights lead to Impact
            </motion.p>
          )}
        </div>

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
      <Partners ref={partnersRef} />
      <Careers ref={careersRef} />
      <ContactUs ref={contactUsRef} />
    </>
  );
}
