import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], ["0px", "-120px"]);
  const y2 = useTransform(scrollYProgress, [0, 1], ["0px", "-60px"]);

  return (
    <header ref={ref} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div style={{ y: y1 }} className="absolute inset-x-0 -top-40 h-[60vh] rounded-b-[60px] blur-2xl" aria-hidden>
          <div className="h-full w-full bg-gradient-to-b from-cyan-400/20 via-cyan-500/10 to-transparent" />
        </motion.div>
        <motion.div style={{ y: y2 }} className="absolute inset-x-0 top-10 h-[40vh] rounded-b-[80px] blur-3xl" aria-hidden>
          <div className="h-full w-full bg-[radial-gradient(60%_60%_at_50%_0%,rgba(34,211,238,0.25),transparent)]" />
        </motion.div>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-6 pb-28 pt-28 sm:pt-32 md:pt-40">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-white/5 px-3 py-1 text-xs text-cyan-200/90 backdrop-blur-md"
        >
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
          Next‑gen animated site template
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-center text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl"
        >
          Scale your brand with motion‑first design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: "easeOut" }}
          className="mt-5 max-w-2xl text-center text-base leading-relaxed text-neutral-300 sm:text-lg"
        >
          A modern React + Tailwind scaffold with premium animations and scroll‑based storytelling. Built for agencies and product teams.
        </motion.p>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row">
          <CTAButton href="#services" label="Explore Services" />
          <CTAButton href="#work" label="View Showcase" variant="ghost" />
        </div>

        <div className="mt-14 grid w-full max-w-5xl grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { k: "clients", v: "120+", d: "Happy clients" },
            { k: "projects", v: "340+", d: "Projects delivered" },
            { k: "uptime", v: "99.9%", d: "Site uptime" },
            { k: "rating", v: "4.9/5", d: "Average rating" },
          ].map((item, i) => (
            <motion.div
              key={item.k}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.08, ease: "easeOut" }}
              className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-md"
            >
              <div className="text-2xl font-semibold text-white">{item.v}</div>
              <div className="text-sm text-neutral-400">{item.d}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </header>
  );
}

function CTAButton({ href, label, variant = "solid" }) {
  const isGhost = variant === "ghost";
  return (
    <motion.a
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      href={href}
      className={[
        "group inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors",
        isGhost
          ? "border border-white/15 bg-white/5 text-white hover:bg-white/10"
          : "bg-cyan-500 text-neutral-900 hover:bg-cyan-400",
      ].join(" ")}
    >
      <span>{label}</span>
      <span
        className={[
          "inline-flex h-6 w-6 items-center justify-center rounded-full transition-transform",
          isGhost ? "bg-white/10" : "bg-neutral-900",
        ].join(" ")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="h-3.5 w-3.5 group-hover:translate-x-0.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
        </svg>
      </span>
    </motion.a>
  );
}
