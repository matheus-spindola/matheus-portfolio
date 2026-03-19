import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer footer-center p-10 text-base-content">
      <div className="flex gap-6">
        <a
          href="https://linkedin.com/in/matheus-lucena-spindola"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover text-sm"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/matheus-spindola"
          target="_blank"
          rel="noopener noreferrer"
          className="link link-hover text-sm"
        >
          GitHub
        </a>
        <a
          href="mailto:matheus.spindola@hotmail.com"
          className="link link-hover text-sm"
        >
          Email
        </a>
      </div>
      <p className="text-xs opacity-60">
        © {new Date().getFullYear()} Matheus Spindola. Built with Next.js.
      </p>
    </footer>
  );
}
