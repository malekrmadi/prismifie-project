import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "../ui/Button";

const navLinks = [
  { name: "Concept", href: "#concept" },
  { name: "À propos", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Expertise", href: "#expertise" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ===== CSS LOCAL AU HEADER ===== */}
      <style>{`
        .header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          transition: background 0.3s ease, box-shadow 0.3s ease;
        }

        .header.transparent {
          background: transparent;
        }

        .header.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          box-shadow: 0 4px 20px rgba(0,0,0,0.05);
        }

        .header-container {
          max-width: 1200px;
          margin: 0 auto;
          height: 64px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo {
          font-family: "Hicloser", sans-serif;
          font-size: 20px;
          color: #ff5fa2;
          letter-spacing: 0.5px;
          text-decoration: none;
        }

        .nav {
          display: flex;
          gap: 48px;
        }

        .nav a {
          font-size: 16px;
          font-weight: 600;
          color: #333;
          text-decoration: none;
          position: relative;
          transition: all 0.3s ease;
        }

        .nav a::after {
          content: "";
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 0;
          height: 2px;
          background: #ff5fa2;
          transition: width 0.3s ease;
        }

        .nav a:hover::after {
          width: 100%;
        }

        .cta {
          margin-left: 32px;
        }

        .mobile-toggle {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
        }

        .mobile-menu {
          background: white;
          padding: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.1);
        }

        .mobile-menu a {
          display: block;
          margin-bottom: 16px;
          color: #333;
          text-decoration: none;
        }

        @media (max-width: 768px) {
          .nav,
          .cta {
            display: none;
          }

          .mobile-toggle {
            display: block;
          }
        }
      `}</style>

      {/* ===== HEADER ===== */}
      <header className={`header ${isScrolled ? "scrolled" : "transparent"}`}>
        <div className="header-container">

          {/* LOGO */}
          <a href="#" className="logo">
            <img src="/prismifie-text-header.png" alt="prismifie" style={{ height: '80px', maxWidth: '300px', objectFit: 'contain' }} />
          </a>

          {/* NAV DESKTOP */}
          <nav className="nav">
            {navLinks.map(link => (
              <a key={link.name} href={link.href}>
                {link.name}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="cta">
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Démarrer un projet
            </Button>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            className="mobile-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* MOBILE MENU */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
            >
              {navLinks.map(link => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Démarrer un projet
              </Button>

              {/* Signature */}
              <div style={{ marginTop: 24, fontSize: 12, opacity: 0.5 }}>
                PRISMIFI
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
