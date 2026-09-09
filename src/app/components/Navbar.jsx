
// import { Menu, X, MessageCircle } from 'lucide-react';
// import { motion, AnimatePresence } from 'framer-motion';
// import Image from 'next/image';

// const Navbar = () => {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const whatsappNumber = "919068737471";
//   const whatsappMessage = encodeURIComponent(
//     "Hi! I'm interested in your services. Let's discuss my project."
//   );
//   const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

//   const navLinks = [
//     { name: 'About', href: '#about' },
//     { name: 'Services', href: '#services' },
//     { name: 'Work', href: '#work' },
//   ];

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Close mobile menu on resize
//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth >= 768 && mobileMenuOpen) {
//         setMobileMenuOpen(false);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [mobileMenuOpen]);

//   return (
//     <>
//       <motion.nav
//         initial={{ y: -100, opacity: 0 }}
//         animate={{ y: 0, opacity: 1 }}
//         transition={{ duration: 0.5, ease: "easeOut" }}
//         className="fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] sm:w-[90%] max-w-2xl"
//       >
//         <motion.div
//           animate={{
//             backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.7)' : 'rgba(0, 0, 0, 0.4)',
//             borderColor: scrolled ? 'rgba(139, 92, 246, 0.3)' : 'rgba(139, 92, 246, 0.2)',
//           }}
//           transition={{ duration: 0.3 }}
//           className="glass-pro backdrop-blur-xl border rounded-full px-4 sm:px-6 py-3 shadow-2xl shadow-red-500/10"
//         >
//           <div className="flex items-center justify-between">
//             {/* Logo Section */}
//             <a href="#" className="flex items-center gap-2 sm:gap-3 group">
//               <motion.div
//                 whileHover={{ scale: 1.05, rotate: 5 }}
//                 transition={{ type: "spring", stiffness: 400, damping: 10 }}
//                 className="relative w-8 h-8 sm:w-40 sm:h-10 flex-shrink-0"
//               >

//                 <div className="relative w-full h-full transition-colors">
//                   <Image
//                     src="/atlogo.png"
//                     alt="Edit Wizard Logo"
//                     fill
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </motion.div>

//             </a>

//             {/* Desktop Menu */}
//             <div className="hidden md:flex items-center gap-1 lg:gap-2">
//               {navLinks.map((link, index) => (
//                 <motion.a
//                   key={link.name}
//                   href={link.href}
//                   initial={{ opacity: 0, y: -20 }}
//                   animate={{ opacity: 1, y: 0 }}
//                   transition={{ duration: 0.3, delay: index * 0.1 }}
//                   className="relative px-4 py-2 text-gray-300 hover:text-white transition-colors duration-200 text-sm lg:text-base font-medium group"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {link.name}
//                   <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-red-600 to-red-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
//                 </motion.a>
//               ))}

//               <motion.a
//                 href={whatsappLink}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 initial={{ opacity: 0, scale: 0.8 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 transition={{ duration: 0.3, delay: 0.3 }}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="ml-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-4 lg:px-5 py-2 rounded-full transition-all duration-200 text-sm lg:text-base font-bold shadow-lg shadow-red-500/30 flex items-center gap-2"
//               >
//                 <MessageCircle className="w-4 h-4" />
//                 <span className="hidden lg:inline">Let's Talk</span>
//                 <span className="lg:hidden">Talk</span>
//               </motion.a>
//             </div>

//             {/* Mobile Menu Button */}
//             <motion.button
//               whileTap={{ scale: 0.9 }}
//               onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//               className="md:hidden text-white p-2 rounded-full hover:bg-red-500/20 transition-colors border border-red-500/20"
//               aria-label="Toggle menu"
//             >
//               <AnimatePresence mode="wait">
//                 {mobileMenuOpen ? (
//                   <motion.div
//                     key="close"
//                     initial={{ rotate: -90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: 90, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <X className="h-5 w-5" />
//                   </motion.div>
//                 ) : (
//                   <motion.div
//                     key="menu"
//                     initial={{ rotate: 90, opacity: 0 }}
//                     animate={{ rotate: 0, opacity: 1 }}
//                     exit={{ rotate: -90, opacity: 0 }}
//                     transition={{ duration: 0.2 }}
//                   >
//                     <Menu className="h-5 w-5" />
//                   </motion.div>
//                 )}
//               </AnimatePresence>
//             </motion.button>
//           </div>
//         </motion.div>

//         {/* Mobile Menu */}
//         <AnimatePresence>
//           {mobileMenuOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -20, scale: 0.95 }}
//               animate={{ opacity: 1, y: 0, scale: 1 }}
//               exit={{ opacity: 0, y: -20, scale: 0.95 }}
//               transition={{ duration: 0.2 }}
//               className="md:hidden mt-2"
//             >
//               <div className="glass-pro backdrop-blur-xl bg-black/80 border border-red-500/20 rounded-2xl overflow-hidden shadow-2xl shadow-red-500/20">
//                 <div className="px-4 py-4 space-y-2">
//                   {navLinks.map((link, index) => (
//                     <motion.a
//                       key={link.name}
//                       href={link.href}
//                       initial={{ opacity: 0, x: -20 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.2, delay: index * 0.05 }}
//                       onClick={() => setMobileMenuOpen(false)}
//                       className="block text-gray-300 hover:text-white hover:bg-red-500/10 transition-all text-base font-medium text-center py-3 rounded-lg border border-transparent hover:border-red-500/30"
//                     >
//                       {link.name}
//                     </motion.a>
//                   ))}
//                   <motion.a
//                     href={whatsappLink}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.2, delay: navLinks.length * 0.05 }}
//                     onClick={() => setMobileMenuOpen(false)}
//                     className="block bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white text-center py-3 rounded-lg transition-all text-base font-bold shadow-lg shadow-red-500/30 flex items-center justify-center gap-2"
//                   >
//                     <MessageCircle className="w-4 h-4" />
//                     Let's Talk
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </motion.nav>

//       {/* Overlay when mobile menu is open */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 0.2 }}
//             onClick={() => setMobileMenuOpen(false)}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;


// "use client";

// import React, { useState, useEffect } from 'react';
// import GlobalLeadModal from './GlobalLeadModal';
// import { Bebas_Neue, DM_Sans, DM_Mono } from "next/font/google";

// export const bebas = Bebas_Neue({
//   weight: "400",
//   subsets: ["latin"],
// });

// export const dmSans = DM_Sans({
//   subsets: ["latin"],
// });

// export const dmMono = DM_Mono({
//   weight: ["400", "500"],
//   subsets: ["latin"],
// });

// const fonts = {
//   display: bebas.style.fontFamily,
//   body: dmSans.style.fontFamily,
//   mono: dmMono.style.fontFamily,
// };

// const colors = {
//   black: "#0a0a0a",
//   white: "#f5f0e8",
//   accent: "#df3c3c",
//   grey: "#1a1a1a",
//   mid: "#2e2e2e",
//   muted: "#888",
// };

// export default function Nav() {
//   const [scrolled, setScrolled] = useState(false);
//   useEffect(() => {
//     const fn = () => setScrolled(window.scrollY > 40);
//     window.addEventListener("scroll", fn);
//     return () => window.removeEventListener("scroll", fn);
//   }, []);
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <style>{`
// .nav-link { color: ${colors.muted}; text-decoration: none; font-size: 0.83rem; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 500; transition: color 0.2s; }
//     .nav-link:hover { color: ${colors.white}; }

//     @media (max-width: 1000px) {

//       .nav-links-wrap { display: none !important; }
//       }
//     `}</style>
//       <nav
//         style={{
//           position: "fixed",
//           top: 0,
//           left: 0,
//           right: 0,
//           zIndex: 100,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "space-between",
//           padding: "20px 5%",
//           background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.7)",
//           backdropFilter: "blur(14px)",
//           borderBottom: `1px solid ${scrolled ? "#1e1e1e" : "transparent"}`,
//           transition: "all 0.3s ease",
//         }}
//       >
//         <GlobalLeadModal
//           isOpen={open}
//           onClose={() => setOpen(false)}
//         />
//         <div
//           style={{
//             fontFamily: fonts.display,
//             fontSize: "2rem",
//             letterSpacing: "0.08em",
//             color: colors.accent,
//           }}
//         >
//           <a href="/" style={{ textDecoration: "none", color: colors.accent }}>
//             <img
//               src="/atlogo.png"
//               alt="AT Media"
//               style={{ height: 28, width: "auto" }}
//             />
//           </a>
//         </div>
//         <ul
//           className="nav-links-wrap"
//           style={{ display: "flex", gap: 24, listStyle: "none" }}
//         >
//           {["Services", "Process", "Who We Help", "Ambaa Talks"].map((item) => (
//             <li key={item}>
//               <a
//                 href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
//                 className="nav-link"
//               >
//                 {item}
//               </a>
//             </li>
//           ))}
//           <li>
//             <a
//               href="/our-team"
//               className="nav-link"
//             >
//               Our Team
//             </a>
//           </li>
//         </ul>
//         <button
//           onClick={() => setOpen(true)}
//           href="#audit"
//           style={{
//             background: colors.accent,
//             color: colors.black,
//             border: "none",
//             padding: "10px 22px",
//             fontFamily: fonts.body,
//             fontWeight: 700,
//             fontSize: "0.83rem",
//             letterSpacing: "0.05em",
//             textTransform: "uppercase",
//             cursor: "pointer",
//             textDecoration: "none",
//             transition: "opacity 0.2s",
//           }}
//         >
//           Free Audit
//         </button>
//       </nav>

//     </>
//   );
// };

"use client";

import React, { useState, useEffect } from 'react';
import GlobalLeadModal from './GlobalLeadModal';
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

const navItems = ["Services", "Process", "Who We Help", "Ambaa Talks"];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false); // lead modal
  const [menuOpen, setMenuOpen] = useState(false); // mobile hamburger menu

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  // lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleAuditClick = () => {
    setMenuOpen(false);
    setOpen(true);
  };

  return (
    <>
      <style>{`
        .nav-link { color: ${colors.muted}; text-decoration: none; font-size: 0.83rem; letter-spacing: 0.06em; text-transform: uppercase; font-weight: 500; transition: color 0.2s; }
        .nav-link:hover { color: ${colors.white}; }

        .hamburger-btn { display: none; }
        .mobile-menu-overlay { display: none; }

        @media (max-width: 1000px) {
          .nav-links-wrap { display: none !important; }
          .desktop-audit-btn { display: none !important; }
          .hamburger-btn { display: flex !important; }
        }
      `}</style>

      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "20px 5%",
          background: scrolled ? "rgba(10,10,10,0.95)" : "rgba(10,10,10,0.7)",
          backdropFilter: "blur(14px)",
          borderBottom: `1px solid ${scrolled ? "#1e1e1e" : "transparent"}`,
          transition: "all 0.3s ease",
        }}
      >
        <GlobalLeadModal isOpen={open} onClose={() => setOpen(false)} />

        <div
          style={{
            fontFamily: fonts.display,
            fontSize: "2rem",
            letterSpacing: "0.08em",
            color: colors.accent,
          }}
        >
          <a href="/" style={{ textDecoration: "none", color: colors.accent }}>
            <img
              src="/atlogo.png"
              alt="AT Media"
              style={{ height: 28, width: "auto" }}
            />
          </a>
        </div>

        {/* Desktop links */}
        <ul
          className="nav-links-wrap"
          style={{ display: "flex", gap: 24, listStyle: "none" }}
        >
          {navItems.map((item) => (
            <li key={item}>
              <a href={`/#${item.toLowerCase().replace(/ /g, "-")}`} className="nav-link">
                {item}
              </a>
            </li>
          ))}
          <li>
            <a href="/our-team" className="nav-link">
              Our Team
            </a>
          </li>
        </ul>

        {/* Desktop Free Audit button */}
        <button
          className="desktop-audit-btn"
          onClick={handleAuditClick}
          style={{
            background: colors.accent,
            color: colors.black,
            border: "none",
            padding: "10px 22px",
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: "0.83rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            cursor: "pointer",
            transition: "opacity 0.2s",
          }}
        >
          Free Audit
        </button>

        {/* Hamburger button (mobile/tablet only) */}
        <button
          className="hamburger-btn"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            width: 32,
            height: 32,
            background: "transparent",
            border: "none",
            cursor: "pointer",
            zIndex: 110,
            position: "relative",
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: colors.white,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: colors.white,
              transition: "opacity 0.2s ease",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: colors.white,
              transition: "transform 0.3s ease, opacity 0.3s ease",
              transform: menuOpen ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 99,
          background: colors.black,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 32,
          opacity: menuOpen ? 1 : 0,
          visibility: menuOpen ? "visible" : "hidden",
          transform: menuOpen ? "translateY(0)" : "translateY(-16px)",
          transition: "opacity 0.3s ease, transform 0.3s ease, visibility 0.3s",
        }}
      >
        <ul style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 28, listStyle: "none", padding: 0, margin: 0 }}>
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`/#${item.toLowerCase().replace(/ /g, "-")}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: colors.white,
                  textDecoration: "none",
                  fontFamily: fonts.display,
                  fontSize: "2rem",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                }}
              >
                {item}
              </a>
            </li>
          ))}
          <li>
            <a
              href="/our-team"
              onClick={() => setMenuOpen(false)}
              style={{
                color: colors.white,
                textDecoration: "none",
                fontFamily: fonts.display,
                fontSize: "2rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}
            >
              Our Team
            </a>
          </li>
        </ul >

        <button
          onClick={handleAuditClick}
          style={{
            background: colors.accent,
            color: colors.black,
            border: "none",
            padding: "14px 32px",
            fontFamily: fonts.body,
            fontWeight: 700,
            fontSize: "0.9rem",
            letterSpacing: "0.05em",
            textTransform: "uppercase",
            cursor: "pointer",
            marginTop: 12,
          }}
        >
          Free Audit
        </button>
      </div >
    </>
  );
}