"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.4, 0.25, 1] as const,
    },
  }),
};

const cases = [
  {
    title: "Crosby Health",
    description:
      "Shipped 2 healthcare products in 6 months. 5,000 users. No handoff deck in sight.",
    tags: ["Healthcare", "SaaS", "AI"],
    slug: "crosby-health",
    color: "bg-primary/10",
  },
  {
    title: "Agristato",
    description:
      "Co-founding an agritech startup. From market research to codebase — I own the entire product.",
    tags: ["Agritech", "Co-founder", "Product Strategy"],
    slug: "agristato",
    color: "bg-secondary/10",
  },
  {
    title: "eVTOL Air Traffic",
    description:
      "Designed air traffic management for flying vehicles. 50-person team, zero room for vague wireframes.",
    tags: ["Aviation", "Complex Systems", "B2B"],
    slug: "evtol",
    color: "bg-accent/10",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center">
        <div className="container mx-auto px-6">
          <motion.p
            className="text-sm uppercase tracking-widest text-primary mb-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
          >
            Product Designer
          </motion.p>
          <motion.h1
            className="text-5xl md:text-7xl font-bold font-[family-name:var(--font-display)] leading-tight mb-6"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            The design process
            <br />
            <span className="text-primary">you learned is dead.</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-base-content/60 max-w-xl mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Wireframes, pixel-perfect mockups, handoff decks — that was the old
            game. I design in code, prototype with real components, and ship
            what users actually need. Not what a framework told me to build.
          </motion.p>
          <motion.p
            className="text-sm text-base-content/40 mb-10"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
          >
            Matheus Spindola — Product Designer, builder, co-founder.
          </motion.p>
          <motion.div
            className="flex gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
          >
            <a href="#work" className="btn btn-primary">
              View my work
            </a>
            <a
              href="mailto:matheus.spindola@hotmail.com"
              className="btn btn-ghost"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>

      {/* Process Video — Home */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="relative rounded-2xl overflow-hidden bg-base-200"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Replace placeholder with real video */}
            <div className="aspect-video relative">
              <video
                className="w-full h-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                poster="/videos/process-poster.jpg"
              >
                <source src="/videos/old-vs-new.mp4" type="video/mp4" />
              </video>

              {/* Overlay labels */}
              <div className="absolute inset-0 flex">
                <div className="flex-1 flex items-end p-6 md:p-10 bg-gradient-to-t from-black/60 to-transparent">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      The old way
                    </p>
                    <p className="text-white text-sm md:text-base">
                      47 steps. 3 handoffs. 6 weeks.
                    </p>
                  </div>
                </div>
                <div className="w-px bg-white/20" />
                <div className="flex-1 flex items-end p-6 md:p-10 bg-gradient-to-t from-black/60 to-transparent">
                  <div>
                    <p className="text-white/60 text-xs uppercase tracking-widest mb-1">
                      My way
                    </p>
                    <p className="text-white text-sm md:text-base">
                      Idea → code → ship. Same day.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Fallback if no video yet */}
            <div className="absolute inset-0 flex items-center justify-center bg-base-200 peer-[.loaded]:hidden">
              <p className="text-base-content/30 text-sm">Video coming soon</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-sm uppercase tracking-widest text-base-content/40 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Selected Work
          </motion.h2>
          <div className="flex flex-col gap-6">
            {cases.map((c, i) => (
              <motion.div
                key={c.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/cases/${c.slug}`}>
                  <div
                    className={`group rounded-2xl p-8 md:p-12 ${c.color} hover:scale-[1.01] transition-transform duration-300 cursor-pointer`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div>
                        <h3 className="text-2xl md:text-3xl font-bold font-[family-name:var(--font-display)] mb-2 group-hover:text-primary transition-colors">
                          {c.title}
                        </h3>
                        <p className="text-base-content/60">{c.description}</p>
                      </div>
                      <div className="flex gap-2 flex-wrap">
                        {c.tags.map((tag) => (
                          <span
                            key={tag}
                            className="badge badge-outline badge-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm uppercase tracking-widest text-base-content/40 mb-8">
              About
            </h2>
            <p className="text-2xl md:text-3xl leading-relaxed font-[family-name:var(--font-display)]">
              I stopped being &ldquo;just a designer&rdquo; a long time ago.
            </p>
            <p className="text-base-content/60 mt-6 leading-relaxed">
              I design, I code, I think about business. The gap between idea and
              product shouldn&apos;t take months and 47 steps. I close that gap.
            </p>
            <Link href="/about" className="btn btn-ghost mt-8">
              Read the full story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-[family-name:var(--font-display)] mb-6">
              Let&apos;s rethink the old
              <br />
              <span className="text-primary">process together.</span>
            </h2>
            <p className="text-base-content/60 mb-10 max-w-lg mx-auto">
              I&apos;m looking for teams that ship fast, think in code, and
              don&apos;t need a 40-page design spec to make a decision. If that
              sounds like your company, let&apos;s talk.
            </p>
            <div className="flex gap-4 justify-center">
              <a
                href="mailto:matheus.spindola@hotmail.com"
                className="btn btn-primary"
              >
                Send me an email
              </a>
              <a
                href="https://linkedin.com/in/matheus-lucena-spindola"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
