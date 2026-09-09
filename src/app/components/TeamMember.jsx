"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Linkedin, Play } from "lucide-react";
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

/**
 * Large, editorial-style team member block.
 * Alternates image / text sides based on `reverse`.
 *
 * props:
 *  - name, role, bio (string)
 *  - quote (optional string) — pull quote instead of / in addition to bio
 *  - image (string) — portrait path
 *  - number (string) — e.g. "01"
 *  - link ({ href, label, icon: "linkedin" | "play" }) — optional CTA
 *  - reverse (bool) — flip image/text sides on desktop
 */
export default function TeamMember({
  name,
  role,
  bio,
  quote,
  image,
  number,
  link,
  reverse = false,
}) {
  const LinkIcon = link?.icon === "linkedin" ? Linkedin : link?.icon === "play" ? Play : ArrowUpRight;

  return (
    <div className="relative py-16 sm:py-24 border-t" style={{ borderColor: "rgba(243, 68, 68, 0.1)" }}>
      <div
        className={`max-w-6xl mx-auto grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${reverse ? "lg:[&>*:first-child]:order-2" : ""
          }`}
      >
        {/* ── Portrait ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative group"
        >
          <div
            className="absolute -inset-3 rounded-[2rem] opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-70"
            style={{ background: "radial-gradient(circle, rgba(223,60,60,0.35) 0%, transparent 70%)" }}
          />
          <div
            className="relative w-full overflow-hidden rounded-3xl border"
            style={{ aspectRatio: "4/5", borderColor: "rgba(223,60,60,0.2)" }}
          >
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover grayscale-[15%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 40%)" }}
            />
            {/* Number watermark */}
            <span
              className="absolute top-5 left-6 text-6xl font-black leading-none select-none"
              style={{
                WebkitTextStroke: "1px rgba(255,255,255,0.35)",
                color: "transparent",
                fontFamily: "'Syne', sans-serif",
              }}
            >
              {number}
            </span>
          </div>
        </motion.div>

        {/* ── Text ── */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-5"
        >
          <div>
            <p
              className="text-[11px] tracking-[0.2em] uppercase font-semibold mb-3"
              style={{ color: "rgba(223,60,60,0.85)" }}
            >
              {role}
            </p>
            <h2
              className="text-4xl sm:text-5xl font-black text-white leading-[1.05] tracking-tight"
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
              {name}
            </h2>
          </div>

          {bio && (
            <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
              {bio}
            </p>
          )}

          {quote && (
            <div
              className="relative rounded-2xl p-6 mt-1 max-w-lg overflow-hidden"
              style={{ background: "rgba(223,60,60,0.06)", border: "1px solid rgba(223,60,60,0.2)" }}
            >
              <div
                className="absolute top-2 right-4 text-6xl font-black leading-none select-none pointer-events-none"
                style={{ color: "rgba(223,60,60,0.12)", fontFamily: "Georgia, serif" }}
              >
                "
              </div>
              <p
                className="text-base font-medium leading-relaxed italic"
                style={{ fontFamily: "'Playfair Display', serif", color: "rgba(248,180,180,0.9)" }}
              >
                "{quote}"
              </p>
            </div>
          )}

          {link && (
            <motion.a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="inline-flex items-center gap-2.5 mt-2 text-sm font-semibold w-fit group"
              style={{ color: "#df3c3c" }}
            >
              <span
                className="w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300 group-hover:bg-red-500/10"
                style={{ borderColor: "rgba(223,60,60,0.4)" }}
              >
                <LinkIcon className="w-4 h-4" />
              </span>
              {link.label}
              <ArrowRight className="w-4 h-4 -translate-x-1 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200" />
            </motion.a>
          )}
        </motion.div>
      </div>
    </div>
  );
}
