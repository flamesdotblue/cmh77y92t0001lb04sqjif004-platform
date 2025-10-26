import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { initScrollReveal } from "../animations/scrollReveal";

export default function ParallaxShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-10%", "20%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 0.3, 0.1]);

  useEffect(() => {
    if (ref.current) initScrollReveal(ref.current);
  }, []);

  return (
    <section id="work" ref={ref} className="relative isolate mx-auto max-w-7xl px-6 py-24 sm:py-28">
      <motion.div
        style={{ y: bgY, opacity: glowOpacity }}
        aria-hidden
        className="pointer-events-none absolute -inset-x-10 -top-40 -z-10 h-[60vh] bg-[radial-gradient(60%_50%_at_50%_0%,rgba(34,211,238,0.25),transparent)] blur-2xl"
      />

      <div className="mx-auto max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="reveal-up text-3xl font-semibold text-white sm:text-4xl"
        >
          Scroll‑linked showcase
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="reveal-up mt-3 text-neutral-300"
        >
          Smooth, performant parallax that highlights product shots and case studies without compromising Core Web Vitals.
        </motion.p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {[1, 2, 3].map((i) => (
          <Card key={i} index={i} />
        ))}
      </div>

      <motion.div style={{ y: fgY }} className="mt-10 flex justify-center">
        <a
          href="#"
          className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/10"
        >
          See full case studies
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-6-6 6 6-6 6" />
          </svg>
        </a>
      </motion.div>
    </section>
  );
}

function Card({ index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 50%"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -10]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2000&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2000&auto=format&fit=crop",
  ];

  return (
    <motion.article
      ref={ref}
      style={{ y, opacity }}
      className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md"
    >
      <div className="relative aspect-[4/3] w-full">
        <img
          src={images[index - 1]}
          alt="Showcase"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          loading="lazy"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-neutral-950/0" />
      </div>
      <div className="p-5">
        <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-300">
          Case Study {index}
        </div>
        <h3 className="text-lg font-semibold text-white">High‑impact launch campaign</h3>
        <p className="mt-2 text-sm leading-relaxed text-neutral-300">
          Multi‑channel rollout with motion art direction, scroll‑linked narrative, and conversion‑first UX.
        </p>
      </div>
    </motion.article>
  );
}
