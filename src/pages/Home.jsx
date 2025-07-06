import React, { useState, useEffect, useRef } from "react";
import Header from "../components/header";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import AboutUs from "./AboutUs";
import WhoWeAre from "./WhoWeAre";
import Partners from "./Partners";
import Careers from "./Careers";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

// Typewriter animation component
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
  const [showParagraph, setShowParagraph] = useState(false);

  const containerRef = useRef(null);
  const currentIndexRef = useRef(0);
  const isScrollingRef = useRef(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const delay = setTimeout(() => {
      setStartTypewriter(true);
    }, 500);
    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    if (writer1Done && writer2Done) {
      setTimeout(() => {
        setShowParagraph(true);
      }, 1000);
    }
  }, [writer1Done, writer2Done]);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrollingRef.current) return;

      e.preventDefault();

      const direction = e.deltaY > 0 ? 1 : -1;
      const nextIndex = currentIndexRef.current + direction;

      if (nextIndex < 0 || nextIndex >= sectionRefs.current.length) return;

      isScrollingRef.current = true;
      currentIndexRef.current = nextIndex;

      sectionRefs.current[nextIndex]?.scrollIntoView({
        behavior: "smooth",
      });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 1000);
    };

    const container = containerRef.current;
    container?.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      container?.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
      <Header />
      <div
        ref={containerRef}
        className="h-screen"
        style={{ scrollBehavior: "smooth" }}
      >
        <div className="h-screen">
          {/* Hero Section */}
          <section
            ref={(el) => (sectionRefs.current[0] = el)}
            className="min-h-screen flex flex-col justify-center items-center px-6 md:px-20 py-20 bg-white relative"
          >
            <div className="w-full max-w-4xl text-center relative">
              <div className="h-[24rem] flex flex-col items-center justify-center space-y-6">
                <div className="text-6xl md:text-8xl font-extrabold text-gray-900 leading-tight">
                  {startTypewriter && (
                    <Typewriter
                      text="Data that drives,"
                      onComplete={() => setWriter1Done(true)}
                    />
                  )}
                </div>

                {writer1Done && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: -20 }}
                    className="text-5xl md:text-8xl font-extrabold text-primary-light"
                  >
                    <Typewriter
                      text="Decisions that win"
                      onComplete={() => setWriter2Done(true)}
                    />
                  </motion.div>
                )}

                {/* Placeholder to reserve space, prevents shifting */}
                <div className="h-[3.5rem]">
                  <motion.p
                    className="text-base md:text-3xl text-gray-700"
                    initial={{ opacity: 0 }}
                    animate={showParagraph ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.6 }}
                  >
                    Where AI meets action and insights lead to Impact
                  </motion.p>
                </div>
              </div>
            </div>

            <div>
              <motion.div
                className="mt-16 flex justify-center z-10 cursor-pointer"
                initial={{ opacity: 0 }}
                animate={showParagraph ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                onClick={() => {
                  currentIndexRef.current = 1;
                  sectionRefs.current[1]?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                <FiChevronDown className="text-primary-light text-4xl animate-bounce" />
              </motion.div>
            </div>
          </section>

          {/* Remaining Sections */}
          <section ref={(el) => (sectionRefs.current[1] = el)}>
            <AboutUs />
          </section>
          <section ref={(el) => (sectionRefs.current[2] = el)}>
            <WhoWeAre />
          </section>
          <section ref={(el) => (sectionRefs.current[3] = el)}>
            <Partners />
          </section>
          <section ref={(el) => (sectionRefs.current[4] = el)}>
            <Careers />
          </section>
          <section ref={(el) => (sectionRefs.current[5] = el)}>
            <ContactUs />
          </section>
          <section ref={(el) => (sectionRefs.current[6] = el)}>
            <Footer />
          </section>
        </div>
      </div>
    </>
  );
}
