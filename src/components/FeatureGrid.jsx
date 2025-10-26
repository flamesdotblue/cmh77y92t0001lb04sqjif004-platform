import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { initScrollReveal } from "../animations/scrollReveal";

const features = [
  {
    title: "Strategy & Positioning",
    desc: "Clarify your value, define messaging, and align teams with a measurable growth plan.",
    badge: "Clarity First",
  },
  {
    title: "Motion Design System",
    desc: "Reusable animation primitives for cohesive, performant interactions across your product.",
    badge: "GSAP/Framer",
  },
  {
    title: "Web Experience",
    desc: "Ship stunning, accessible sites with scroll‑based storytelling and conversion‑ready UX.",
    badge: "Next.js/Vite",
  },
  {
    title: "Optimization",
    desc: "Speed, SEO, and a11y audits to keep your experience fast, discoverable, and inclusive.",
    badge: "Core Web Vitals",
  },
];

export default function FeatureGrid() {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (sectionRef.current) initScrollReveal(sectionRef.current);
  }, []);

  return (
    <section id="services" ref={sectionRef} className="relative mx-auto max-w-7xl px-6 py-20 sm:py-24">
      <div className="mx-auto mb-10 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="reveal-up text-3xl font-semibold text-white sm:text-4xl"
        >
          Services engineered for scale
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05, ease: "easeOut" }}
          className="reveal-up mt-3 text-neutral-300"
        >
          A composable stack of strategy, design, and development to help modern teams move faster.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((f, i) => (
          <motion.article
            key={f.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.06, ease: "easeOut" }}
            className="reveal-up group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-md"
          >
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-1 text-[10px] uppercase tracking-wider text-neutral-300">
              {f.badge}
            </div>
            <h3 className="text-lg font-semibold text-white">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-neutral-300">{f.desc}</p>
            <div className="mt-5 flex items-center gap-2 text-sm text-cyan-300">
              <span>Learn more</span>
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
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
