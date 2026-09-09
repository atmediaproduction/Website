"use client";

import { motion } from "framer-motion";
import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";



export const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
});

export const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const fonts = {
  display: bebas.style.fontFamily,
  body: dmSans.style.fontFamily,
  mono: dmMono.style.fontFamily,
};

const colors = {
  black: "#0a0a0a",
  white: "#f5f0e8",
  accent: "#df3c3c",
  grey: "#1a1a1a",
  mid: "#2e2e2e",
  muted: "#888",
};


export default function TeamHero() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 overflow-hidden min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-t from-black to-[#4e1515]">
      {/* Ambient glows */}
      {/* <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(223,60,60,0.5) 0%, transparent 70%)" }}
      />
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(223,60,60,0.5), transparent)" }} /> */}

      <div className="relative z-10 max-w-5xl mx-auto text-center ">


        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-6xl lg:text-7xl font-black uppercase text-white mt-12"
          style={{

            fontFamily: fonts.display,
            fontSize: "clamp(52px, 10vw, 140px)",
            lineHeight: 0.95,
            letterSpacing: "0.02em",
            marginBottom: 28,
            color: colors.white,
            textAlign: "center",
          }}
        >
          Meet the People Behind {" "}
          <span
            className=" block sm:inline"
            style={{ fontStyle: "italic", fontWeight: 400, color: "#df3c3c" }}
          >
            ATMEDIA
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-8 text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
        >
          Three people. Three strengths. One vision.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-4 text-sm sm:text-base text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          AT MEDIA is being built at the intersection of media, creativity and
          execution. Our team brings together different strengths, but we
          share the same goal: to build better content and eventually build
          media properties of our own.
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="h-px w-24 mx-auto mt-12 rounded-full"
          style={{ background: "linear-gradient(to right, transparent, rgba(223,60,60,0.6), transparent)", transformOrigin: "center" }}
        />
      </div>
    </section>
  );
}
