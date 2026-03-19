"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: [0.25, 0.4, 0.25, 1] },
  }),
};

const cases = [
  {
    title: "Crosby Health",
    description: "Redesigning healthcare SaaS to serve 5,000+ users",
    tags: ["Healthcare", "SaaS", "AI"],
    slug: "crosby-health",
    color: "bg-primary/10",
  },
  {
    title: "Agristato",
    description: "Building an agritech product from zero to market",
    tags: ["Agritech", "Co-founder", "Product Strategy"],
    slug: "agristato",
    color: "bg-secondary/10",
  },
  {
    title: "eVTOL Air Traffic",
    description: "Designing air traffic management for urban mobility",
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
            Matheus
            <br />
            Spindola
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl text-base-content/60 max-w-xl mb-10 leading-relaxed"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            Crafting user-centric experiences at the intersection of design,
            strategy, and code. Currently building healthcare products and
            co-founding an agritech startup.
          </motion.p>
          <motion.div
            className="flex gap-4"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
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
              I&apos;m a designer who codes, a strategist who prototypes, and a
              builder who obsesses over every pixel and every metric.
            </p>
            <p className="text-base-content/60 mt-6 leading-relaxed">
              With 5+ years designing digital products in SaaS, healthcare, and
              aviation, I bring a unique blend of visual design, user research,
              and technical implementation to every project.
            </p>
            <Link href="/about" className="btn btn-ghost mt-8">
              More about me →
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
              Let&apos;s build something
              <br />
              <span className="text-primary">great together.</span>
            </h2>
            <p className="text-base-content/60 mb-10 max-w-md mx-auto">
              Open for senior product design roles, especially remote positions
              with international teams.
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
