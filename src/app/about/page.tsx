"use client";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function About() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-3xl">
      <motion.div initial="hidden" animate="visible" variants={fadeUp}>
        <h1 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] leading-tight mb-12">
          I stopped being a designer
          <br />
          <span className="text-primary">a long time ago.</span>
        </h1>
      </motion.div>

      <div className="prose prose-lg max-w-none">
        <motion.p
          className="text-base-content/70 text-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
        >
          Not because I quit — because the title stopped fitting.
        </motion.p>
        <motion.p
          className="text-base-content/70 text-lg leading-relaxed mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
        >
          I started in 2019 making logos and marketing pages. Pretty stuff. Then
          I realized I was handing off work to engineers who rebuilt everything
          from scratch. The handoff was broken. So I learned to code.
        </motion.p>
        <motion.p
          className="text-base-content/70 text-lg leading-relaxed mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
        >
          Then I realized I was designing features nobody asked for. The
          discovery was broken. So I learned product strategy.
        </motion.p>
        <motion.p
          className="text-base-content/70 text-lg leading-relaxed mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
        >
          Now I do all three. I research, I design, I prototype in code, and I
          ship. At Crosby Health, I launched two healthcare products from
          scratch. At Atech, I designed air traffic systems for eVTOLs with a
          50-person engineering team. Right now, I&apos;m co-founding Agristato
          — building an agritech product from the ground up with my partners.
        </motion.p>
        {/* Pull quote */}
        <motion.blockquote
          className="border-l-4 border-primary pl-6 my-12"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.55 }}
        >
          <p className="text-2xl md:text-3xl font-[family-name:var(--font-display)] font-bold leading-snug">
            The old process had 47 steps between an idea and a user touching it.
            Mine closes that gap.
          </p>
        </motion.blockquote>
        {/* Workflow Video */}
        <motion.div
          className="my-12 rounded-2xl overflow-hidden bg-base-200"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="aspect-video relative">
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster="/videos/workflow-poster.jpg"
            >
              <source src="/videos/full-workflow.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="p-4 text-center">
            <p className="text-sm text-base-content/40">
              My actual workflow: from idea to deployed product in one session.
            </p>
          </div>
        </motion.div>
        <motion.p
          className="text-base-content/70 text-lg leading-relaxed mt-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          AI changed everything again.
        </motion.p>
        {/* Tools */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-base-content/40 mb-6">
            Tools I work with daily
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              "Figma",
              "VS Code",
              "Next.js",
              "Tailwind CSS",
              "Framer Motion",
              "Python",
              "JavaScript",
              "TypeScript",
              "Linear",
              "Claude",
              "Cursor",
              "Git",
            ].map((tool) => (
              <span key={tool} className="badge badge-outline badge-lg">
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
        {/* Education */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-sm uppercase tracking-widest text-base-content/40 mb-6">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <p className="font-bold">Graphic Design</p>
              <p className="text-base-content/60 text-sm">
                Anhembi Morumbi University
              </p>
            </div>
            <div>
              <p className="font-bold">Science and Technology</p>
              <p className="text-base-content/60 text-sm">
                Federal University of São Paulo
              </p>
            </div>
            <div>
              <p className="font-bold">Applied AI Professional Certificate</p>
              <p className="text-base-content/60 text-sm">IBM</p>
            </div>
          </div>
        </motion.div>
        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xl font-[family-name:var(--font-display)] font-bold mb-6">
            Want to work with someone who ships, not just designs?
          </p>
          <a
            href="mailto:matheus.spindola@hotmail.com"
            className="btn btn-primary"
          >
            Let&apos;s talk
          </a>
        </motion.div>
      </div>
    </div>
  );
}
