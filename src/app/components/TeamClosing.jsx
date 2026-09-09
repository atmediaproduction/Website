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

const pillars = [
  { label: "Media", who: "Navdeep builds the vision." },
  { label: "Creative", who: "Harsh builds the creative." },
  { label: "Operations", who: "Bhoomi builds the structure." },
];

export default function TeamClosing() {
  return (
    <section className="relative py-28 sm:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden border-t bg-gradient-to-t from-black to-[#4e1515]"
      style={{ borderColor: "rgba(223,60,60,0.1)" }}>
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(223,60,60,0.1) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase mb-6"
          style={{ color: "rgba(223,60,60,0.8)" }}
        >
          Media × Creative × Operations
        </motion.p>

        {/* Three pillars */}
        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {pillars.map(({ label, who }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 sm:p-8"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(223,60,60,0.15)",
                backdropFilter: "blur(10px)",
              }}
            >
              <p
                className="text-2xl sm:text-3xl font-black mb-2 tracking-wide"
                style={{ color: "#df3c3c", fontFamily: "'Bebas Neue', serif" }}
              >
                {label}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">{who}</p>
            </motion.div>
          ))}
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight"
          style={{
            fontFamily: fonts.display,
            fontSize: "4rem",
            letterSpacing: "0.03em",
            lineHeight: 1,
            marginBottom: 16,
            color: colors.white,
            whiteSpace: "pre-line",
          }}
        >
          Together, we're building{" "}
          <span className="" style={{ fontStyle: "italic", fontWeight: 300, color: "#df3c3c" }}
          >
            AT MEDIA.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-gray-500 max-w-xl mx-auto leading-relaxed"
        >
          Not just another editing agency.{" "}
          <span className="text-white font-semibold">A media company.</span>
        </motion.p>
      </div>
    </section>
  );
}
